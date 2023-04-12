import { useEffect, useState } from "react";

export function useDebounce<T> (value: T, delay=500){ //useDebounce va recibir un tipo por paremtro y un delay por defecto de 500ms
    //esto es para que no se ejecute nada hasta que no se haya pasado el tiempo es decir que el usuario termine de escribir.
    const [debouncedValue, setdebounceValue] =useState(value) 
    useEffect(() => {
        const timer = setTimeout(() => {
            setdebounceValue(value) 
        }, delay)

        return () => {clearTimeout(timer) }  
    }, [value, delay])

    return debouncedValue
}

