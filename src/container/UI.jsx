import styled from '@emotion/styled';
export const Main_Background_Color = '#543B17'
export const Main_Text_Color = '#DDD8D1'

export const GoToTop=styled.div`
position: fixed;
width: 2rem;
height: 2rem;
right: 1rem;
bottom: 1rem;
border: .1rem solid#543B17;
border-radius: 50%;
font-size: medium;
text-align: center;
line-height: 2.1rem;
& svg{
  transition: .3s;
}
:hover{
  cursor: pointer;
  background-color: #543B17;
  & svg{
    color:#ddd;
}}
`
export const IconBlock = styled.div`
  display: inline-block;
  font-size: xx-large;
  color: #704e1d;
  cursor: pointer;
  margin-left: 1rem;
  :hover{
    color: #462e0d;
  }
`
export const Title = styled.div`
padding: .5rem;
text-align: center;
font-weight: bold;
`
export const HeaderMain=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  background-color: #fff;
`
export const MenuBtn = styled.button`
padding: .5em 1em;
border-radius: 30rem;
cursor: pointer;
margin-left: .5rem;
display: flex;
border:none;
background-color: #704e1d;
:hover{
  background-color: #462e0d;
}
& span{
  margin-left: .3rem;
}
`
export const MenuMain = styled.div`  
  background-color: #fafafadd;
  position: absolute;
  width: 100%;
  overflow-y: scroll; 
  z-index: 10;
  top: 0;
  & button{
    border: none;
    background-color: rgba(0,0,0,0);
    display: block;
    position: absolute;
    right: 2rem;
    top: 3rem;
    font-size: xx-large;
    cursor: pointer;
  }
  & nav{
    padding-top: 8rem;
    overflow: hidden;  
    & ul{
      padding: .3rem 0;
      :hover{
        cursor: pointer;
        background-color: #887;
      }
    }
    & img{
      width: 15%;
      display: block;
      margin: .3rem auto;      
    }
  }  
`
export const AllMainProduct =styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  & :nth-child(5){
    display: none;
  }
`
export const Product = styled.div`
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
export const Discount = styled.div`
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

export const FourIcons = styled.div`
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
export const HomeCategory=styled.div`
  margin: auto;
  width: 40%;
  padding: 0.3rem 0;
`