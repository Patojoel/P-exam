import {useEffect, useState} from "react";

export function useDebounce<T>({value, delay=500, fn}:{
    value:T; delay?:number, fn?:(d:T)=>void
}): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(
        () => {
            // Update debounced value after delay
            const handler = setTimeout(() => {
                setDebouncedValue(value);
                if(fn){
                    fn(value)
                }
            }, delay);
            return () => {
                clearTimeout(handler);
            };
        },
        [value, delay]
    );

    return debouncedValue;
}