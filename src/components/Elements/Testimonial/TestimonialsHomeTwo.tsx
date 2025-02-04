"use client"
import React from 'react';
import shapeImg from '../../../../public/assets/img/shape/1.png';
import BgImage from '../../../../public/assets/img/bg/01.jpg';
import Image from 'next/image';
import testimonial_data from '@/data/testimonial-data';
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay, Navigation } from 'swiper';

const TestimonialsHomeTwo = () => {
    return (
        <div className="testimonial-area pt-110 pb-90">
            <div className="container">
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="section-title section-circle">
                        <div className="section-img">
                            <Image src={shapeImg} style={{ width: "auto", height: "auto" }} alt='shape-image' />
                        </div>
                        <h1>Clients Reviews</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor incididunt ut labore et dolore magna aliqua enim minim veniam</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-7 col-lg-7">
                        <div className="testimonial-img mb-30">
                            <Image src={BgImage} style={{ width: "auto", height: "auto" }} alt='bg-image' />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="testimonial-active">
                            <Swiper
                                modules={[Autoplay, Navigation]}
                                slidesPerView={1}
                                loop={true}
                                autoplay={{
                                    delay: 5000,
                                }}
                                // Navigation arrows
                                navigation={{
                                    nextEl: ".testi-swiper-button-next-2",
                                    prevEl: ".testi-swiper-button-prev-2",
                                }}
                            >
                                {
                                    testimonial_data.slice(6, 10).map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <div className="testimonial-wrapper mb-30">
                                                <div className="testimonial-text">
                                                    <p>{item.description}</p>
                                                    <div className="testimonial-content">
                                                        <div className="testimonial2-img">
                                                            <Image src={item.image} style={{ width: "auto", height: "auto" }} alt='testimonial-image' />
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
                            <button className="testi-swiper-button-next-2">
                                <i className="fal fa-angle-left"></i>
                            </button>
                            <button className="testi-swiper-button-prev-2">
                                <i className="fal fa-angle-right"></i>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TestimonialsHomeTwo;