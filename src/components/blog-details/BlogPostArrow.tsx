'use client';

import Link from 'next/link';
import React from 'react';

const BlogPostArrow = () => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="navigation-border pt-50 mt-40"></div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="bakix-navigation b-next-post text-left mb-30">
                    <span><Link href="#">Next Post</Link></span>
                    <h4><Link href="#">Tips on Minimalist</Link></h4>
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="bakix-navigation b-next-post text-left text-md-right  mb-30">
                    <span><Link href="#">Next Post</Link></span>
                    <h4><Link href="#">Tips on Minimalist</Link></h4>
                </div>
            </div>
        </div>
    );
};

export default BlogPostArrow;