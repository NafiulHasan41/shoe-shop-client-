// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'



export default function Carousel() {
  return (
    <div className='container px-6 py-10 mx-auto rounded-xl'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper rounded-xl'
      >
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co/t3P9X2r/446.jpg"
            text={`Best Price for Shoes`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co/zsY9X8j/shoesoct7.jpg"
            text='Get Your Desired One Today'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co/yYNktTz/shoesoct10.jpg"
            text='Start Your Journey with Us'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}