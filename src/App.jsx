import { useState } from 'react'
import './App.css'
import { StrictMode } from 'react'
import BasicExample from './hook-example/useState/02-basic-useState'
import UseStateArray from './hook-example/useState/03-array-useState'
import UseStateObject from './hook-example/useState/04-object-useState'
import ErrorUseEffect from './hook-example/useEffect/01-error-useEffect'
import FetchData from './hook-example/useEffect/02-useEffect'
import BasicRendering from './hook-example/condition-rendering/01-multiple-returns-basic'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>+
      <BasicRendering/>
    
    </div>
      </>
  )
}

export default App
