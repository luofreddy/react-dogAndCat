import AdSlider from '../global/Slider'
import  * as contants  from '../global/contants';
import MainProduct from '../components/Home/MainProduct';
import { FourIcons,HomeCategory } from '../UI';




const Home = ({isMenuJump}) => {
  return (
    <div style={{position: isMenuJump?'fixed':'static'}}>
      <AdSlider carouselImage={contants.MAIN_AD}></AdSlider>
      <FourIcons>
        {
          contants.fourIcon.map(item=>{
            return <a href={item.url}><img src={item.img} alt="" /></a>
          })
        }
      </FourIcons>
      <div><img  src="https://dogcatstar.atomcdn.com/2020/07/05/1078468/phone_SliderB_01.jpg" alt="" />
      </div>
      
      <AdSlider carouselImage={contants.HOME_CENTER_3TIPS}></AdSlider>
      
      <HomeCategory > 
      <img src="https://dogcatstar.atomcdn.com/2020/07/03/955206/title_popular-1.png" alt="" />
      </HomeCategory>

      <MainProduct mainproduct={contants.MAIN_PRODUCT}></MainProduct>
    </div>
  );
};

export default Home;