
import { useState } from 'react'
import usePrevious from './hooks/usePrevious'


export default function App() {
  
  const [array, setArray] = useState([1, 2, 3])
  const prevArray = usePrevious(array)



  return (
    <div style={{
      fontSize: 'xx-large',
      fontFamily: 'sans-serif'
    }}>

      <p>Current array: {JSON.stringify(array)}</p>
      <p>Previous array: {prevArray ? JSON.stringify(prevArray) : 'N/A'}</p>

      <button 
      
        style={{
          backgroundColor: '#CBA35C',
          fontSize: 'xx-large',
          fontFamily: 'sans-serif',
          border: 'none',
          borderRadius: '8px'
        }}

        onClick={() => setArray(prev => [...prev, prev.length + 1])}
      >

        Add to array
      
      </button>
    </div>
  )
}