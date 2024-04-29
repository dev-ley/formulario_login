import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ContainerNav = styled.nav`
position: fixed;
display: flex;
justify-content: space-between;
padding: 20px;
align-items: center;
background-color: #0000005f;
width: 100%;
border: 1px solid #ffffff20;

`

const ImgLogo = styled.img`
  width: 50px;
  height: 50px;
  border: 1px solid orange;
  border-radius: 50px;
  padding: 5px;

`;
const BtnLink = styled(Link)`
  padding: 20px;
  margin-right: 20px;
  color: #fff;
  text-decoration: none;
  border: 1px solid #ffa6006b;
  border-radius: 20px;
  transition: 1s;
  &:hover {

    background-color: #ffa6004b;
    color: #000;

  }
`




const Navbar = () => {
  return (
    <ContainerNav>

        <Link to="/">
          <ImgLogo src="/assets/sucess.png" />
        </Link>
        <div>
          <BtnLink to="/"> Home </BtnLink>
          <BtnLink to="/registro">Registro</BtnLink>
        </div>
    </ContainerNav>
  )
}

export default Navbar
