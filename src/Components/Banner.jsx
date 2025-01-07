import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination,Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const Banner = () => {
  return (
    <div className='container p-6 mx-auto bg-lime-200'>
      <Swiper spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]} className="mySwiper object-cover">
        <SwiperSlide><img className='h-[380px] w-full object-cover' src="https://i.ibb.co.com/F6BJjsN/outlet.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[380px] w-full object-cover' src="https://i.ibb.co.com/GxqJgxv/tech-haven-futuristic-home-office-vector-design-1029473-116645.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[380px] w-full object-cover' src="https://i.ibb.co.com/566PHWz/hobbit-hole-matamata-new-zealand-260nw-2479390589.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[380px] w-full object-cover' src="https://i.ibb.co.com/sQj7zPr/fantasy-style-gateway-portal-with-desert-landscape-23-2151239141.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[380px] w-full object-cover' src="https://i.ibb.co.com/9yShYqR/Nepal-Everest-Base-Campview-with-Ama-Dablam-1193774981-Website-1920x1080-fill-gravityauto-Q-Auto-Bes.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;