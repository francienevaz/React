
import './App.css'
import Header from './components/Header'
import Container from './components/Container'
import Menu from './components/Menu'
import Content from './components/Content'

function App() {

  const n = false;

  return (
    <>
    {n && <p>Teste</p>}
    {!n ? <p>Verdadeiro</p> : <p>Falso</p>}
      <Header/>
      <Container>
        <Menu />
        <Content/>
      </Container>
      
    </>
  )
}

export default App
