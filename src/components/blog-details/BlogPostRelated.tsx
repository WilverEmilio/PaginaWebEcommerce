'use client';

import Link from 'next/link';
import React from 'react';

const BlogPostRelated = () => {
    return (
        <div className="row mt-50">
            <div className="col-xl-8 col-lg-8 col-md-8 mb-15">
                <div className="blog-post-tag">
                    <span>Releted Tags</span>
                    <Link href="#">organic</Link>
                    <Link href="#">Foods</Link>
                    <Link href="#">tasty</Link>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 mb-15">
                <div className="blog-share-icon text-left text-md-right">
                    <span>Share: </span>
                    <Link href="https://www.facebook.com/"> <i className='fab fa-facebook-f'> </i></Link>
                    <Link href="https://twitter.com/"> <i className='fab fa-twitter'> </i></Link>
                    <Link href="https://www.linkedin.com/"> <i className='fab fa-linkedin'> </i></Link>
                    <Link href="https://www.youtube.com/"> <i className='fab fa-youtube'> </i></Link>
                </div>
            </div>
        </div>
    );
};

export default BlogPostRelated;