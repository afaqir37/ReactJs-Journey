import { useEffect, useRef } from 'react'

export default function useIsFirstRender() {
    let isFirstRender = useRef(true)

    console.log('here: ', isFirstRender)

    useEffect(() => {
        isFirstRender.current = false
    }, [])

    return isFirstRender.current
}