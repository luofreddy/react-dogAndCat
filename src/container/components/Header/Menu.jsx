/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import {AiOutlineMenu} from 'react-icons/ai'


const MenuBtn = styled.div`
  padding: .5em 1em;
  border-radius: 30rem;
  cursor: pointer;
  margin-left: .5rem;
  display: flex;
  background-color: #704e1d;
  :hover{
    background-color: #462e0d;
  }
  & span{
    margin-left: .3rem;
  }

`
const Menu = () => {
  return (
    <MenuBtn className='text-main-color'>
      <AiOutlineMenu/>
      <span>MENU</span>
    </MenuBtn>
  );
};

export default Menu;