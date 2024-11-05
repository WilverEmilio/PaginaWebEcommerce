"use client"
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import gallary_data from '@/data/gallary-data';
import Link from 'next/link';
import Image from 'next/image';
import { PhotoProvider, PhotoView } from "react-photo-view";
import GalleryCtaSection from '../gallery-1/GalleryCtaSection';
import BrandSection from '../Elements/brand/BrandSection';

const GalleryThreeMain = () => {
    return (
        <>
            <Breadcrumb title='Gallery 03' subTitle='Gallery 03' />
            <div className="gallery-area pt-120 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <PhotoProvider
                                speed={() => 800}
                                easing={(type) =>
                                    type === 2
                                        ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                                        : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                                }
                            >
                                {
                                    gallary_data.slice(29, 34).map((item) => (
                                        <div className="gallery-wrapper mb-60" key={item.id}>
                                            <div className="gallery-img">
                                                <Link href={`/gallery-details-3/${item.id}`}> <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="image not found" /> </Link>
                                                <div className="gallery-content text-center">
                                                    <div className="gallery2-icon">
                                                        <PhotoView src={item.image.src}>
                                                            <Link href="#" className="popup-image"><i className={item.icon}></i></Link>
                                                        </PhotoView>
                                                    </div>
                                                    <h1><Link href={`/gallery-details-3/${item.id}`}>{item.title}</Link></h1>
                                                    <span>{item.info}</span>
                                                </div>
                                            </div>
                                        </div>

                                    ))
                                }
                            </PhotoProvider>

                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="paginations text-center">
                                        <ul>
                                            <li><Link href="#"><i className='fas fa-angle-left'></i></Link></li>
                                            <li className="active"><Link href="#">1</Link></li>
                                            <li><Link href="#">2</Link></li>
                                            <li><Link href="#">3</Link></li>
                                            <li><Link href="#"><i className='fas fa-angle-right'></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <GalleryCtaSection />
            <BrandSection />
        </>
    );
};

export default GalleryThreeMain;