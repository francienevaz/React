import {useState} from 'react';

const Challenge = () => {
    const [value1, setValue1] = useState(5);
    const [value2, setValue2] = useState(8);
    const [result, setResult] = useState(null);

    const soma = () => {
        console.log(value1, value2)
        const resultado = value1 + value2;

        console.log(resultado)
        setResult(resultado);
    }

    return(
    
        <div>
            <div>
                <p>{value1}</p>
                <p>{value2}</p>

                <p onClick={soma} style={{ cursor: 'pointer' }}>Somar</p>
                {result !== null && <p>Resultado: {result}</p>}
            </div>
        </div>
    )
}

export default Challenge;