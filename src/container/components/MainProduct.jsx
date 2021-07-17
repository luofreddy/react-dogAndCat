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
  max-width: 45%;
  margin: 1.5rem 0;
  overflow-x: hidden;  
  border: 1px solid #ddd;
  & .picture{
    position: relative;
    width: 100%;
    overflow: hidden;
    
    & .hoverImg{
    opacity: 0;
    width: auto;
    height: 100%;
    position: absolute;
    top: 0;
    left:0;
    transform :translateX(-20%) ;
    }   
  }
  :hover{
    & .baseImg{
      opacity: 0;
    }
    & .hoverImg{
      opacity: 1;
    }
  }
  
`
const MainProduct = ({mainproduct}) => {
  return (
    
    <AllMainProduct>
      {
        MAIN_PRODUCT.map(item=>{
          return <Product>
            <div className='picture'>
              <img className='baseImg' src={item.baseImg} alt="" />
              <img className='hoverImg' src={item.hoverImg} alt="" />
            </div>
            <div className='text'>
              <a href={item.url}><h3>{item.discription}</h3></a>
              <h4>
                <span>NT$</span>{item.price.lowest}
                <span>-NT$</span>{item.price.highest}
              </h4>
              <a href="/"><button>選擇規格</button></a>
            </div>
            
        </Product>
      
        })
      }
      </AllMainProduct>
  );
};

export default MainProduct;