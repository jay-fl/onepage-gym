'use client'

import Container from "@/components/shared/container";
import Title from "./ui/title";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


const Trainers = () => {
  return (
    <section
      id="trainers"
      className="min-h-screen flex items-center justify-center"
    >
      <Container>
        <Title title="Join Out" titlePrimary="Trainer" />
        <div>
          <Swiper 
          spaceBetween={0} 
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          >
            
            <SwiperSlide>
                <div className="relative w-96 h-[70vh] mx-auto">
                    <Image src='/images/gym-1.webp' alt='Trainer' fill className='object-cover rounded-xl shadow-xl'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative w-96 h-[70vh] mx-auto">
                    <Image src='/images/gym-2.webp' alt='Trainer' fill className='object-cover rounded-xl shadow-xl'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative w-96 h-[70vh] mx-auto">
                    <Image src='/images/gym-3.webp' alt='Trainer' fill className='object-cover rounded-xl shadow-xl'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative w-96 h-[70vh] mx-auto">
                    <Image src='/images/gym-4.webp' alt='Trainer' fill className='object-cover rounded-xl shadow-xl'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative w-96 h-[70vh] mx-auto">
                    <Image src='/images/gym-5.webp' alt='Trainer' fill className='object-cover rounded-xl shadow-xl'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative w-96 h-[70vh] mx-auto">
                    <Image src='/images/gym-6.webp' alt='Trainer' fill className='object-cover rounded-xl shadow-xl'/>
                </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Trainers;
