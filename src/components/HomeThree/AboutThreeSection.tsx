'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import aboutImg from '../../../public/assets/img/about/2.jpg'

const AboutThreeSection = () => {
    return (
        <div className="about-us-area about-shape pt-120 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-text mb-30">
                            <span>about us</span>
                            <h1>{`We're`} Zomata Team Organic Expert.</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.</p>
                            <Link href="/about" className="btn">
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-img mb-30">
                            <Image src={aboutImg} style={{ width: "100%", height: "auto" }} alt='image not found' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutThreeSection;