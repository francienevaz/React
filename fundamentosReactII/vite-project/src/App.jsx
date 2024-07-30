import { useState } from 'react'
import './App.css'
import OverTheGardenWall from './assets/oSegredoAlemDoJardim.jpg'
import ListRender from './components/ListRender'
import Conditional from './components/Conditional'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={OverTheGardenWall} alt="Desenho" />
      <ListRender/>
      <Conditional/>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      
    </>
  )
}

export default App
