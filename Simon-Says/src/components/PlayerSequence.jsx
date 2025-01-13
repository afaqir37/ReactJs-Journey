

export default function PlayerSequence(props) {
    return (
        <div className='flex gap-10 flex-wrap justify-center'>

        {
          Array.from({ length: props.sequence.length}).map((_, index) => (<div key={index} className='w-32 h-32 border-4 border-black rounded-lg'></div>))
        }

      </div>
    )
}