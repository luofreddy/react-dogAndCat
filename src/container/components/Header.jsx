import { Link } from "react-router-dom";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";

import { LOGO_MOBILE } from "../global/contants";
import { Title } from "../UI";
import { HeaderMain } from "../UI";
import Btn from "../global/Btn";
import Menu from "./Header/Menu";
import MenuList from "./Header/MenuList";

const Header = ({ topDistanceOver150, isMenuJump, setIsMenuJump }) => {
  window.addEventListener("scroll", function (e) {
    const element = document.querySelector(".HeaderStyle");
    if (window.scrollY > 200) {
      element.style.position = "fixed";
    } else {
      element.style.position = "static";
    }
  });

  return (
    <div
      className="HeaderStyle"
      style={{ width: "100%", zIndex: "10", transition: "all 1s  linear" }}
    >
      <Title className="bg-main-color text-main-color">
        汪喵洗衣酵素，寶寶毛孩吸被被也不怕！
      </Title>
      <HeaderMain>
        <Menu isMenuJump={isMenuJump} setIsMenuJump={setIsMenuJump}></Menu>
        <Link to={"/"}>
          <h1>
            <img src={LOGO_MOBILE} alt="" />
          </h1>
        </Link>
        <div style={{ marginRight: 0.5 + "rem" }}>
          <Link to={"/Login"}>
            <Btn Icon={RiAccountCircleFill}></Btn>
          </Link>

          <Btn Icon={FaShoppingCart}></Btn>
        </div>
      </HeaderMain>
      <MenuList
        isMenuJump={isMenuJump}
        setIsMenuJump={setIsMenuJump}
      ></MenuList>
    </div>
  );
};

export default Header;
