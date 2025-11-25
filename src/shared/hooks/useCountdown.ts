// src/shared/hooks/useCountdown.ts

import { useCallback, useEffect, useRef, useState } from "react";
import Notify from "@/lib/toast/Notify.ts";

// Types des options de démarrage
export interface CountdownOptions<T> {
    pollingInterval: number; // Intervalle de polling régulier (en secondes)
    firstCheck: number;      // Temps écoulé avant le premier appel (en secondes)
    initialSeconds: number;  // Durée totale du décompte (en secondes)
    directInterval: number;  // Temps écoulé après lequel directChecking devient true (en secondes)
    pollingOptions: T;       // Payload de base pour l'appel API
}

/**
 * 💡 Hook pour gérer un compte à rebours avec une logique de Polling complexe.
 * * @param onPollApi - Fonction asynchrone à appeler pour le polling. Elle reçoit les options de base
 * plus le booléen `directChecking`.
 */
export const useCountdown = <T>(
    {
        onPollApi, onReachZero
    }:{
        onPollApi: (d: T & { directChecking: boolean }) => Promise<void>
        onReachZero?:()=>void
    }
) => {
    // État du décompte pur
    const [seconds, setSeconds] = useState(0);

    // État de la configuration (options de polling)
    const [config, setConfig] = useState<CountdownOptions<T> | null>(null);

    // Références pour l'intervalle et les secondes initiales
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const initialSecondsRef = useRef(0);

    // Référence pour la fonction de polling (pour éviter de la mettre dans les dépendances de l'intervalle)
    const onPollApiRef = useRef(onPollApi);
    onPollApiRef.current = onPollApi;

    // Fonction d'arrêt
    const stop = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, []);

    // Fonction de démarrage
    const start = useCallback((options: CountdownOptions<T>) => {
        stop();
        initialSecondsRef.current = Math.max(0, Math.floor(options.initialSeconds));
        setSeconds(initialSecondsRef.current);
        setConfig(options);
    }, [stop]);

    // Fonction de réinitialisation
    const reset = useCallback(() => {
        stop();
        setSeconds(0);
        setConfig(null);
        initialSecondsRef.current = 0;
    }, [stop]);


    // Logique principale de l'intervalle et du Polling (Effet Secondaire)
    useEffect(() => {
        if (seconds === 0 || !config) {
            stop();
            return;
        }

        const tick = () => {
            setSeconds(prevSeconds => {
                const newSeconds = Math.max(0, prevSeconds - 1);
                const remainCheck = initialSecondsRef.current - newSeconds; // Temps écoulé

                // Si le compteur atteint zéro (TIMEOUT)
                if (newSeconds === 1) {
                    // 🚨 REQUÊTE FINALE LORSQUE SECONDS = 0
                    // Ceci garantit que le statut est vérifié une dernière fois au moment du timeout
                    onPollApiRef.current({
                        ...config.pollingOptions,
                        directChecking: true
                    } as T & { directChecking: boolean });

                    return 1; // Arrête le décompte (nettoyage au prochain rendu)
                }
                if(newSeconds === 0){
                    Notify.error("Le délai de paiement a expiré. Veuillez réessayer.",{
                        toastId:"countdown"
                    })
                    onReachZero?.()
                }

                // --- Logique de Polling ---

                // 1. Premier Check (à remainCheck == firstCheck)
                if (remainCheck === config.firstCheck && config.firstCheck !== 0) {
                    onPollApiRef.current({
                        ...config.pollingOptions,
                        directChecking: false
                    } as T & { directChecking: boolean });
                }

                // 2. Polling Régulier (après firstCheck et aux multiples de pollingInterval)
                if (
                    remainCheck > config.firstCheck &&
                    config.pollingInterval > 0 &&
                    newSeconds % config.pollingInterval === 0
                ) {
                    // Vérification Directe Conditionnelle (après directInterval écoulé)
                    const hasDirectChecking = remainCheck >= config.directInterval && config.directInterval >= 0;

                    onPollApiRef.current({
                        ...config.pollingOptions,
                        directChecking: hasDirectChecking
                    } as T & { directChecking: boolean });
                }

                return newSeconds;
            });
        };

        // Démarrer l'intervalle
        intervalRef.current = setInterval(tick, 1000);

        // Nettoyage au démontage/changement de `seconds` ou `config`
        return stop;
    }, [seconds, config, stop]);

    // Nettoyage au démontage initial
    useEffect(() => {
        return () => stop();
    }, [stop]);

    return {
        seconds,
        remainder: - seconds, // Temps écoulé
        start,
        stop,
        reset
    };
};

export type CountDownBehavior<T> = ReturnType<typeof useCountdown<T>>;

export default useCountdown;