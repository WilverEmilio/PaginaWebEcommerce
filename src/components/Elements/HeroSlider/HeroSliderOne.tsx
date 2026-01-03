"use client"
import Link from 'next/link';
import React from 'react';
import { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { useHome } from '../../../../api/getHome';
import { responseType_home } from '../../../../types/response';
import { Home } from '@/interFace/interFace';

const HeroSliderOne = () => {
    const {loading, result, error} = useHome();


    if (loading) {
        return <p>Loading...</p>;
    }

    if (error || !result) {
        return null; // evita que la app se rompa
    }
    return (
        <div className="slider-area">

            {
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
                        result?.map((item: Home) => (
                            <SwiperSlide key={item.id}>
                                <div className="single-slider" >
                                    <div className="slider-height  d-flex align-items-center p-relative" 
                                    style={{ 
                                        backgroundImage: item.image?.url 
                                            ? `url(${process.env.NEXT_PUBLIC_BACKEND_URL}${item.image.url})`
                                            : 'none' // Si no hay imagen, el fondo queda vacío
                                    }}>
                                        <div className="container">
                                            <div className="row ">
                                                <div className="col-xl-12">
                                                    <div className="slider-content mt-85">
                                                        <h1 data-animation="fadeInUp" data-delay=".6s">
                                                            {item.phrase} <br /> {item.info}
                                                        </h1>
                                                        <p data-animation="fadeInUp" data-delay=".8s">
                                                            {item.description}
                                                        </p>
                                                        <div className="slider-button">
                                                            <Link href="/services" data-animation="fadeInLeft" data-delay=".8s" className="btn">
                                                                Nuestros Servicios
                                                            </Link>
                                                            <Link href="/contact" data-animation="fadeInLeft" data-delay="1s" className="btn active">
                                                                Contáctenos
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
            }
        </div>
    );
};

export default HeroSliderOne;
