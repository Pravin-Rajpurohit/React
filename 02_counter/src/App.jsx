import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  // let counter = 15

  const addValue = () => {
    if(counter >= 20){
      setCounter(20)
    }
    else{
      setCounter(counter + 1)
    }
  }

  const removeValue = () =>{
    if(counter <= 0){
      setCounter(0)
    }
    else{
      setCounter(counter - 1)
    }
    
  }
  return(
    <>
    <h1>Hello Pravin!</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick = {addValue}> Add Value {counter} </button>
    <button onClick = {removeValue}> Remove Value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )


}

export default App
