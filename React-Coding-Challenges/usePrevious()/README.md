# 🎮 React Custom Hook: `usePrevious` 🎮

## 📚 Introduction

In this exercise, we will create a custom React hook called `usePrevious` that tracks the **previous value** of a state or prop. This can be very useful when we want to compare the current state with its previous state (e.g., for animations, side effects, logging, etc.).

In this example, we'll use `useState`, `useEffect`, and `useRef` to implement and demonstrate how `usePrevious` works in React.

## 🛠️ What You Will Learn

- How to create a custom React hook.
- Understanding how `useEffect` and `useRef` work together.
- How to track the previous value of a state across renders.

## ⚙️ Code Breakdown

### 1. `usePrevious` Hook

The `usePrevious` hook tracks the previous value of a given state. It relies on `useRef` to persist values across renders, and `useEffect` to update the reference value whenever the given value changes.

```javascript
import { useEffect, useRef } from 'react'

export default function usePrevious(value) {
  const result = useRef()

  useEffect(() => {
    result.current = value
  }, [value])

  return result.current
}
```

#### How it works:
useRef(): Keeps the value between renders without triggering a re-render.
useEffect(): Runs after the render and updates the useRef value to the current value passed to usePrevious.
Initially, result.current is undefined, and after the first render, it holds the previous state.

### 2. Example Component: App

The App component demonstrates how the usePrevious hook is used. We will track an array of numbers and see how the usePrevious hook returns the previous value of the array.

```javascript
import { useState } from 'react'
import usePrevious from './hooks/usePrevious'

export default function App() {
  
  const [array, setArray] = useState([1, 2, 3])
  const prevArray = usePrevious(array)



  return (
    <div style={{
      fontSize: 'xx-large',
      fontFamily: 'sans-serif'
    }}>

      <p>Current array: {JSON.stringify(array)}</p>
      <p>Previous array: {prevArray ? JSON.stringify(prevArray) : 'N/A'}</p>

      <button 
      
        style={{
          backgroundColor: '#CBA35C',
          fontSize: 'xx-large',
          fontFamily: 'sans-serif',
          border: 'none',
          borderRadius: '8px'
        }}

        onClick={() => setArray(prev => [...prev, prev.length + 1])}
      >

        Add to array
      
      </button>
    </div>
  )
}
```

#### Explanation:
State (array): The array starts with [1, 2, 3] and we add new numbers to it by clicking the button.
prevArray: This holds the previous value of array. It uses the usePrevious hook to track the previous value.
On each click, the array is updated, and the prevArray shows the previous value.
### 3. Why Does prevArray Not Match array Initially? 🤔
In the initial render, prevArray will be undefined because useEffect hasn't updated the useRef value yet. The useEffect runs after the render, so on the first render, the previous value doesn't exist.

#### Key points to note:

- useRef holds the current value across renders.
- useEffect updates the ref with the new value after the render cycle, meaning that during the render, the usePrevious hook will return the value from the previous render.
- This behavior is expected, as React's render cycle ensures that the ref value is updated after the render, so prevArray will only contain the previous state in subsequent renders.