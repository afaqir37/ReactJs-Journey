const colors = [
    {name: 'red', colorBg: 'bg-red-500', colorBgActive: 'bg-red-300'},
    {name: 'green', colorBg: 'bg-green-500', colorBgActive: 'bg-green-300'},
    {name: 'blue', colorBg: 'bg-blue-500', colorBgActive: 'bg-blue-300'},
    {name: 'yellow', colorBg: 'bg-yellow-500', colorBgActive: 'bg-yellow-300'}
  ]

// Fisher-Yates shuffle algorithm implemented below to generate unique colors

export const generateRandomSequence = () => {
  let sequence = colors.slice()
  
  for (let i = sequence.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i);
    [sequence[i], sequence[j]] = [sequence[j], sequence[i]]

  }

  return sequence.map(obj => obj.colorBg)
}

