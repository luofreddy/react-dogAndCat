import React from 'react';
import styled from '@emotion/styled';
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
  border: 1px solid #ddd;
  & .text{
    padding: .5rem 1rem;
    & a{
      display: block;
      margin-bottom:.3rem;
      text-decoration: none;
      color:#000
    }
    & button{
      color: #fff;
      margin-top: .5rem;
      padding: .2rem .5rem;
      font-weight: bold;
      border: none;
      background-color: #6C5C53;
      :hover{
        cursor: pointer;
        background-color: #5e5047;
      }
    }
  }
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
    box-shadow: 1px 2px 3px #aaa;
    & .picture{
      cursor: pointer;
      & .baseImg{
        opacity: 0;
      }
      & .hoverImg{
        opacity: 1;
      }  
    }
    
  }
`
const Discount = styled.div`
  content: "特價";
  text-align: center;
  display: block;
  line-height: 3rem;
  background-color: #CA7658;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  color: #fff;
  font-weight: bold;
  position: absolute;
  z-index: 1;
  top: 1.3rem;
  left: -1rem;
  
`


const MainProduct = ({mainproduct}) => {
  return (
    
    <AllMainProduct>
      {
        mainproduct.map(item=>{
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
            <Discount style={{display: item.isDiscount? 'block':'none'}}>特價</Discount>
        </Product>
      
        })
      }
      </AllMainProduct>
  );
};

export default MainProduct;