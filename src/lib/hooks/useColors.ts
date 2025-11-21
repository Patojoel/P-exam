import { useMemo } from "react";
import { COLOR_VARS, COLORS, type ColorName } from "@/lib/constants";

/**
 * Hook personnalisé pour accéder facilement aux couleurs du projet
 * 
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const { getVar, getHex, vars, hex } = useColors();
 *   
 *   return (
 *     <div style={{ backgroundColor: getVar("primary") }}>
 *       <h1 style={{ color: getHex("white") }}>Titre</h1>
 *     </div>
 *   );
 * };
 * ```
 */
export const useColors = () => {
    const colorVars = useMemo(() => COLOR_VARS, []);
    const colorHex = useMemo(() => COLORS, []);

    /**
     * Obtenir une variable CSS de couleur
     * @param name - Nom de la couleur
     * @returns Variable CSS au format "var(--color-name)"
     */
    const getVar = (name: keyof typeof COLOR_VARS): string => {
        return colorVars[name];
    };

    /**
     * Obtenir la valeur HEX d'une couleur
     * @param name - Nom de la couleur
     * @returns Valeur hexadécimale de la couleur
     */
    const getHex = (name: keyof typeof COLORS): string => {
        return colorHex[name];
    };

    return {
        /** Obtenir une variable CSS */
        getVar,
        /** Obtenir une valeur HEX */
        getHex,
        /** Toutes les variables CSS */
        vars: colorVars,
        /** Toutes les valeurs HEX */
        hex: colorHex,
    };
};

/**
 * Type pour le retour du hook useColors
 */
export type UseColorsReturn = ReturnType<typeof useColors>;
