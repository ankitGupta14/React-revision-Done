import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Contact from './components/Contact'
function App() {
  // let myObj = {
  //   username: "ankit kr",
  //   age: 34
  // }
  // let myArray = [3,2,51]
  return (
    <>
      <h1 className='bg-green-300 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username = "Raja" btnText = "click me"/>
      <Card username= "Rani"  btnText = "visit me"/>
      <Contact Email="ankit"/>
      <Contact Email= "raja"/>
    </>
  )
}

export default App
