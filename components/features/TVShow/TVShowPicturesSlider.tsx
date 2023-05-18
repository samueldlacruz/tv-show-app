import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const TVShowPicturesSlider = ({pictures}: {pictures: string[]}) => {
    return (
        <Swiper
            pagination={{
                type: "progressbar",
            }}
            slidesPerView={3}
            spaceBetween={15}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {pictures?.map((picture, index) => (
                <SwiperSlide className='h-full' key={`tv-show-picture-slide-${index}`}>
                    <img src={picture} className="w-full max-h-[14rem] h-full object-cover"/>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default TVShowPicturesSlider