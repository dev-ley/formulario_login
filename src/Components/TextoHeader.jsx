import React from 'react'
import styled from 'styled-components';


const Titulo = styled.h1`
 color: #fff;
 text-shadow: 2px 2px 2px black;
 margin-bottom: 15px;
`;

const TextoHeader = ({texto}) => {
  return (
    <>
      <Titulo>{texto}</Titulo>
    </>
  )
}

export default TextoHeader
