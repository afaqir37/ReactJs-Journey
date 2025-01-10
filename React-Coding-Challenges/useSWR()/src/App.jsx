import { useState, useEffect } from 'react'
import FetchComponent from './components/FetchComponent'




const App = () => {
  const [startFetch, setStartFetch] = useState(false)




  


  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#cdb4db'
    }}>
        { startFetch && <FetchComponent/> }
      

        <button onClick={() => {
          setStartFetch(prev => !prev)
        }}>
          
          {startFetch ? 'Stop Fetching' : 'Start Fetching'}
          
        </button>
    </div>
  )
}

export default App