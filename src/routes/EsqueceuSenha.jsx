import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import styled from 'styled-components'
import TextoHeader from '../Components/TextoHeader';
import InputButton from '../Components/ComponentsForm/InputButton';
import InputEmail from '../Components/ComponentsForm/InputEmail';

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

  const [userEmail, setUserEmail] = useState('');
  
  const userForm = (e) => {
    e.preventDefault();
    alert(`Enviamos um email para ${userEmail}`)
    navigate("/");

  }
  
  return (
    <div>
      <ContainerForm>
          <Form onSubmit={userForm}>
             <TextoHeader texto='Recuperação de Senha' />
        
             <div>
              <label htmlFor="email">Email</label>
               <InputEmail type="email"  placeholder="Digite um Email" id='email' name='email' value={userEmail} changeName={setUserEmail}/>
             </div>
         
             <InputButton  type="submit" texto='Recuperar!' />
          </Form>
       </ContainerForm>
    </div>
  )
}

export default Registro