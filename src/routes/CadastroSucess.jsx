import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const ContainerForm =styled.div`
 background-color: black;
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
`;

const CardSucess = styled.div`
 width: 300px;
 height: 300px;
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 10px;
`;

const ImgCard = styled.img`
    width: 100%;

`;

const LinkLogin =  styled(Link)`
    color: #fff;
    text-decoration: none;
    padding: 20px;
    background-color: orange;
    border-radius: 50%;
    text-align: center;
    transition: 0.5s;
    &:hover {
        color: black;
        background-color: #fff;
    }
    

`
const Texto = styled.h1`
    color: #fff;
    text-align: center;

`

const CadastroSucess = () => {
  return (
    <ContainerForm>
      <CardSucess>
      <Texto> Cadastro Concluido!</Texto>
      <LinkLogin to="/">Login</LinkLogin>
        <ImgCard src="/assets/sucess.png" alt="Naruto Sucess"></ImgCard>
      </CardSucess>
    </ContainerForm>
  )
}

export default CadastroSucess
