"use client"
import React, { useState } from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import gallary_data from '@/data/gallary-data';
import Link from 'next/link';
import Image from 'next/image';
import { PhotoProvider, PhotoView } from "react-photo-view";
import GalleryCtaSection from './GalleryCtaSection';
import BrandSection from '../Elements/brand/BrandSection';
import Category_gallery_data from '@/data/category-gallery-data';

const GalleryOneMain = () => {
    const [activeCategory, setActiveCategory] = useState('');
    const filterCategory = gallary_data.slice(8, 20).filter((item) => item.category === activeCategory);

    return (
        <>
            <Breadcrumb title='Gallery 01' subTitle='Gallery 01' />
            <div className="gallery-area pt-125 pb-90">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <ul className="portfolio-menu mb-70 text-center">
                                <li onClick={() => setActiveCategory("")} className={activeCategory === "" ? "active" : ""}>View All</li>
                                {
                                    Category_gallery_data.map((item) => (
                                        <li key={item.id} onClick={() => setActiveCategory(item.category)} className={activeCategory === item.category ? 'active' : ''}>{item.category}</li>
                                    ))
                                }

                            </ul>
                        </div>

                        <div className="col-xl-12">
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
                                        activeCategory === "" ?
                                            <>
                                                {
                                                    gallary_data.slice(8, 20).map((item) => (
                                                        <div className="col-xl-3 col-lg-3 col-md-6" key={item.id}>
                                                            <div className="gallery-wrapper mb-30">
                                                                <div className="gallery-img">
                                                                    <Link href={`/gallery-details-1/${item.id}`}>
                                                                        <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                                                    </Link>
                                                                    <div className="gallery-icon">
                                                                        <PhotoView src={item.image.src}>
                                                                            <Link href="" className="popup-image"><i className={item.icon}></i></Link>
                                                                        </PhotoView>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </>
                                            :
                                            <>
                                                {
                                                    filterCategory.map((item: any) => (
                                                        <div className="col-xl-3 col-lg-3 col-md-6" key={item.id}>
                                                            <div className="gallery-wrapper mb-30">
                                                                <div className="gallery-img">
                                                                    <Link href={`/gallery-details-1/${item.id}`}>
                                                                        <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                                                    </Link>
                                                                    <div className="gallery-icon">
                                                                        <PhotoView src={item.image.src}>
                                                                            <Link href="#" className="popup-image"><i className={item.icon}></i></Link>
                                                                        </PhotoView>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </>
                                    }
                                </PhotoProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <GalleryCtaSection />
            <BrandSection />
        </>
    );
};

export default GalleryOneMain;