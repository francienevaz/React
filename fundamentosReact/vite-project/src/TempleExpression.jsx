import React, { useEffect, useState } from "react";

const TemplateExpression = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const job = {
        profession: 'programmer',
        yearsOfExperience: 3,
    }

    useEffect(() => {
        const userName = prompt('Digite o seu nome:' );
        const userAge = prompt('Digite a sua idade:');

        if (userName == "" || userAge == "") {
            alert("Por favor, digite um valor correspondente");
        }
        else {            
            setName(userName);
            setAge(Number(userAge));
        }
    },[]);    

    return (
        <div>
            <h1>Olá, {name}!</h1>
            <p>Você tem {age} anos.</p>
            <p>Profissão: {job.profession}</p>
            <p>Experiência: {job.yearsOfExperience} anos</p>
        </div>
    )
}

export default TemplateExpression;