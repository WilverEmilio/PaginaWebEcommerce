'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import shapeImg from '../../../public/assets/img/shape/1.png';
import service_data from '@/data/service-data';

const ServiceSectionThree = () => {
    return (
        <div className="services-area pt-110 pb-90 gray2-bg">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                        <div className="section-title text-center section-circle mb-70">
                            <div className="section-img">
                                <Image src={shapeImg} style={{ width: "auto", height: "auto" }} alt='image not found' />
                            </div>
                            <h1>Our Services</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor incididunt ut labore et dolore magna aliqua enim minim veniam</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        service_data.slice(12, 15).map((item) => (
                            <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
                                <div className="services-wrapper mb-30">
                                    <div className="services-img">
                                        <Link href={`/services-details/${item.id}`}>
                                            <Image src={item.images.url} style={{ width: "100%", height: "auto" }} alt='image not found' />
                                        </Link>
                                    </div>
                                    <div className="services-text text-center">
                                        <h3><Link href={`/services-details/${item.id}`}>{item.title}</Link></h3>
                                        <p>{item.desc}</p>
                                        <Link href={`/services-details/${item.id}`}>
                                            Read More <i className="dripicons-arrow-thin-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceSectionThree;