"use client"
import React from 'react';
import brandBg from '../../../../public/assets/img/bg/bg5.jpg';
import brand_data from '@/data/brand-data';
//swiper
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Image from 'next/image';

const BrandSection = () => {
    return (
        <div className="brand-area">
            <div className="container">
                <div className="brand-bg pt-80 pb-80" style={{ backgroundImage: `url(${brandBg.src})` }}>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="brand-active">
                                <Swiper
                                    modules={[Autoplay]}
                                    spaceBetween={30}
                                    loop={true}
                                    autoplay={{
                                        delay: 5000,
                                    }}
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 2,
                                        },
                                        550: {
                                            slidesPerView: 3,
                                        },
                                        768: {
                                            slidesPerView: 4,
                                        },
                                        1200: {
                                            slidesPerView: 5,
                                        },
                                    }}
                                >
                                    {
                                        brand_data.slice(0, 6).map((item) => (
                                            <SwiperSlide key={item.id}>
                                                <div className="col-xl-12">
                                                    <div className="brans-img text-center">
                                                        <Image src={item.image} style={{ width: "auto", height: "auto" }} alt="brand" />
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandSection;