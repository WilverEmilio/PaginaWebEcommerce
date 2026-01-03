'use client';
import Link from 'next/link';
import React from 'react';
import ctabgImg from '../../../public/assets/img/bg/bg7.jpg';
import ctabgImg2 from '../../../public/assets/img/bg/1.png';

const CtaSectionTwo = () => {
    return (
        <div className="cta-area pt-160 pb-160" style={{ backgroundImage: `url(${ctabgImg.src})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="cta2-wrapper" style={{ backgroundImage: `url(${ctabgImg2.src})` }}>
                            <div className="cta2-text text-center">
                                <h1>We Provide Fresh Food <br /> For Your Family</h1>
                                <Link href="/shop" className="btn">
                                    View Our Shop
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CtaSectionTwo;