import { useState } from 'react'

import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<h1 className='text-emerald-500 font-mono font-extrabold text-2xl text-center'>this is vishu</h1>
<Button>THIS IS VISHU</Button> 
    </>
  )
}

export default App
