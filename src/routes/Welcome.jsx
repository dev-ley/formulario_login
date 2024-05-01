import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../Context/UserContext'

const ContainerFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
  color: #fff;
`

const Welcome = () => {

  const { userLogin } = useContext(UserContext)

    return (
        <ContainerFlex>
          <h1>Bem Vindo {userLogin} !!</h1>
        </ContainerFlex>
      )
}

export default Welcome
