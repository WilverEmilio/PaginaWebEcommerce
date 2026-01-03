'use client';

import blog_data from '@/data/blog-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Blog = () => {
    return (
        <div className="col-lg-8">
            {blog_data.length && blog_data.slice(7, 11).map((item, i) => (
                <div key={i}>
                    <article className="postbox post format-image mb-40">
                        <div className="postbox__thumb">
                            <Link href={`/blog-details/${item.id}`}>
                                <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="image not found" />
                            </Link>
                        </div>
                        <div className="postbox__text p-50">
                            <div className="post-meta mb-15">
                                {
                                    item.blogInfo?.map((info) => (
                                        <span key={info.id}> <i className={info.icon}></i>{info.info}</span>
                                    ))
                                }
                            </div>
                            <h3 className="blog-title">
                                <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
                            </h3>
                            <div className="post-text mb-20"> <p>{item.desc}</p></div>
                            <div className="read-more mt-30">
                                <Link href={`/blog-details/${item.id}`} className="btn theme-btn">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            ))}
        </div>
    );
};

export default Blog;