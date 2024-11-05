import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import shapeOne from '../../../public/assets/img/shape/3.png';
import CtaBgImage from '../../../public/assets/img/bg/bg2.jpg';

const CtaSection = () => {
    return (
        <div className="cta-area pt-100 pb-90" style={{ backgroundImage: `url(${CtaBgImage.src})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-8">
                        <div className="cta-wrapper mb-15">
                            <div className="cta-img">
                                <Image src={shapeOne} style={{ width: "auto", height: "auto" }} alt="image not found" />
                            </div>
                            <div className="cta-text">
                                <h1>Visit Our Zomata Organic</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud
                                    exercitation ullamco laboris nisi ut aliquie.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4">
                        <div className="cta-button mb-15 text-md-right">
                            <Link href="/about" className="btn">
                                Visit Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CtaSection;