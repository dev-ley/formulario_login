import React from 'react'
import styled from 'styled-components';
import { IoMdPerson } from "react-icons/io";

const InputStyled = styled.input`
 width: 100%;
 position: relative;
 padding: 10px;
 margin: 3px 0;
`;

const IconUser = styled(IoMdPerson)`
 position: absolute;
 right: 40px;
 transform: translateY(14px);
`;

const InputUser = ({type, placeholder, value, changeName}) => {
  return (
    <>
      <InputStyled type={type} placeholder={placeholder} valye={value} onChange={(e) => changeName(e.target.value)}/>
      <IconUser />
    </>
    )
};

export default InputUser
