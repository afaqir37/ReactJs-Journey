import { useState, useEffect, useRef } from 'react'
import useTimeout from './hooks/useTimeout'



export default function App() {

  const [count, setCount] = useState(0)
  const [delay, setDelay] = useState(2000)

  const callbackFunction = () => {
    console.log(`the count value is: ${count} and the delay is ${delay}`)
  }

  useTimeout(callbackFunction, delay)






  return (
    <div style={{ padding: '20px' }}>
        <h1>useTimeout Hook Demo</h1>
        <p>Count value is : {count}</p>

        <button 
            onClick={() => setCount(prev => prev + 1)}
            style=
            {{
                padding: '8px 16px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
             }}
        >
          Increment
        </button>

        <button 
            onClick={() => setDelay(prev => prev + 1)}
            style=
            {{
                padding: '8px 16px',
                marginLeft: '20px',
                backgroundColor: '#6A80B9',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
             }}
        >
          update Delay
        </button>


    </div>
  )
}


