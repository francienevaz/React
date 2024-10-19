import React, { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
    // gerenciamento de dados / criação de formulário

    const [ name, setName] = useState(user ? user.name : "");
    const [ email, setEmail] = useState(user ? user.email : "");
    const [ bio, setBio] = useState(user ? user.bio : "");
    const [ role, setRole] = useState(user ? user.role : "");

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
            "email": email,
            "bio": bio,
            "role": role
        }


        //Limpando os inputs:
        setName("");
        setEmail("");
        setBio("");

        console.log(data);
        
    }

  return (
    <div className='form'>
        {/* envio de form */}
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" placeholder='Digite o seu nome' onChange={handleName} value={name}/>
            

            {/* Label envolvendo o input */}

            <label>
                <span>Email</span>
                <input type="email" placeholder='Digite o seu email'  onChange={(e) => {setEmail(e.target.value)}} value={email}/>
            </label>

            <label>
                <span>Bio:</span>
                <textarea name="bio" id="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            <label>
                <select name="role" id="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <label>
                <input type="submit" value="Enviar" />
            </label>


        </form>
    </div>
  )
}

export default MyForm