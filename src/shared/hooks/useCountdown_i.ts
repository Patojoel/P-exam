import {useEffect, useRef, useState} from "react";

export const useCountdown = <T>(onPollApi:(d:T)=>Promise<void>) => {
    // const [seconds, setSeconds] = useState(0);
    const [intervalOptions, setIntervalOptions] = useState<{
        pollingInterval:number,
        firstCheck:number,
        directInterval:number,
        seconds:number,
        initialSecond:number,
        pollingOptions:T|null

    }>({
        seconds:0,
        initialSecond:0,
        firstCheck:0,
        pollingInterval : 5,
        directInterval: 10,
        pollingOptions:null
    });
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const start = (options:{
        pollingInterval : number,
        firstCheck : number,
        initialSeconds:number,
        directInterval: number,
        pollingOptions: T
    }) => {
        setIntervalOptions({
            seconds:Math.max(0, Math.floor(options.initialSeconds)),
            initialSecond:Math.max(0, Math.floor(options.initialSeconds)),
            pollingInterval:options.pollingInterval,
            firstCheck:options.firstCheck,
            directInterval:options.directInterval,
            pollingOptions:options.pollingOptions
        })
    };

    const stop = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const reset = () => {
        stop();
        setIntervalOptions({
            seconds:0,
            firstCheck:0,
            initialSecond:0,
            pollingInterval : 5,
            directInterval: 10,
            pollingOptions:null
        });
    };

    useEffect(() => {
        // Nettoyage au démontage
        return () => stop();
    }, []);

    useEffect(() => {
        stop();

        if (intervalOptions.seconds > 0) {
            intervalRef.current = setInterval(() => {
                setIntervalOptions(prev=>{
                    const newSeconds = (prev.seconds > 0 ? prev.seconds - 1 : 0)
                    const remainCheck = prev.initialSecond - newSeconds
                    const hasDirectChecking= remainCheck >= prev.directInterval && prev.directInterval >=0
                    if(remainCheck===prev.firstCheck && prev.firstCheck!==0){
                        onPollApi(prev.pollingOptions as T)
                    }
                    if(remainCheck>prev.firstCheck && prev.pollingInterval>0 && newSeconds%prev.pollingInterval===0 ){
                        const params = {...prev?.pollingOptions,
                            directChecking:hasDirectChecking
                        } as T
                        onPollApi(params)
                    }

                    return ({
                        ...prev,
                        seconds:newSeconds
                    })
                })
            }, 1000);
        }

        return () => stop();
    }, [intervalOptions.seconds]);

    return { seconds:intervalOptions.seconds, remainder: -intervalOptions.seconds, start, stop, reset };
};
export type CountDownBehavior<T> = ReturnType<typeof useCountdown<T>>;

export default useCountdown;
