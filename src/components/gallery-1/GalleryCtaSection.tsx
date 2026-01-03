'use client';
import Link from 'next/link';
import React from 'react';
import shapeImg from '../../../public/assets/img/shape/3.png';
import Image from 'next/image';
import galleryBg from "../../../public/assets/img/bg/bg17.jpg";

const GalleryCtaSection = () => {
    return (
        <div className="cta-area pb-120">
            <div className="container">
                <div className="cta-bg pt-100 pb-90" style={{ backgroundImage: `url(${galleryBg.src})` }}>
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-8">
                            <div className="cta-wrapper mb-15">
                                <div className="cta-img">
                                    <Image src={shapeImg} style={{ width: "auto", height: "auto" }} alt='image not found' />
                                </div>
                                <div className="cta-text">
                                    <h1>Work With Zomata</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="cta-button mb-15 text-md-right">
                                <Link href="/contact" className="btn">Join With Us</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default GalleryCtaSection;