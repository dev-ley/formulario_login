
import styled from 'styled-components'
import FormularioLogin from "../Components/FormularioLogin";


const ContainerForm =styled.div`
 background-image: url('/assets/bg-naruto.jpg');
 background-repeat: no-repeat;
 background-position: center;
 background-size: cover;
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
`;

function Home() {
 
   return (
       <>
       <ContainerForm>
          <FormularioLogin />
       </ContainerForm>
       </>
   )
 };

 export default Home;