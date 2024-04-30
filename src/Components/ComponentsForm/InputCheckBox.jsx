import React from 'react'
import styled from 'styled-components';

const ContainerCheckBox = styled.div`
 display: flex;
 gap: 5px;
 align-items: center;
`;

const LabelCheck = styled.label`
 color: #fff;
 text-decoration: none;
 text-shadow: 2px 1px 3px black;
 cursor: pointer;
`;

const InputCheckBox = ({texto}) => {
  return (
        <ContainerCheckBox >
            <input type="checkbox" name="lembrar" id="lembrar" />
            <LabelCheck htmlFor="lembrar">{texto}</LabelCheck>
        </ContainerCheckBox>
  )
}

export default InputCheckBox
