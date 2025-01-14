
import { useState, useEffect } from 'react'
import GeneratedSequence from './components/GeneratedSequence'
import PlayerSequence from './components/PlayerSequence'
import ColorPicker from './components/ColorPicker'
import Alert from './components/Alert'
import { generateRandomSequence } from './utils/randomSequence'
import { handleColor } from './utils/handleColor'


export default function SimonSays() {


  const [sequence, setSequence] = useState(generateRandomSequence())
  const [playerSequence, setPlayerSequence] = useState(Array(sequence.length).fill(null))
  const [isPlaying, setIsPlaying] = useState(false)
  const [countdown, setCountdown] = useState(4)
  const [isVisible, setIsVisible] = useState(false)
  const [curtainVisible, setCurtainVisible] = useState(false)
  const [isAlertVisible, setIsAlertVisible] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false)
  

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
        timeId = setTimeout(() => {
          setIsVisible(false)
          setCurtainVisible(true)
        }, 1000)


      return () => {
        clearInterval(timer)
        clearTimeout(timeId)
      }
  }, [isPlaying, countdown])
  
  useEffect(() => {
    if (JSON.stringify(sequence) === JSON.stringify(playerSequence))
        setIsGameOver(true)
  }, [curtainVisible])

  const startGame = () => {
    setSequence(generateRandomSequence())
    setPlayerSequence(Array(sequence.length).fill(null))
    setIsPlaying(prev => !prev)
    setCountdown(4)
    setIsVisible(false)
    setCurtainVisible(false)
    setIsGameOver(false)
  }


  return (
    <main className='flex flex-col items-center justify-start h-screen p-9 bg-[#E7FBE6]'>
      <h1 className='font-sans text-5xl mb-4 font-semibold'>Simon Says:</h1>

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

          <div className='h-32'>
            <div className={`transition-opacity duration-500 ease-in-out  ${isAlertVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <Alert />
            </div>
          </div>

          <GeneratedSequence 
            sequence={sequence} 
            playerSequence={playerSequence}
            curtainVisible={curtainVisible}
            setCurtainVisible={setCurtainVisible}
            setIsAlertVisible={setIsAlertVisible}
            setIsGameOver={setIsGameOver}
          />
          
          <PlayerSequence 
            playerSequence={playerSequence}
            setPlayerSequence={setPlayerSequence}
            isVisible={isVisible}
            isGameOver={isGameOver}
          />
          <ColorPicker
            handleColor={handleColor} 
            isVisible={isVisible}
            isGameOver={isGameOver}
          />

        
      </div>

    </main>
  )
}
