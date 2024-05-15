import React, { useState, useContext } from "react";
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';
import TextoHeader from './TextoHeader';
import InputUser from './ComponentsForm/InputUser';
import InputPassword from './ComponentsForm/InputPassword';
import InputCheckBox from './ComponentsForm/InputCheckBox';
import InputButton from './ComponentsForm/InputButton';
import { UserContext } from '../Context/UserContext';

const LinkStyled = styled(Link)`
  color: #ffa202;
  text-decoration: none;
  margin: 15px 0px 0;
  text-shadow: 2px 1px 3px black;
  text-align: center;
  
  &:hover {
    text-decoration: underline;
    color: grey;
  }
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

const ContainerFlex = styled.div`
 display: flex;
 justify-content: space-around;
 gap:40px;
 margin: 10px 0;
`;

const P = styled.p`
 color: #fff;
 text-shadow: 2px 1px 3px black;
`;

const FormularioLogin = () => {

 const navigate = useNavigate();
 const {user, userLogin, setUserLogin } = useContext(UserContext);
 const [passwordLogin, setPasswordLogin] = useState('');
 
 const userForm = (e) => {
  e.preventDefault();
  // Verifica se o usuário e senha correspondem a algum registro
  const foundUser = user.find(u => u.username === userLogin && u.password === passwordLogin);
  if (foundUser) {
   navigate("/welcome");
  } else {
   alert('Usuário ou senha incorretos');
  }
}
  return (
    <div>
       <Form onSubmit={userForm}>
             <TextoHeader texto='Acesso ao Sistema'/>
             <div>
              <InputUser type="text" placeholder="Digite seu Login" value={userLogin} changeName={setUserLogin}/>
             </div>
             <div>
               <InputPassword type="password" placeholder="Digite sua Senha" value={passwordLogin} changePassword={setPasswordLogin}/>
             </div>
             <ContainerFlex>
              <InputCheckBox texto='Lembrar de mim'/>
              <div>
                <LinkStyled to="/esqueceusenha">Esqueceu a Senha?</LinkStyled>
              </div>
             </ContainerFlex>
                <InputButton  type='submit' texto='Login'/>
             <P>Nao tem uma conta? <LinkStyled to="/registro">Registrar</LinkStyled></P>
        
         </Form>
    </div>
  )
}

export default FormularioLogin;
