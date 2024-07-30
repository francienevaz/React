import { useState } from "react";

const ListRender = () => {
    const [desenhos] = useState(['Over the Garden Wall', 'The Amazing World of Gumball', 'Rick and Morty']);

    const [desenhosFavoritos, setDesenhos] = useState(
       [
        { id: 1, nome: 'Over the Garden Wall' },
        { id: 2, nome: 'The Amazing World of Gumball' },
        { id: 3, nome: 'Rick and Morty' },
       ]
    );

    const deleteRandom = () => {
        const randomIndex = Math.floor(Math.random() * desenhosFavoritos.length);

        // O previous dentro do Set é muito utilizado para modificar listas, pois temos o valor antigo e transformamos em valor novo, o primeiro argumento do 'set' sempre será o previous state;
        
        setDesenhos((prevDesenhos) => {
            return prevDesenhos.filter((desenho, index) => randomIndex !== index);
        });
    }

    return (
        <div>
            {/* Toda a lista dentro do React precisa de uma key (uma chave), que é passada como propriedade para o elemento */}
            <ul>
                {desenhos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <ul>
                {desenhosFavoritos.map((desenho) => (
                    <li key={desenho.id}>{desenho.nome}</li>
                ))}
            </ul>

            <button onClick={deleteRandom}>Delete</button>
        </div>
    );
}

export default ListRender;