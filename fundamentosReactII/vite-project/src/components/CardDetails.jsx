const CardDetails = ({data}) => {
  return (
    <>
      { data.map((element, index) => (
      <div key={index}>
      <img src={element.image} alt="cartoon" style={{
          width: '50%', 
          height: '100vh', 
          objectFit: 'cover'}}/>
      <p>Nome do desenho: {element.name}</p>
      <p style={{margin: '0 100px 0 100px', textAlign: 'justify'}}>Descrição: {element.description}</p>
      <p>Ano de lançamento: {element.year}</p>
      </div>
    ))}
    </>
  )
}

export default CardDetails