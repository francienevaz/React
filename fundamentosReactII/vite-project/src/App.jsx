import { useState } from 'react'
import './App.css'
import OverTheGardenWall from './assets/oSegredoAlemDoJardim.jpg'
import Gumball from './assets/gumball.jpg'
import AdventureTime from './assets/adventureTime.jpg'
import ZeldaTearsOfTheKingdom from './assets/zelda.jpg'
import Tunic from './assets/tunic.jpg'
import Bramble from './assets/bramble.jpg'
import ListRender from './components/ListRender'
import Conditional from './components/Conditional'
import ShowUserName from './components/ShowUserName'
import CardDetails from './components/CardDetails'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'

function App() {
  const [count, setCount] = useState(0)

  // Podemos passar o nome do usuário via props, das 3 formas, passando uma variável, um state ou diretamente, como mostrado abaixo

  const name = 'Pedro'

  const [userName] = useState('Marina')
  const dataCartoon = [{
    name: 'Gumball',
    image: Gumball,
    description: 'A série gira em torno de Gumball Watterson, um gato azul de 12 anos de idade, que frequenta a escola secundária na cidade fictícia de Elmore. Acompanhado por seu irmão peixinho, Darwin Watterson, os dois frequentemente se veem envolvidos em várias confusões em diversos locais da cidade, durante o qual eles interagem com os outros membros da família - a irmã, Anais Watterson e os pais Nicole Watterson e Richard Watterson acompanhados de outros personagens secundários.', 
    year: '2011'
  },
  {
    name: 'Over the Garden Wall',
    image: OverTheGardenWall,
    description: 'A série é uma aventura de fantasia que segue a história de dois irmanos mais velho, que se perdem em uma floresta misteriosa durante uma viagem de inverno. A série é uma mistura de aventura, mistério e terror, com elementos de fantasia e realismo.',
    year: '2014'

  },
  {
    name: 'Adventure Time',
    image: AdventureTime,
    description: 'A série segue as aventuras de Finn, o Humano e o seu melhor amigo e irmão adotivo Jake, o Cão; que se aventuram na Terra de Ooo, num futuro pós-apocalíptico por volta de mil anos após a "Grande Guerra dos Cogumelos", sendo Finn presumidamente o último humano existente. Finn foi abandonado pelos seus pais numa floresta até que o casal de cães Joshua e Margaret (pais biológicos de Jake) o adotaram.[6] Jake e Finn são aventureiros profissionais, frequentemente desbravando masmorras ou resgatando as várias princesas da Terra de Ooo. A Princesa Jujuba, a soberana do Reino Doce, da qual Finn é o paladino jurado, com a missão de proteger a ela e ao reino de quaisquer ameaças.',
    year: '2010'

  }
]

  const dataGames = [
    { 
      name: 'Zelda Tears of the Kingdom',
      image: ZeldaTearsOfTheKingdom,
      description: 'O jogo é uma aventura de ação-aventura, com elementos      de RPG, que segue a história de Link, um guerreiro que é enviado para o  mundo de Hyrule para derrotar o malvado Calamity Ganon.',
      year: '2023'

    }, 
    {
      name: 'Tunic',
      image: Tunic,
      description: 'Tunic é um jogo do gênero ação-aventura lançado em 2022 desenvolvido pela Isometricorp Games e publicado pela Finji. O jogo se passa em um mundo de fantasia em ruínas, onde o jogador controla uma raposa antropomórfica em uma expedição para libertar um espírito de raposa em um cristal.',
      year: '2022'
    }, 
    {
      name: 'Bramble: The Mountain King',
      image: Bramble,
      description: 'é um videogame de ação e aventura de 2023 desenvolvido pela Dimfrost Studio e publicado pela Merge Games. Os jogadores controlam um menino chamado Olle que tenta resgatar sua irmã sequestrada, Lillemor, de criaturas mitológicas.',
      year: '2023'
    }
]

  const executeThisFunction = () => {
    console.log('Clicou')
  }

  return (
    <>
      <ListRender/>
      <Conditional/>
      {/* <ShowUserName name='O nome do usuário pode ser passado dessa forma' /> */}
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <h2>Desenhos</h2>
      <CardDetails data={dataCartoon}/>
      {/* reaproveitando os componentes */}
      <h2>Jogos</h2>
      <CardDetails data={dataGames}/>
      {/* children */}
      <Container>
         <p>Essa é a children</p>
      </Container>
      <ExecuteFunction executeThisFunction={executeThisFunction}/>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      
    </>
  )
}

export default App
