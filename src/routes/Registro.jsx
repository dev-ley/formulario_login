import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import styled from 'styled-components'
import TextoHeader from '../Components/TextoHeader';
import InputButton from '../Components/ComponentsForm/InputButton';
import InputUser from '../Components/ComponentsForm/InputUser';
import InputPassword from '../Components/ComponentsForm/InputPassword';
import InputConfirma from '../Components/ComponentsForm/InputConfirma';

const ContainerForm =styled.div`
 background-image: url('/assets/bg-naruto.jpg');
 background-repeat: no-repeat;
 background-position: center;
 background-size: cover;
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
`;

const Form = styled.form`
 background-color: rgba(128, 128, 128, 0);
 backdrop-filter: blur(4px);
 border: 1px solid rgba(255, 255, 255, 0.338);
 border-radius: 10px;
 display: flex;
 flex-direction: column;
 padding: 30px;
`; 

const Registro = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [confirma, setConfirma] = useState('');
  
  const userForm = (e) => {
      e.preventDefault();
      if (user !== '' && password === confirma) {
        setUser('');
        setPassword('');
        setConfirma('');
        navigate("/cadastrosucess");

      } else {
        alert('Senhas diferentes ou campos vazios!')
      }
  };

  return (
    <div>
      <ContainerForm>
          <Form onSubmit={userForm}>
             <TextoHeader texto='Registro' />
             <div>
              <label htmlFor="usuario">Usuario</label>
               <InputUser type="text" placeholder="Digite um nome" id='usuario' name='usuario' value={user} changeName={setUser}/>
             </div>
             <div>
               <label htmlFor="senha">Senha</label>
               <InputPassword type="password" placeholder="Digite a Senha" id='senha' name='senha' value={password} changePassword={setPassword}/>
             </div>
             <div>
               <label htmlFor="confirmar">Confirme a Senha</label>
               <InputConfirma type="password" placeholder="Digite a Senha" id='confirmar' name='confirmar' value={confirma} changeConfirma={setConfirma}/>
             </div>
             <InputButton  type="submit" texto='Cadastrar!' />
         </Form>
       </ContainerForm>
    </div>
  )
}

export default Registro