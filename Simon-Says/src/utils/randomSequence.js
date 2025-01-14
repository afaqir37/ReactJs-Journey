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

// Fisher-Yates shuffle algorithm implemented below to generate unique colors

export const generateRandomSequence = () => {
  let sequence = colors.slice()
  
  for (let i = sequence.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i);
    [sequence[i], sequence[j]] = [sequence[j], sequence[i]]

  }

  return sequence.slice(4)
}

