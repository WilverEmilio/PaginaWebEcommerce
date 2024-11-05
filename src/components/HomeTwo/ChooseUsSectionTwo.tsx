import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ChooseBg from '../../../public/assets/img/bg/bg8.jpg';
import ChooseIcon from '../../../public/assets/img/icon/4.png';
import ChooseImg from '../../../public/assets/img/choose/02.png';

const ChooseUsSectionTwo = () => {
    return (
        <div className="choose-us-area pt-120 pb-90" style={{ backgroundImage: `url(${ChooseBg.src})` }} >
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="choose2-img mb-30">
                            <Image src={ChooseImg} style={{ width: "100%", height: "auto" }} alt="choose" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="single-choose mb-30">
                            <div className="choose-title">
                                <h1>Fresh & Organic Food Made Our Health Healthy </h1>
                            </div>
                            <div className="choose2-content">
                                <div className="choose2-icon-img">
                                    <Image src={ChooseIcon} style={{ width: "auto", height: "auto" }} alt="icon" />
                                </div>
                                <div className="choose2-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                            <div className="choose2-content">
                                <div className="choose2-icon-img">
                                    <Image src={ChooseIcon} style={{ width: "auto", height: "auto" }} alt="icon" />
                                </div>
                                <div className="choose2-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                            <div className="choose-button">
                                <Link href="/about" className="btn">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUsSectionTwo;