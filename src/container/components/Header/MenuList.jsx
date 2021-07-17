/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { Menulist } from '../../global/contants';

const MenuMain = styled.div`
  background-color: #d6d6d6ae;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  
  position: absolute;
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
const MenuList = ({menuShow,setMenuShow}) => {
  return (
    <MenuMain style={{display:menuShow ? 'block' : 'none'}}>
      <button onClick={()=>setMenuShow(!menuShow)}><AiOutlineCloseCircle/></button>
      <nav>
        {
          Menulist.map(item=>{
            return <ul key={item.id}><img src={item.img} alt="" /></ul>
          })
        }
      </nav>
    </MenuMain>
  );
};

export default MenuList;