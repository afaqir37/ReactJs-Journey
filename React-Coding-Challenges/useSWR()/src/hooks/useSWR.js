import { useState, useEffect, useRef } from 'react'

const cache = new Map()

const useSWR = (key, fetcher) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)


    useEffect(() => {
        if (!key || !fetcher) return 

        if (cache.has(key)) {
            setData(cache.get(key))
            setIsLoading(false)
            return
        }

        const asyncFetch = async () => {

            try {
                const result = await fetcher()
                cache.set(key, result)
                setData(result)
            } catch (err) {
                setError(err)
            } finally {
                setIsLoading(false)
            }
        }

        asyncFetch()

    }, [key, fetcher])


    useEffect(() => {
        console.log('Data refreshed!')
    }, [data])



    return {
        data,
        isLoading,
        error
    }
}

export default useSWR