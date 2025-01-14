
const colors = [
    '#FF5733', // Red
    '#33FF57', // Green
    '#3357FF', // Blue
    '#F1C40F', // Yellow
    '#9B59B6', // Purple
    '#E67E22', // Orange
    '#1ABC9C', // Teal
    '#34495E', // Dark Blue
]

export default function ColorPicker({ handleColor, isVisible}) {

    const handleDragStart = (e, color) => {
        
        e.dataTransfer.setData('color', color)
    }

    return (
        <div className='flex flex-wrap justify-center gap-20 mt-[100px]'>
            {
                colors.map(color => {
                    return <button
                        key={color}
                        className={`w-16 h-16 border-2 border-black rounded-full 
                                    shadow-lg transition-transform duration-200 
                                    ease-in-out  transform hover:scale-110 hover:shadow-xl ${isVisible ? 'opacity-50 cursor-not-allowed' : ''}`}
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