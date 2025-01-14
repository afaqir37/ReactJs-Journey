import { useState } from 'react'

export default function PlayerSequence({ playerSequence, setPlayerSequence, isVisible }) {

    

    const handleDrop = (e, index) => {
      e.preventDefault()

      if (isVisible)
        return 
      const color = e.dataTransfer.getData('color')
      const newPlayerSequence = [...playerSequence]
      newPlayerSequence[index] = color
      setPlayerSequence(newPlayerSequence)
    }

    const handleDragOver = (e) => {
      e.preventDefault()
    }

    const handleRightClick = (e, index) => {
      e.preventDefault()
      const newPlayerSequence = [...playerSequence]
      newPlayerSequence[index] = null
      setPlayerSequence(newPlayerSequence)
    }

    return (
        <div className='flex gap-10 flex-wrap justify-center'>

        {
          playerSequence
            .map((_, index) => 
              ( 
                <div 
                    key={index} 
                    className='flex items-center justify-center w-32 h-32 border-2 rounded-lg'
                    style={{ borderColor: playerSequence[index] ? playerSequence[index] : 'black'}}
                    onDrop={(e) => handleDrop(e, index)}
                    onDragOver={handleDragOver}
                    onContextMenu={(e) => handleRightClick(e, index)}
                    
                >
                  {playerSequence[index] ? (
                    <div  
                        className='w-full h-full transition-transform duration-200 ease-in-out bounce shadow-lg '
                        style={{ backgroundColor: playerSequence[index], borderColor: playerSequence[index]}}
                    />
                  ) : (
                    <span className='text-gray-500 text-center'>Drop Color Here!</span>
                  )}
                </div>
   
              ))
        }

      </div>
    )
}