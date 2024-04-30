import React from 'react'
import styled from 'styled-components';
import { IoIosUnlock } from "react-icons/io";

const InputStyled = styled.input`
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


const InputPassword = ({type, placeholder, value, changePassword}) => {
  return (
    <>
      <InputStyled type={type} placeholder={placeholder} valye={value}  onChange={(e) => changePassword(e.target.value)}/>
      <IconLock />
    </>
    )
  }
export default InputPassword
