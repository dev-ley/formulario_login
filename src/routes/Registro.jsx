import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useContext } from "react";
import { UserContext } from '../Context/UserContext'
import styled from 'styled-components'
import TextoHeader from '../Components/TextoHeader';
import InputButton from '../Components/ComponentsForm/InputButton';
import InputUser from '../Components/ComponentsForm/InputUser';
import InputPassword from '../Components/ComponentsForm/InputPassword';
import InputConfirma from '../Components/ComponentsForm/InputConfirma';
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

const MensagemErro = styled.p`
  color: red;
  text-shadow: 1px 1px 1px black;
`

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
  const { user, setUser } = useContext(UserContext);
  const [userRegistro, setUserRegistro] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [passwordRegistro, setPasswordRegistro] = useState('');
  const [confirma, setConfirma] = useState('');
  const [error, setError] = useState(null);

  const registrarUsuario = async (userData) => {
    try {
      const response = await fetch('http://localhost:4000/Usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        throw new Error('Erro ao cadastrar usuário');
      }
  
      return response.json(); // Retornar os dados do usuário cadastrado (opcional)
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  const userForm = async (e) => {
    e.preventDefault();
  
    try {
      if (userRegistro === '' || passwordRegistro !== confirma) {
        throw new Error('Senhas diferentes ou campos vazios!');
      }
  
      // Criar o objeto com os dados do usuário a serem cadastrados
      const userData = {
        username: userRegistro,
        email: userEmail,
        password: passwordRegistro,
      };
  
      await registrarUsuario(userData); // Fazer o POST para o servidor
  
      // Atualizar o estado local se necessário
      setUser([...user, { username: userRegistro, password: passwordRegistro }]);
      navigate("/cadastrosucess");
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };
  
  
  return (
    <div>
      <ContainerForm>
          <Form onSubmit={userForm}>
             <TextoHeader texto='Registro' />
             <div>
              <label htmlFor="usuario">Usuario</label>
               <InputUser type="text"  placeholder="Digite um nome" id='usuario' name='usuario' value={userRegistro} changeName={setUserRegistro}/>
             </div>
             <div>
              <label htmlFor="email">Email</label>
               <InputEmail type="email"  placeholder="Digite um Email" id='email' name='email' value={userEmail} changeName={setUserEmail}/>
             </div>
             <div>
               <label htmlFor="senha">Senha</label>
               <InputPassword type="password"  placeholder="Digite a Senha" id='senha' name='senha' value={passwordRegistro} changePassword={setPasswordRegistro}/>
             </div>
             <div>
               <label htmlFor="confirmar">Confirme a Senha</label>
               <InputConfirma type="password"  placeholder="Digite a Senha" id='confirmar' name='confirmar' value={confirma} changeConfirma={setConfirma}/>
             </div>
             <InputButton  type="submit" texto='Cadastrar!' />
             {error &&  (
              <MensagemErro>{error}</MensagemErro>

             )}
         </Form>
       </ContainerForm>
    </div>
  )
}

export default Registro