import service_data from '@/data/service-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Shape from '../../../public/assets/img/shape/1.png';

const MainServiceSection = () => {
    return (
        <div className="features-area pt-110 pb-90" style={{ backgroundImage: `url(${'assets/img/bg/2.png'})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                        <div className="section-title text-center section-circle mb-70">
                            <div className="section-img">
                                <Image src={Shape} style={{ width: "auto", height: "auto" }} alt='shape' />
                            </div>
                            <h1>Our Services</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor incididunt ut labore et dolore magna aliqua enim minim veniam</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        service_data.slice(6, 12).map((item) => (
                            <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
                                <div className={`features-wrapper single-features ${item.active ? item.active : ""} text-center mb-25`}>
                                    <div className="features-img">
                                        <Image src={item.images.url} style={{ width: "auto", height: "auto" }} alt='features' />
                                    </div>
                                    <div className="features-text">
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                        <Link href="/services" className="btn">
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

export default MainServiceSection;