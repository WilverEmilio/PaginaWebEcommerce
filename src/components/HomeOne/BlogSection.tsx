'use client';
import Link from 'next/link';
import React from 'react';
import shapeOne from '../../../public/assets/img/shape/1.png';
import BlogBg from '../../../public/assets/img/bg/blog-bg.png';
import Image from 'next/image';
import blog_data from '@/data/blog-data';


const BlogSection = () => {
    return (
        <div className="blog-area pt-110 pb-90" style={{ backgroundImage: `url(${BlogBg.src})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                        <div className="section-title text-center section-circle mb-70">
                            <div className="section-img">
                                <Image src={shapeOne} style={{ width: "auto", height: "auto" }} alt="image not found" />
                            </div>
                            <h1>Zomata Blog</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor incididunt
                                ut
                                labore et dolore magna aliqua enim minim veniam
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        blog_data.slice(0, 3).map((item) => (
                            <div className="col-xl-4 col-lg-4 col-md-12" key={item.id}>
                                <div className="blog-wrapper mb-30">
                                    <div className="blog-img">
                                        <Link href={`/blog-details/${item.id}`}>
                                            <Image src={item.image} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                        </Link>
                                    </div>
                                    <div className="blog-text">
                                        <h4>
                                            <Link href={`/blog-details/${item.id}`}>
                                                {item.title}
                                            </Link>
                                        </h4>
                                        <div className="blog-meta">
                                            {
                                                item?.blogInfo?.map((info) => (
                                                    <span key={info.id}><i className={info.icon}></i>{info.info}</span>
                                                ))
                                            }
                                        </div>
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

export default BlogSection;