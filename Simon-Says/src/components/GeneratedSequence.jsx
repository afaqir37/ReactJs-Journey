


export default function GeneratedSequence(props) {
    return (
        <div className='flex gap-10 flex-wrap justify-center mb-[100px]'>

            {props.sequence.map((color, index) => (
                <div 
                key={index} 
                className={`w-32 h-32 ${color} border-4 border-black rounded-lg`}
            ></div>
            ))}

        </div>
    )
}