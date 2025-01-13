
import { useState, useEffect } from 'react'
import GeneratedSequence from './components/GeneratedSequence'
import PlayerSequence from './components/PlayerSequence'
import { generateRandomSequence } from './utils/randomSequence'


export default function SimonSays() {


  const [sequence, setSequence] = useState(generateRandomSequence())
  const [isPlaying, setIsPlaying] = useState(false)
  const [countdown, setCountdown] = useState(4)
  const [isVisible, setIsVisible] = useState(false)
  

  useEffect(() => {

      let timer

      if (isPlaying && countdown !== 0) {
        setIsVisible(true)
        
        timer = setInterval(() => {
     
           setCountdown(prev => {
             if (prev > 0)
               return prev - 1
             else {
               clearInterval(timer) 
               return 0
             }
           })
         },1000)

      }
      
      let timeId
      if (countdown === 0)
        timeId = setTimeout(() => setIsVisible(false), 1000)


      return () => {
        clearInterval(timer)
        clearTimeout(timeId)
      }
  }, [isPlaying, countdown])
  


  const startGame = () => {
    setSequence(generateRandomSequence())
    setIsPlaying(prev => !prev)
    setCountdown(4)
    setIsVisible(false)
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


      <div className='h-32'>

        
          <div className={`font-sans text-xl font-bold  transition-opacity duration-500 ease-in-out delay-200 ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'} `}>
            Memorize the following sequence in {' '}
            <span>{countdown}</span>
          </div>

      </div>


      <div className='flex flex-col items-center'>

          <GeneratedSequence sequence={sequence} />
          <PlayerSequence sequence={sequence} />

        
      </div>

    </main>
  )
}
