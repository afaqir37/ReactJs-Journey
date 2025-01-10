
import useSWR from '../hooks/useSWR'

const fetcher = (async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()

    return (data)
 })

export default function FetchComponent() {


    const { isLoading, error, data} = useSWR('unique-key', fetcher)


    return (
    
    <div style={{
        padding: '20px',
        fontSize: 'xx-large',
        fontFamily: 'sans-serif',
        border: 'solid 4px black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffafcc'
      }}>
        {isLoading && 
          <p>Loading ...</p>
        }

        {error && 
          <p>An error has occured: {error}</p>
        }

        {data && 
          <div>
          <p>Fetch succeeded!</p>
          <p>JSON: {JSON.stringify(data)}</p>
          </div>
        }

        
      </div>
    )
}