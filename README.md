# React Native Uncommon Bug: Accessing State Before Mount/After Unmount

This repository demonstrates a common yet often overlooked bug in React Native: attempting to access a component's state before it has fully mounted or after it has unmounted. This usually arises when dealing with asynchronous actions within lifecycle methods or event handlers.

## The Bug

The `bug.js` file contains a component that fetches data using `useEffect` and updates its state accordingly.  However, it attempts to log the state even before the data has been fetched, resulting in undefined values causing the app to crash or display unexpected behavior.

## The Solution

The `bugSolution.js` demonstrates the solution: using conditional checks to verify that the component is mounted and the state has been updated before accessing it. This helps prevent errors by gracefully handling scenarios where the state might not yet be available.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run the project using a React Native environment.
4. Observe the behavior in the console and the app's display.

## How to Fix

Refer to `bugSolution.js` for the correction, showing proper conditional rendering and state handling to avoid errors.