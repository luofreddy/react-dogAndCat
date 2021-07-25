import {AiOutlineCloseCircle} from 'react-icons/ai'
import { Menulist } from '../../global/contants';
import { MenuMain } from '../../UI';


const MenuList = ({isMenuJump,setIsMenuJump}) => {
  return (
    <MenuMain style={{display:isMenuJump ? 'block' : 'none'}}>
      <button onClick={()=>setIsMenuJump(false)}><AiOutlineCloseCircle/></button>
      <nav>
        {
          Menulist.map(item=>{
            return <ul key={item.id}><img src={item.img} alt="" /></ul>
          })
        }
        <h1>ww</h1>
        <h1>ww</h1>
        <h1>ww</h1>
        <h1>ww</h1>

      </nav>
    </MenuMain>
  );
};

export default MenuList;