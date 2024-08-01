import { useState } from 'react'
import './App.css'
import OverTheGardenWall from './assets/oSegredoAlemDoJardim.jpg'
import ListRender from './components/ListRender'
import Conditional from './components/Conditional'
import ShowUserName from './components/ShowUserName'
import CardDetails from './components/CardDetails'

function App() {
  const [count, setCount] = useState(0)

  // Podemos passar o nome do usuário via props, das 3 formas, passando uma variável, um state ou diretamente, como mostrado abaixo

  const name = 'Pedro'

  const [userName] = useState('Marina')
  const dataCartoon = {
    name: 'Gumball',
    description: 'A série gira em torno de Gumball Watterson, um gato azul de 12 anos de idade, que frequenta a escola secundária na cidade fictícia de Elmore. Acompanhado por seu irmão peixinho, Darwin Watterson, os dois frequentemente se veem envolvidos em várias confusões em diversos locais da cidade, durante o qual eles interagem com os outros membros da família - a irmã, Anais Watterson e os pais Nicole Watterson e Richard Watterson acompanhados de outros personagens secundários.', 
    year: '2011'
  }

  return (
    <>
      <img src={OverTheGardenWall} alt="Desenho" />
      <ListRender/>
      <Conditional/>
      {/* <ShowUserName name='O nome do usuário pode ser passado dessa forma' /> */}
      <ShowUserName name={userName} />
      <CardDetails name={dataCartoon.name} description={dataCartoon.description} year={dataCartoon.year}/>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      
    </>
  )
}

export default App
