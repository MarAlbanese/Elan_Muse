import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';


// Import Swiper styles
import 'swiper/css';
import { arrayBanner } from '../../arrayBanner';

const Carrusel = () => {
  return (
    
    <div id="showroom"><br />
    <div className='mt-32 mb-10 relative z-0'>
      <p className='estilo-titulo text-center'>Showroom</p>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        loop={true}
        pagination={{
          clickable: true,
         
          
        }}
        navigation
        modules={[Pagination, Navigation, Autoplay]}
        onSlideChange={() => console.log('slide change')}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        grabCursor={true}
        onSwiper={(swiper) => console.log(swiper)}
        className='carrousel'
      >

        {arrayBanner.map(img => (
          <SwiperSlide key={img.id}>
            <div className="h-1/2 w-auto mx-2 flex items-center justify-center mt-5">
              <img className="w-full h-full " src={img.image} alt="img" />
            </div>
            <p>{img.title}</p>
          </SwiperSlide>
        ))}


      </Swiper>
    </div>
    </div>

  );
}
export default Carrusel