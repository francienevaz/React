import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <>
      <h2>Forms in React</h2>
      {/* Passamos via propriedade o user, que será chamado na função useState() como props */}
      <MyForm  user={{name: "Marcos Silva", email: "marcos@gmail.com", bio: "Sou programadora Frontend", role: "admin"}}/>
    </>
  )
}

export default App
