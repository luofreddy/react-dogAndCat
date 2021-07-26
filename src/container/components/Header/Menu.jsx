import { AiOutlineMenu } from "react-icons/ai";
import { MenuBtn } from "../../UI";

const Menu = ({ setIsMenuJump }) => {
  return (
    <MenuBtn onClick={() => setIsMenuJump(true)} className="text-main-color">
      <AiOutlineMenu />
      <span>MENU</span>
    </MenuBtn>
  );
};

export default Menu;
