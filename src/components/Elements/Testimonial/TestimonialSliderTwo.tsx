"use client"
import React from 'react';
import shapeImg from '../../../../public/assets/img/shape/1.png';
import Image from 'next/image';
import testimonial_data from '@/data/testimonial-data';
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay, Navigation } from 'swiper';

const TestimonialSliderTwo = () => {
    return (
        <div className="our-client-area pt-110 pb-120 fix" >
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                        <div className="section-title text-center section-circle mb-70">
                            <div className="section-img">
                                <Image src={shapeImg} style={{ width: "auto", height: "auto" }} alt="shape not found" />
                            </div>
                            <h1>Clients Reviews</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor incididunt ut
                                labore et dolore magna aliqua enim minim veniam</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center" >
                    <div className="col-xl-10">
                        <div className="client-active">
                            <Swiper
                                modules={[Autoplay, Navigation]}
                                loop={true}
                                autoplay={{
                                    delay: 5000,
                                }}
                                navigation={{
                                    nextEl: ".testi-swiper2-button-next-2",
                                    prevEl: ".testi-swiper2-button-prev-2",
                                }}
                                spaceBetween={0}
                                freeMode={false}

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
                                        slidesPerView: 2,
                                    },
                                    1400: {
                                        slidesPerView: 2,
                                    },

                                }}
                            >
                                {
                                    testimonial_data.slice(6, 10).map((item) => (
                                        <SwiperSlide key={item.id} className='zoma-slider-style'>
                                            <div className="testimonial2-wrapper mb-30">
                                                <div className="testimonial-text">
                                                    <p>{item.description}</p>
                                                    <div className="testimonial-content">
                                                        <div className="testimonial2-img">
                                                            <Image src={item.image} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                                        </div>
                                                        <div className="testimonial-name">
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
                        <div className="zomata-news-nav-controls text-sm-end zomata-news-nav-transform">
                            <button className="testi-swiper2-button-next-2">
                                <i className="fal fa-angle-left"></i>
                            </button>
                            <button className="testi-swiper2-button-prev-2">
                                <i className="fal fa-angle-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSliderTwo;