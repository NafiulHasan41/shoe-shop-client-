import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ShoeCard from './ShoeCard';

const TopRated = () => {
     
    const [shoe, setShoe] = useState([]);
    useEffect(  () => {
        
     
        fetchShoe();
        
      }, [])

      const fetchShoe = async () => {
        const { data } = await axios(
          `${
            import.meta.env.VITE_API_URL
          }/shoesNewArrival?tag=${'topRated'}`
        )

        setShoe(data);
      }


    return (
        <div>
            <div>
            <h1 className="text-2xl font-semibold text-center text-green-500 capitalize lg:text-3xl dark:text-white">Our Top<span className="text-rose-500"> Ratted Products </span></h1>
            </div>
            <div className=' my-5 md:my-8 lg:my-12'>
            <Swiper
            
            loop={true}
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
       
       {
            shoe.map((shoe) => (
                <SwiperSlide key={shoe._id} >
                   <ShoeCard key={shoe._id} shoe={shoe}/>
                </SwiperSlide>
            ))
       }
      </Swiper>
            </div>
       
        </div>
    );
};

export default TopRated;