
import { useState, useEffect } from 'react'
import GeneratedSequence from './components/GeneratedSequence'
import PlayerSequence from './components/PlayerSequence'
import { generateRandomSequence } from './utils/randomSequence'


export default function SimonSays() {


  const [sequence, setSequence] = useState(generateRandomSequence())
  const [isPlaying, setIsPlaying] = useState(false)
  

  


  const startGame = () => {
    setSequence(generateRandomSequence())
    setIsPlaying(prev => !prev)
  }

  return (
    <main className='flex flex-col items-center justify-start h-screen p-9 bg-[#E7FBE6]'>
      <h1 className='font-sans text-5xl mb-[300px] font-semibold'>Simon Says:</h1>

      <div className='mb-9'>
        <button
          onClick={startGame}
          className='bg-purple-500 text-white px-4 py-2 rounded-full text-lg hover:bg-purple-400'
        >
          {isPlaying ? 'Restart' : 'New Game'}
        </button>
      </div>

      <div className='flex flex-col items-center'>

          <GeneratedSequence sequence={sequence} />
          <PlayerSequence sequence={sequence} />

        
      </div>

    </main>
  )
}
