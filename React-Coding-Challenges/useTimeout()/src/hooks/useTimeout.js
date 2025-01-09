import { useState, useEffect, useRef } from 'react'

export default function useTimeout(callback, delay) {
    const callbackRef = useRef()

    // keep the latest version of callback without re-rendering 

    useEffect(() => {
        callbackRef.current = callback
        console.log('callback updated')
    }, [callback])

    // reset the timer whenever the delay is changed without

    useEffect(() => {
        const timerId = setTimeout( () => callbackRef.current(), delay)

        return () => clearTimeout(timerId)
    }, [delay])
}