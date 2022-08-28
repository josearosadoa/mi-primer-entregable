import { useState } from 'react'
import reactLogo from './assets/react.svg'
import quotes from './quotes.json'
import './App.css'
import { createPortal } from 'react-dom'
import CardQuote from './components/CardQuote'
import ButtonQuote from './components/ButtonQuote'


function App() {
  const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F","#F9F871"]
  const randomColor = Math.floor(Math.random() * colors.length)
  document.body.style = `color: ${colors[randomColor]}`
  document.body.style = `background: ${colors[randomColor]}`
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const [index, setIndex] = useState(randomIndex)
  const changedQuotes = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setIndex(randomIndex)



  
    
  }
  return (
    <div className="App" >
    < CardQuote index={index} randomIndex={randomIndex} changedQuotes ={changedQuotes} colors={colors} randomColor={randomColor}/>
    </div>
  )
}

export default App
