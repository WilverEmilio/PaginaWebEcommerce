'use client';

import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import Blog from './blog';
import SidebarArea from './SidebarArea';

const BlogMainArea = () => {
    return (
        <>
            <Breadcrumb title='Blog Sidebar' subTitle='Blog Sidebar' />
            <section className="blog-area gray-bg pt-120 pb-80">
                <div className="container">
                    <div className="row">
                        <Blog />
                        <SidebarArea />
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogMainArea;