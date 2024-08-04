const UserDetails = ({data}) => {
  return (
    <>
        {data.map((element)=>(
            <div key={element.id}>
                <p>Nome: {element.name}</p>
                <p>Idade: {element.age} anos</p>
                <p>Profissão: {element.profession}</p>

                {element.age >= 18 && <p>Está liberado para tirar a habilitação!</p>}
            </div>
        ))}
    </>
  )
}

export default UserDetails