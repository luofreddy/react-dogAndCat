import React from 'react';
import styled from '@emotion/styled';
import { MAIN_PRODUCT } from '../global/contants';
const AllMainProduct =styled.div`  
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  & :nth-child(5){
    display: none;
  }
`
const Product = styled.div`
  position: relative;
  max-width: 45%;
  margin: 1.5rem 0;
  overflow-x: hidden;  
  & .hoverImg{
    opacity: 0;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    
  }
  
  :hover{
    box-shadow: 1px 1px 2px 1px #000;
    & .baseImg{
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
    }
    & .hoverImg{
      opacity: 1;
    }
  }
  & a{
    text-decoration: none;
  }
`
const MainProduct = ({mainproduct}) => {
  return (
    
    <AllMainProduct>
      {
        MAIN_PRODUCT.map(item=>{
          return <Product>
            <a href={item.url}>
            <img className='baseImg' src={item.baseImg} alt="" />
            <img className='hoverImg' src={item.hoverImg} alt="" />
            </a>    

            <a href={item.url}><h3>{item.discription}</h3></a>
            <h4>
              <span>NT$</span>{item.price.lowest}
              <span>-NT$</span>{item.price.highest}
            </h4>
            <a href="/"><button>選擇規格</button></a>
        </Product>
      
        })
      }
      </AllMainProduct>
  );
};

export default MainProduct;