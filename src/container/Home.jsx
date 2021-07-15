/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import Slider from "./global/Slider";
import { fourIcon } from './global/contants';

const FourIcons = styled.div`
  padding: .5rem;
  display : flex;
  & a{
    padding: 0 .6rem;
    overflow: hidden;
    
    & img{
    width: 100%;
    :hover{
      transform: scale(1.1);
    }
  }
  }  
`
const Home = () => {
  return (
    <div>
      {/* <Slider></Slider> */}
      {/* <FourIcons>
        {
          fourIcon.map(item=>{
            return <a href={item.url}><img src={item.img} alt="" /></a>
          })
        }
      </FourIcons> */}
    </div>
  );
};

export default Home;