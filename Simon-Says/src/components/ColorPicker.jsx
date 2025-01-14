import { generateRandomSequence } from "../utils/randomSequence"

const colors = [
    '#d00000', // Red
    '#00b4d8',
    '#0077b6', // Blue
    '#ffb703', // Yellow
    '#9B59B6', // Purple
    '#E67E22', // Orange
    '#99582a', // Teal
    '#34495E', // Dark Blue
]

export default function ColorPicker({ handleColor, isVisible, isGameOver}) {

    const handleDragStart = (e, color) => {
        
        e.dataTransfer.setData('color', color)
    }
    const colorSequence = generateRandomSequence()
    return (
        <div className='flex flex-wrap justify-center gap-20 mt-[100px]'>
            {
                colorSequence.map(color => {
                    return <button
                        key={color}
                        className={`w-16 h-16 border-2 border-black rounded-full 
                                    shadow-lg transition-transform duration-200 
                                    ease-in-out  transform hover:scale-110 hover:shadow-xl ${isVisible || isGameOver ? 'opacity-50 cursor-not-allowed' : ''}`}
                        style={{backgroundColor: `${color}`}}
                        onClick={handleColor}
                        draggable
                        onDragStart={(e) => handleDragStart(e, color)}
                        aria-label={`Selected color: ${color}`}
                    ></button>
                
                })
            }
        </div>
    )
}