/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { Link } from 'react-router-dom';
import { LOGO_MOBILE } from './global/contants';
import Btn from './components/Header/Btn';
import Menu from './components/Header/Menu';
import {RiAccountCircleFill} from 'react-icons/ri'
import {FaShoppingCart} from 'react-icons/fa'
import { useState } from 'react';
import MenuList from './components/Header/MenuList';


const Title = styled.div`
  padding: .5rem;
  text-align: center;
  font-weight: bold;
`
const HeaderMain=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  background-color: #fff;
`

const Header = ({topDistanceOver150}) => {
  const [menuShow,setMenuShow] = useState(false)
  return (
    <div>
      <Title className='bg-main-color text-main-color'>汪喵洗衣酵素，寶寶毛孩吸被被也不怕！</Title>
      <HeaderMain>
        <Menu menuShow={menuShow} setMenuShow={setMenuShow}></Menu>
        <h1><a href="/"><img src={LOGO_MOBILE} alt="" /></a></h1>
        <div style = {{marginRight:0.5+'rem'}}>
          <Link to ={'/login'}><Btn Icon={RiAccountCircleFill}></Btn></Link>
          
          <Btn Icon={FaShoppingCart}></Btn>
        </div>
      </HeaderMain>
      <MenuList menuShow={menuShow} setMenuShow={setMenuShow}></MenuList>
    </div>
    
  );
};

export default Header;