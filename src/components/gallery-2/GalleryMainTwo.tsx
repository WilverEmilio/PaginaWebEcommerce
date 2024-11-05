"use client"
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import Link from 'next/link';
import gallary_data from '@/data/gallary-data';
import Image from 'next/image';
import { PhotoProvider, PhotoView } from "react-photo-view";
import GalleryCtaSection from '../gallery-1/GalleryCtaSection';
import BrandSection from '../Elements/brand/BrandSection';

const GalleryMainTwo = () => {
    return (
        <>
            <Breadcrumb title='Gallery 02' subTitle='Gallery 02' />
            <div className="gallery-area pt-120 pb-60 gray-bg mb-120">
                <div className="container">
                    <div className="row">
                        <PhotoProvider
                            speed={() => 800}
                            easing={(type) =>
                                type === 2
                                    ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                                    : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                            }
                        >
                            {
                                gallary_data.slice(20, 29).map((item) => (
                                    <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
                                        <div className="gallery-wrapper mb-60">
                                            <div className="gallery-img">
                                                <Link href={`/gallery-details-2/${item.id}`}>
                                                    <Image src={item.image} style={{ width: "100%", height: "auto" }} alt='image not found' />
                                                </Link>
                                                <div className="gallery-icon">
                                                    <PhotoView src={item.image.src}>
                                                        <Link href="#" className="popup-image"><i className={item.icon}></i></Link>
                                                    </PhotoView>
                                                </div>
                                            </div>
                                            <div className="gallery-text text-center">
                                                <h3><Link href={`/gallery-details-2/${item.id}`}>{item.title}</Link></h3>
                                                <span>{item.info}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </PhotoProvider>

                    </div>
                </div>
            </div>
            <GalleryCtaSection />
            <BrandSection />
        </>
    );
};

export default GalleryMainTwo;