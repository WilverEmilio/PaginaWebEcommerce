'use client';
import Image from 'next/image';
import React from 'react';
import dealsBgImg from '../../../public/assets/img/bg/3.png';
import Link from 'next/link';

const BestDealsSection = () => {
    return (
        <div className="best-deals-area pt-120 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7">
                        <div className="best-deals-img mb-30">
                            <Image src={dealsBgImg} style={{ width: "100%", height: "auto" }} alt='image not found' />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="best-deals-wrapper text-center mb-30">
                            <div className="best-deals-content">
                                <h1>Best Deals Of This Week</h1>
                                <div className="best-deals-text">
                                    <h1>50%</h1>
                                    <span>Off</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt </p>
                                <Link href="/shop" className="btn">
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestDealsSection;