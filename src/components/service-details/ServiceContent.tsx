'use client';
import Image from 'next/image';
import React from 'react';
import iconOne from '../../../public/assets/img/service/service-details/icon2.png';
import DetailsImg from '../../../public/assets/img/service/service-details/1.jpg';

const ServiceContent = () => {
    return (
        <div className="row mb-30">
            <div className="col-xl-6 col-lg-7 col-md-6 mb-30">
                <div className="services-details-link">
                    <div className="services-details-icon-img">
                        <Image src={iconOne} style={{ width: "auto", height: "auto" }} alt="image not found" />
                    </div>
                    <div className="services-details-link-text">
                        <p>Lorem ipsum dolor sit amet consecte adipisic elit sed do eiusmod
                            tempor incididunt</p>
                    </div>
                </div>
                <div className="services-details-link">
                    <div className="services-details-icon-img">
                        <Image src={iconOne} style={{ width: "auto", height: "auto" }} alt="image not found" />
                    </div>
                    <div className="services-details-link-text">
                        <p>Lorem ipsum dolor sit amet consecte adipisic elit sed do eiusmod
                            tempor incididunt</p>
                    </div>
                </div>
                <div className="services-details-link">
                    <div className="services-details-icon-img">
                        <Image src={iconOne} style={{ width: "auto", height: "auto" }} alt="image not found" />
                    </div>
                    <div className="services-details-link-text">
                        <p>Lorem ipsum dolor sit amet consecte adipisic elit sed do eiusmod
                            tempor incididunt</p>
                    </div>
                </div>
            </div>
            <div className="col-xl-6 col-lg-5 col-md-6 mb-30">
                <div className="services-details-link-img">
                    <Image src={DetailsImg} style={{ width: "100%", height: "auto" }} alt="image not found" />
                </div>
            </div>
        </div>
    );
};

export default ServiceContent;