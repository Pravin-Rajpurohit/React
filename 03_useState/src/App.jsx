import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  const [color, setColor] = useState('red')

  return(
    <>  
    <h1>My favourive color is {color}</h1>

    <button onClick = {()=> setColor('blue')}>blue</button>
    <button onClick = {()=> setColor('green')}>green</button>
    <button onClick = {()=> setColor('yellow')}>yellow</button>
    </>
  )
}
export default App
