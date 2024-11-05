import Image from 'next/image';
import React from 'react';
import shapeOne from '../../../public/assets/img/shape/1.png';
import pricing_data from '@/data/pricing-data';
import Link from 'next/link';

const PricingSection = () => {
    return (
        <div className="pricing-area pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                        <div className="section-title text-center section-circle mb-70">
                            <div className="section-img">
                                <Image src={shapeOne} style={{ width: "auto", height: "auto" }} alt="shape not found" />
                            </div>
                            <h1>Our Pricing</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit sed do eiusmotempor
                                incididunt ut labore et dolore magna aliqua
                                enim minim veniam
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        pricing_data.map((item) => (
                            <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
                                <div className={`pricing-wrapper text-center mb-30 ${item.active ? item.active : ""}`}>
                                    <div className="pricing-top-text">
                                        <Image src={item.image} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                        <h1>${item.price}</h1>
                                    </div>
                                    <div className="pricing-text">
                                        <h2>{item.title}</h2>
                                        {
                                            item.pricingList?.map((priceInfo) => (
                                                <p key={priceInfo.id}>{priceInfo.info}</p>
                                            ))
                                        }

                                    </div>
                                    <div className={item.active ? `pricing-button ${item.active}` : "pricing-button"}>
                                        <Link className="btn" href="#">
                                            Select Plan
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

export default PricingSection;