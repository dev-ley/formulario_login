import React from 'react'
import styled from 'styled-components';

const ButtonStyled = styled.button`
  padding: 10px;
  margin: 10px 0px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.237);
  color: #fff;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.605);
  }
`;


const InputButton = ({type, texto}) => {
  return (
    <ButtonStyled type={type}>
      {texto}
    </ButtonStyled>
  )
}

export default InputButton;
