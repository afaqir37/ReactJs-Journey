# useIsFirstRender 🔄
A React hook that tells you if it's the `first render` or not.
## 🎯 The Challenge
Create a custom hook that returns a boolean indicating the **first render** state. The hook returns true only during the component's initial render, and false for all subsequent renders.
## Example
```javascript
jsxCopyfunction App() {
  const isFirstRender = useIsFirstRender()
  // only true for the first render
  
  return (
    <div>
      {isFirstRender ? "First time!" : "Been here before"}
    </div>
  )
}
```
## Use Cases
Perfect for controlling one-time animations, initial data fetches, or showing welcome messages to your users.
