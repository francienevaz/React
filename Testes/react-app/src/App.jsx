import { useState } from "react";
import styled from "styled-components";

const BoxInput = styled.div`
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  border-radius: 20px;
  border: 2px solid #ddd;
`;

const InputName = styled.input`
  margin: 10px;
  height: 20px;
  width: 250px;
  border-radius: 10px;
  border: 2px solid #f1f1f1;
  background: transparent;
  font-weight: bold;
  gap: 20px;
  padding: 10px;

  &:focus {
    outline: none;
    border-color: #6200ea;
  }
`;

const InputEmail = styled.input`
  margin: 10px;
  height: 20px;
  width: 250px;
  border-radius: 10px;
  border: 2px solid #f1f1f1;
  background: transparent;
  font-weight: bold;
  padding: 10px;

  &:focus {
    outline: none;
    border-color: #6200ea;
  }
`;

const BtnSubmit = styled.input`
  width: 100px;
  padding: 20px;
  border-radius: 20px;
  border: none;
  background: #6200ea;
  color: #ffffff;
  font-weight: bold;
  gap: 30px;
  cursor: pointer;

  &:hover {
    background: #ffffff;
    color: #6200ea;
    transition: 0.5s ease-in-out;
    border: 2px solid #fff;
  }
`;

function App() {
  return (
    <>
      <BoxInput>
        <InputName
          type="text"
          name="name"
          id="userName"
          placeholder="Digite o seu  nome"
        />
        <InputEmail
          type="email"
          name="email"
          id="userEmail"
          placeholder="Digite o seu Email"
        />
        <BtnSubmit type="submit" value="Enviar" />
      </BoxInput>
    </>
  );
}

export default App;
