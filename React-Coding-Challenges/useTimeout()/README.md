# useTimeout Hook

A custom React hook that provides a declarative way to handle `setTimeout` with some key improvements over raw `setTimeout` usage. This hook is particularly useful when you need to manage timeouts in React components while handling dynamic delays and callbacks efficiently.

## Problem Statement

When using `setTimeout` in React components, we often encounter two main challenges:

1. **Dynamic Delays**: We want the timer to reset when the delay value changes, ensuring that the timeout always matches the latest specified duration.

2. **Changing Callbacks**: We want to execute the most recent version of our callback function without resetting the timer every time the callback changes or the component re-renders.

Traditional `setTimeout` usage in React can lead to either stale callbacks or unnecessary timer resets. This hook solves both problems by:
- Resetting the timer only when the delay changes
- Always using the most up-to-date callback without resetting the timer
- Properly cleaning up timeouts to prevent memory leaks

## Features

- 🔄 Automatically resets timer when delay changes
- 🎯 Always executes the latest callback function
- 🧹 Cleans up timeouts on unmount
- 🛡️ Prevents memory leaks
- 💡 Intuitive API that matches the familiar setTimeout syntax

This implementation uses React's `useRef` and `useEffect` hooks to achieve stable timeouts while maintaining access to fresh callback values.