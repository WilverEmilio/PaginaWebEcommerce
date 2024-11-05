"use client"
import React from 'react';
import BgImage from '../../../../public/assets/img/bg/bg4.jpg';
import shape1 from '../../../../public/assets/img/shape/1.png';
import Image from 'next/image';
import testimonial_data from '@/data/testimonial-data';
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay } from 'swiper';


const TestimonialSlider = () => {

    return (
        <div className="our-client-area pt-110 pb-120 fix" style={{ backgroundImage: `url(${BgImage.src})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                        <div className="section-title text-center section-circle mb-70">
                            <div className="section-img">
                                <Image src={shape1} style={{ width: "auto", height: "auto" }} alt="image not found" />
                            </div>
                            <h1>Zomata Farmer</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor incididunt ut
                                labore et dolore magna aliqua enim minim veniam</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="client-active fix">
                            <Swiper
                                modules={[Autoplay]}
                                loop={true}
                                autoplay={{
                                    delay: 5000,
                                }}
                                spaceBetween={0}
                                freeMode={false}
                                watchSlidesProgress={true}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                    },
                                    550: {
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                    },
                                    1400: {
                                        slidesPerView: 3,
                                    },
                                }}
                            >
                                {
                                    testimonial_data.slice(0, 6).map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <div className="client-wrapper" >
                                                <div className="client-content">
                                                    <p>{item.description}</p>
                                                    <div className="client-name">
                                                        <div className="client-img">
                                                            <Image src={item.image} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                                        </div>
                                                        <div className="client-text">
                                                            <h4>{item.authorName}</h4>
                                                            <span>{item.destination}</span>
                                                        </div>
                                                    </div>
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
    );
};

export default TestimonialSlider;