
import { useState, useRef, useEffect } from 'react'

export default function GeneratedSequence({ sequence, playerSequence, curtainVisible, setCurtainVisible, setIsAlertVisible, setIsGameOver}) {

    const sequenceRef = useRef(null)
    const [sequenceStyle, setSequenceStyle] = useState({
        top: 0,
        width: 0,
        height: 0
    })
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)

    const revealSequence = () => {
        if (isButtonDisabled) return
        

        if (playerSequence.every(color => color !== null)) {
            setCurtainVisible(false)
            setIsGameOver(true)
        }
        else {
            setIsAlertVisible(true)
            setIsButtonDisabled(true)

            setTimeout(() => {
                setIsAlertVisible(false)
                setIsButtonDisabled(false)
            }, 3000)
        }
    }

    useEffect(() => {
        if (sequenceRef.current) {
            const sequenceRect = sequenceRef.current.getBoundingClientRect()
            setSequenceStyle({
                top: sequenceRect.top,
                left: sequenceRect.left,
                width: sequenceRect.width,
                height: sequenceRect.height
            })

        }
    }, [])


    return (
        <div ref={sequenceRef} className='flex gap-10 flex-wrap justify-center mb-[100px]'>

            {sequence.map((color, index) => (
                <div 
                key={index} 
                className={`w-32 h-32 rounded-lg shawow-2xl `} 
                style={{ backgroundColor: color, borderColor: color }}
            ></div>
            ))}

            <div  
                className={`flex items-center justify-center text-4xl font-serif 
                            select-none cursor-pointer absolute 
                            bg-gray-400 transition-transform duration-1000 
                            ease-in-out rounded 
                            hover:bg-gray-500 hover:scale-105 hover:shadow-lg `}
                style={{
                    top: `${sequenceStyle.top}px`,
                    width: `${sequenceStyle.width}px`,
                    height: `${sequenceStyle.height}px`,
                    transform: curtainVisible ? 'translateX(0)' : 'translateX(-100vw)'
                }}
                onClick={revealSequence}
            >
                {curtainVisible ? 'Reveal' : ''}
            </div>

        </div>
    )
}