import React, { useContext } from 'react'
import Button from './components/Button'
import { CounterContext } from './context/CounterContext'



function App() {
  const counterState = useContext(CounterContext)
  return (
    <>
      <h1>Count is: {counterState.count}</h1>
      <Button />
      <Button />
    </>
  )
}

export default App