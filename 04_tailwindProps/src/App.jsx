import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './component/Card'

function App() {
  

  return (
    <>
      <h1 className = 'bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      
      <Card src ="https://images.pexels.com/photos/34043108/pexels-photo-34043108.jpeg" heading = "Roadview"/>
      <Card src = "https://images.pexels.com/photos/37295912/pexels-photo-37295912.jpeg" heading = "Mountains"  />

    </>
  )
}

export default App
