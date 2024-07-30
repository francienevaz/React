import { useState } from "react"

const ListRender = () => {
    const [desenhos] = useState(['Over Secret Garden Wall', 'The Amazing World of Gumball', 'Rick and Morty']);

    const [desenhosFavoritos] = useState(
       [
        { id: 1, nome: 'Over Secret Garden Wall'},
        { id: 2, nome: 'The Amazing World of Gumball'},
        { id: 3, nome: 'Rick and Morty'},
       ]
    );



  return (
    <div>
        {/* Toda a lista dentro do React precisa de uma key (uma chave), que é passada como propriedade para o elemento */}
        <ul>
            {desenhos.map((item) => (
                <li key={Math.random()}>{item}</li>
            ))}
        </ul>

        <ul>
            {desenhosFavoritos.map((desenho) => (
                <li key={desenho.id}>{desenho.nome}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender