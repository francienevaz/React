import Gumball from '../assets/gumball.jpg'

const CardDetails = ({name, description, year}) => {
  return (
    <div>
        <img src={Gumball} alt="gumball" style={{
            width: '50%', 
            height: '100vh', 
            objectFit: 'cover'}}/>
        <p>Nome do desenho: {name}</p>
        <p style={{margin: '0 100px 0 100px', textAlign: 'justify'}}>Descrição: {description}</p>
        <p>Ano de lançamento: {year}</p>
    </div>
  )
}

export default CardDetails