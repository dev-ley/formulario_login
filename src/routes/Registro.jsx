import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import styled from 'styled-components'
import { IoMdPerson, IoIosUnlock } from "react-icons/io";

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

const Titulo = styled.h1`
 color: #fff;
 text-shadow: 2px 2px 2px black;
 margin-bottom: 15px;
`;

const Input = styled.input`
 width: 100%;
 position: relative;
 padding: 10px;
 margin: 3px 0;
`;

const IconLock = styled(IoIosUnlock)`
 position: absolute;
 right: 40px;
 transform: translateY(14px);
`;

const IconUser = styled(IoMdPerson)`
 position: absolute;
 right: 40px;
 transform: translateY(14px);
`;

const ContainerFlex = styled.div`
 display: flex;
 justify-content: space-around;
 gap:40px;
 margin: 10px 0;
`;

const Button = styled.button`
   padding: 10px;
   margin-bottom:10px;
   font-weight: bold;
   background-color: rgba(0, 0, 0, 0.237);
   color: #fff;
   cursor: pointer;
   &:hover {
     background-color: rgba(0, 0, 0, 0.605);
   }
`;


const Registro = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [confirma, setConfirma] = useState('');

  //const [usuarios, setUsuarios] = useState([]);  // IDÉIA PARA CADASTRO!
  
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
          <Form>
             <Titulo>Registro</Titulo>
             <div>
              <label htmlFor="usuario">Usuario</label>
               <Input type="text" placeholder="Digite um nome" id='usuario' name='usuario' value={user} onChange={(e) => setUser(e.target.value) }/>
               <IconUser />
             </div>
             <div>
               <label htmlFor="senha">Senha</label>
               <Input type="password" placeholder="Digite a Senha" id='senha' name='senha' value={password} onChange={(e) => setPassword(e.target.value)}/>
               <IconLock />
             </div>
             <div>
               <label htmlFor="confirmar">Confirme a Senha</label>
               <Input type="password" placeholder="Digite a Senha" id='confirmar' name='confirmar' value={confirma} onChange={(e) => setConfirma(e.target.value)}/>
               <IconLock />
             </div>
             <ContainerFlex>
               
             </ContainerFlex>
             <Button  type="submit" onClick={userForm}>Cadastrar!</Button>
         </Form>
       </ContainerForm>
    </div>
  )
}

export default Registro
