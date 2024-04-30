import React from 'react'
import styled from 'styled-components'

const ContainerFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
  color: #fff;
`

const Welcome = () => {
    return (
        <ContainerFlex>
          <h1>Bem Vindo!!</h1>
        </ContainerFlex>
      )
}

export default Welcome
