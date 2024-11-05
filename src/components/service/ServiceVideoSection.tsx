"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import BgImage from '../../../public/assets/img/bg/bg16.jpg';
import ModalVideo from 'react-modal-video';

const ServiceVideoSection = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openVideoModel = () => setIsOpen(!isOpen)
    return (
        <>
            <div className="video-area pt-360 pb-360" style={{ backgroundImage: `url(${BgImage.src})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="video-icon text-center">
                                <Link href="" className="popup-video" onClick={() => openVideoModel()}>
                                    <i className='fas fa-play'></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo isOpen={isOpen} channel="youtube" videoId="gqsDeIUHJd8" onClose={() => openVideoModel()} />
        </>
    );
};

export default ServiceVideoSection;