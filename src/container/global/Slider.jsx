/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { MAIN_AD } from './contants';

const SliderBox = styled.div`
  max-width: 100vw;
  position: absolute;
  
  
  & img{
    width: 100%;
    vertical-align:middle;
  }
  
`
const Slider = () => {
  return (
    <SliderBox>
      <div>
        <img src={MAIN_AD[0].img} alt="" />
      </div>      
    </SliderBox>
  );
};

export default Slider;