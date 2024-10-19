import React, { useState } from 'react'
import './MyForm.css'

const MyForm = () => {
    // gerenciamento de dados / criação de formulário

    const [ name, setName] = useState();
    const [ email, setEmail] = useState();

    const handleName = (e) => {
        setName(e.target.value);
    }

    //Setamos o name em uma função separada
    //console.log(name);
    //Setamos o email em uma função inline diretamente no input
    //console.log(email);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            "name" : name,
            "email": email
        }

        console.log(data);
        
    }

  return (
    <div className='form'>
        {/* envio de form */}
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" placeholder='Digite o seu nome' onChange={handleName}/>
            <input type="submit" value="Enviar" />

            {/* Label envolvendo o input */}

            <label>
                <span>Email</span>
                <input type="email" placeholder='Digite o seu email'  onChange={(e) => {setEmail(e.target.value)}} />
            </label>


        </form>
    </div>
  )
}

export default MyForm