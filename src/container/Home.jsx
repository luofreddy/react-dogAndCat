/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

import { css,jsx } from '@emotion/react';
import AdSlider from "./global/Slider";
import  * as contants  from './global/contants';
import { auto } from 'async';


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

      <AdSlider carouselImage={contants.MAIN_AD}></AdSlider>
      <FourIcons>
        {
          contants.fourIcon.map(item=>{
            return <a href={item.url}><img src={item.img} alt="" /></a>
          })
        }
      </FourIcons>
      <div><img  src="https://dogcatstar.atomcdn.com/2020/07/05/1078468/phone_SliderB_01.jpg" alt="" />
      </div>
      
      <AdSlider carouselImage={contants.HOME_CENTER_3TIPS}></AdSlider>
      
      <div css={css`
        margin: auto;
        width: 40%;
        padding: 0.3rem 0;
      `}> 
      <img src="https://dogcatstar.atomcdn.com/2020/07/03/955206/title_popular-1.png" alt="" />
      </div>
      

    </div>
  );
};

export default Home;