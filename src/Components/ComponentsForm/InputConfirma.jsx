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


const InputConfirma = ({type, placeholder, value, changeConfirma}) => {
  return (
    <>
      <InputStyled required  type={type} placeholder={placeholder} valye={value}  onChange={(e) => changeConfirma(e.target.value)}/>
      <IconLock />
    </>
    )
  }
export default InputConfirma
