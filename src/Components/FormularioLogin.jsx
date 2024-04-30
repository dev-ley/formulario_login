import React from 'react'
import { useState } from "react";
import styled from 'styled-components'
import { IoMdPerson, IoIosUnlock } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import TextoHeader from './TextoHeader';

const LinkRegistro = styled(Link)`
   color: #fff;
   text-decoration: none;
   margin: 15px 0px 0;
   text-align: center;
   &:hover {
   text-decoration: underline;
   color: grey;
 };
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

const BoxCheck = styled.div`
 display: flex;
 gap: 5px;
 align-items: center;
`;

const Ancora = styled.a`
 color: #fff;
 text-decoration: none;
 text-shadow: 2px 1px 3px black;
 &:hover {
 text-decoration: underline;
 color: grey;
 }
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

const Text = styled.p`
 color: #fff;
 text-shadow: 2px 1px 3px black;
`;

const LabelCheck = styled.label`
 color: #fff;
 text-decoration: none;
 text-shadow: 2px 1px 3px black;
 cursor: pointer;
`;

const FormularioLogin = () => {

 const navigate = useNavigate();
 const [user, setUser] = useState('');
 const [password, setPassword] = useState('');
 //const [usuarios, setUsuarios] = useState([]);  // IDÉIA PARA CADASTRO!
 
 const userForm = (e) => {
     e.preventDefault();
     setUser('');
     setPassword('');
     navigate("/welcome");
 }
 
  return (
    <div>
       <Form>
             <TextoHeader texto='Acesso ao Sistema'/>
             <div>
               <Input type="text" placeholder="Digite seu Login" value={user} onChange={(e) => setUser(e.target.value) }/>
               <IconUser />
             </div>
             <div>
               <Input type="password" placeholder="Digite sua Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
               <IconLock />
             </div>
             <ContainerFlex>
               <BoxCheck >
                 <input type="checkbox" name="lembrar" id="lembrar" />
                 <LabelCheck htmlFor="lembrar">Lembrar de mim</LabelCheck>
               </BoxCheck>
               <div>
                 <Ancora href="#">Esqueceu a Senha?</Ancora>
               </div>
             </ContainerFlex>
             <Button  type="submit" onClick={userForm}>Login</Button>
             <Text>Nao tem uma conta? <LinkRegistro to="/registro">Registrar</LinkRegistro></Text>
         </Form>
    </div>
  )
}

export default FormularioLogin;
