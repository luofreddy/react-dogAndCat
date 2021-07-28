import AdSlider from "../global/Slider";
import * as contants from "../global/contants";
import MainProduct from "../components/Home/MainProduct";
import { DotLine, FourIcons, HomeCategory, ThreeTips } from "../UI";
import UserShare from "../components/Home/UserShare";
import FourInnerImg from "../components/Home/FourInnerImg";
import { v4 } from "uuid";

const Home = ({ isMenuJump, windowWidthWithPC }) => {
  return (
    <div style={{ position: isMenuJump ? "fixed" : "static" }}>
      <AdSlider
        carouselImage={
          windowWidthWithPC ? contants.AD1_PC : contants.AD1_Mobile
        }
      ></AdSlider>
      <FourIcons>
        {contants.fourIcon.map((item) => {
          return (
            <a key={v4()} href={item.url}>
              <img src={item.img} alt="" />
            </a>
          );
        })}
      </FourIcons>
      <div>
        <img
          src={
            windowWidthWithPC
              ? "https://dogcatstar.atomcdn.com/2020/07/03/955206/sliderB_01_5.jpg"
              : "https://dogcatstar.atomcdn.com/2020/07/05/1078468/phone_SliderB_01.jpg"
          }
          alt=""
        />
      </div>

      {windowWidthWithPC ? (
        <ThreeTips>
          {contants.PC_Three_Tips.map((item) => {
            if (item.url)
              return (
                <div key={v4()}>
                  <a href={item.url}>
                    <img src={item.img} alt="" />
                  </a>
                </div>
              );
            else
              return (
                <div key={v4()}>
                  <img src={item.img} alt="" />
                </div>
              );
          })}
        </ThreeTips>
      ) : (
        <AdSlider carouselImage={contants.HOME_CENTER_3TIPS}></AdSlider>
      )}

      <HomeCategory>
        <img
          src="https://dogcatstar.atomcdn.com/2020/07/03/955206/title_popular-1.png"
          alt=""
        />
      </HomeCategory>

      <MainProduct mainproduct={contants.MAIN_PRODUCT}></MainProduct>
      <AdSlider
        carouselImage={
          windowWidthWithPC ? contants.AD3_PC : contants.AD3_Mobile
        }
      ></AdSlider>
      <HomeCategory>
        <img
          src="https://dogcatstar.atomcdn.com/2020/07/03/955206/title_share-1-1536x190.png"
          alt=""
        />
      </HomeCategory>
      <UserShare dataShare={contants.share}></UserShare>

      <div style={{ padding: 1 + "rem" }}>
        <img
          src="https://dogcatstar.atomcdn.com/2020/07/03/955206/sloganA_2-2048x246.png"
          alt=""
        />
        <br />
        <br />
        <div
          style={{
            width: 90 + "%",
            display: "flex",
            justifyContent: "center",
            transform: "translate(5%,0)",
          }}
        >
          <img
            style={{ width: 45 + "%", paddingRight: "3rem" }}
            src="https://dogcatstar.atomcdn.com/2020/07/03/955206/sloganB_01_2.png"
            alt=""
          />
          <img
            style={{ width: 45 + "%" }}
            src="https://dogcatstar.atomcdn.com/2020/07/03/955206/sloganB_02_2.png"
            alt=""
          />
        </div>
      </div>
      <FourInnerImg InnerImgs={contants.innerImg}></FourInnerImg>
      <DotLine>
        <img src="https://dogcatstar.atomcdn.com/images/home-paw.png" alt="" />
      </DotLine>
    </div>
  );
};

export default Home;
