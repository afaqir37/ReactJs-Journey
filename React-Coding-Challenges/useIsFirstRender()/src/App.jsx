
import { useState, useEffect} from 'react'
import useIsFirstRender from './hooks/useIsFirstRender'


function App() {
    const [count, setCount] = useState(0)

    const isFirstRender = useIsFirstRender()

    return (
      <div style={{ padding: '20px' }}>
          <p style={{ 

            fontSize: 'xx-large', 
            fontWeight: '700', 
            fontFamily: 'sans-serif'
            
            }}>
              
              Count value is : {count}
            </p>

            <button 
            
                style={{
                  padding: '8px 14px',
                  fontSize: 'xx-large',
                  backgroundColor: '#578E7E',
                  color: 'white',
                  border: 'none',
                  borderRadius: '20px',
                  cursor: 'pointer'
                }}

                onClick={() => setCount(prev => prev + 1)}
                
              >
              Click Me!
            </button>

            {
              isFirstRender ?

              <p style={{ fontSize: 'xx-large', fontFamily: 'sans-serif', fontWeight: '500'}}>
                  This is the first Render!
              </p> : 
              
              <p style={{ fontSize: 'xx-large', fontFamily: 'sans-serif', fontWeight: '500'}}>
                This is not the first Render!
              </p>
            }
      </div>
    )
}


export default App