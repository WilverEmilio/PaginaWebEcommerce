"use client"
import React from 'react';
import Link from "next/link";
import hero_slider_data from '@/data/hero-slider-data';
//swiper
import { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

const HeroSliderTwo = () => {

    return (
        <div className="slider-area">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation]}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                observeParents={true}
                observer={true}
                centeredSlides={true}
                effect='fade'
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
                navigation={{
                    nextEl: ".slick-arrows.slick-prev-1",
                    prevEl: ".slick-arrows.slick-next-1",
                }}
            >
                {
                    hero_slider_data.slice(2, 4).map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="single-slider">
                                <div className="slider-height-2 d-flex align-items-center" style={{ backgroundImage: `url(${item.image.src})` }}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <div className="slider-content">
                                                    <h1 data-animation="fadeInUp" data-delay=".6s">
                                                        {item.title} <br /> {item.info}
                                                    </h1>
                                                    <p data-animation="InUp" data-delay=".8s">
                                                        {item.desc}
                                                    </p>
                                                    <div className="slider-button">
                                                        <Link href="/services" data-animation="fadeInLeft" data-delay=".8s" className="btn">
                                                            Our Services
                                                        </Link>
                                                        <Link href="/contact" data-animation="fadeInRight" data-delay="1s" className="btn active">
                                                            Contact Us
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slick-slider slider-navigation slider-active slick-initialized">
                                        <button type='button' className='slick-arrows slick-prev-1'><i className='fas fa-chevron-left'></i></button>
                                        <div className="slick-list"> </div>
                                        <button type='button' className='slick-arrows slick-next-1'><i className='fas fa-chevron-right'></i></button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

export default HeroSliderTwo;