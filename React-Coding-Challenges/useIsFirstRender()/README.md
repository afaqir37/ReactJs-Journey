🚀 React Hook Challenge: useIsFirstRender
In this challenge, you'll build a custom React hook called useIsFirstRender that determines whether it's the first render of a component. 🖥️✨

🎯 Objective:
The goal is to create a hook that returns true on the first render of a component, and false on all subsequent renders. This is useful for scenarios where you want to trigger certain actions only on the initial mount (e.g., showing a welcome message, fetching data, or running a one-time animation). 🌟

🔑 Key Concepts:
useRef: Use the useRef hook to store a flag that persists between renders without causing re-renders.
useEffect: The useEffect hook will allow you to set the flag to false after the first render, ensuring subsequent renders reflect the updated state.
💡 Use Case:
This hook is helpful in scenarios like:

Skipping certain side effects during the first render.
Triggering animations only on the first load of the component.
Conditionally executing logic based on the render lifecycle.
