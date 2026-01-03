'use client';

import blog_data from '@/data/blog-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SIdebarBlog = () => {
    return (
        <div className="widget mb-40">
            <div className="widget-title-box mb-30">
                <span className="animate-border"></span>
                <h3 className="widget-title">Popular Feeds</h3>
            </div>
            <ul className="recent-posts">
                {
                    blog_data.slice(11, 14).map((item) => (
                        <li key={item.id}>
                            <div className="widget-posts-image">
                                <Link href={`/blog-details/${item.id}`}>
                                    <Image src={item.image} style={{ width: "100%", height: "auto" }} alt='image not found' />
                                </Link>
                            </div>
                            <div className="widget-posts-body">
                                <h6 className="widget-posts-title"><Link href={`/blog-details/${item.id}`}>{item.title}</Link></h6>
                                <div className="widget-posts-meta">{item.date}</div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default SIdebarBlog;