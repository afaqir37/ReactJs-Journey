import { useEffect, useRef } from 'react'


export default function usePrevious(value) {

    const result = useRef()

    useEffect(() => {
        result.current = value
    }, [value])

    return result.current
}