
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'

SwiperCore.use([Navigation, Pagination, Autoplay]);

const AdSlider = ({carouselImage}) => {
  return (    
    <Swiper
    navigation={true}
    pagination={{"clickable": true}}
    autoplay={{
      "delay": 20000,
      "disableOnInteraction": false
    }}
    loop={true}
  >
    {
      carouselImage.map(item=>{
        return <SwiperSlide key={item.url}><a href={item.url}><img style={{width:100+"%"}} src={item.img} alt="" /></a></SwiperSlide>
      })
    }
  </Swiper>
    
  );
};

export default AdSlider;

