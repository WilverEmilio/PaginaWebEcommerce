"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import galleryImg from '../../../public/assets/img/gallery/gallery-custom/5.jpg';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

const GalleryVideo = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openVideoModel = () => setIsOpen(!isOpen)
    return (
        <>
            <div className="gallery-video-img">
                <Image src={galleryImg} style={{ width: "100%", height: "auto" }} alt="image not found" />
                <div className="gallerys-video-icon text-center">
                    <Link href="" onClick={() => openVideoModel()} className="popup-video" ><i className='fas fa-play'></i></Link>
                </div>
            </div>
            <ModalVideo isOpen={isOpen} channel="youtube" videoId="gqsDeIUHJd8" onClose={() => openVideoModel()} />
        </>
    );
};

export default GalleryVideo;