import { AiOutlineCloseCircle } from "react-icons/ai";
import { Menulist } from "../../global/contants";
import { MenuMain, PCMenuMain } from "../../UI";

const MenuList = ({ isMenuJump, setIsMenuJump, windowWidthWithPC }) => {
  if (!windowWidthWithPC)
    return (
      <MenuMain style={{ display: isMenuJump ? "block" : "none" }}>
        <button onClick={() => setIsMenuJump(false)}>
          <AiOutlineCloseCircle />
        </button>
        <nav>
          {Menulist.map((item) => {
            return (
              <ul key={item.id}>
                <img src={item.img} alt="" />
              </ul>
            );
          })}
        </nav>
      </MenuMain>
    );
  else {
    return (
      <PCMenuMain>
        {Menulist.map((item) => {
          return (
            <ul key={item.id}>
              <img src={item.img} alt="" />
            </ul>
          );
        })}
      </PCMenuMain>
    );
  }
};

export default MenuList;
