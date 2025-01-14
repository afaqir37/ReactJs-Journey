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

// Fisher-Yates shuffle algorithm implemented below to generate unique colors

export const generateRandomSequence = () => {
  let sequence = colors.slice()
  
  for (let i = sequence.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i);
    [sequence[i], sequence[j]] = [sequence[j], sequence[i]]

  }

  return sequence.slice(4)
}

