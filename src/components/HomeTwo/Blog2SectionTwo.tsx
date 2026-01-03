'use client';
import Image from 'next/image';
import React from 'react';
import shape from '../../../public/assets/img/shape/1.png';
import blogBg from '../../../public/assets/img/bg/bg10.jpg';
import Link from 'next/link';
import blog_data from '@/data/blog-data';

const Blog2SectionTwo = () => {
    return (
        <div className="blog-area-2 pt-110 pb-90" style={{ backgroundImage: `url(${blogBg.src})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                        <div className="section-title text-center section-circle mb-70">
                            <div className="section-img">
                                <Image src={shape} style={{ width: "auto", height: "auto" }} alt='shape-image' />
                            </div>
                            <h1>Zomata Blog</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor incididunt ut labore et dolore magna aliqua enim minim veniam</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        blog_data.slice(3, 7).map((item) => (
                            <div className="col-xl-6 col-lg-6 col-md-6 mb-30" key={item.id}>
                                <div className="blog-bg">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-12">
                                            <div className="news-img">
                                                <Link href={`/blog-details/${item.id}`}>
                                                    <Image src={item.image} style={{ width: "100%", height: "auto" }} alt='blog-image' />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-12">
                                            <div className="blog-text news-text">
                                                <h4><Link href={`/blog-details/${item.id}`}>{item.title} </Link></h4>
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
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default Blog2SectionTwo;