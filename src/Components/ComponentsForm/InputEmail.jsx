import React from 'react'
import styled from 'styled-components';
import { MdEmail } from "react-icons/md";


const InputStyled = styled.input`
 width: 100%;
 position: relative;
 padding: 10px;
 margin: 3px 0;
`;

const IconEmail = styled(MdEmail)`
 position: absolute;
 right: 40px;
 transform: translateY(14px);
`;

const InputEmail = ({type, placeholder, value, changeName}) => {
  return (
    <>
      <InputStyled required type={type} placeholder={placeholder} value={value} onChange={(e) => changeName(e.target.value)}/>
      <IconEmail />
    </>
    )
};

export default InputEmail
