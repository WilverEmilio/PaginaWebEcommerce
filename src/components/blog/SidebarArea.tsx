import BlogSearchForm from '@/form/blog-search-form';
import React from 'react';
import BlogAboutMe from './BlogAboutMe';
import SIdebarBlog from './SIdebarBlog';
import BlogCategories from './BlogCategories';
import SocialIcon from '@/layout/footer/social-icon';
import Link from 'next/link';
import Image from 'next/image';
import BannerImg from '../../../public/assets/img/blog/details/banner.jpg'

const SidebarArea = () => {
    return (
        <div className="col-lg-4">
            <div className="widget mb-40">
                <div className="widget-title-box mb-30">
                    <span className="animate-border"></span>
                    <h3 className="widget-title">Search Objects</h3>
                </div>
                <BlogSearchForm />
            </div>
            <BlogAboutMe />
            <SIdebarBlog />
            <BlogCategories />
            <div className="widget mb-40">
                <div className="widget-title-box mb-30">
                    <span className="animate-border"></span>
                    <h3 className="widget-title">Social Profile</h3>
                </div>
                <SocialIcon WrapperClass='social-profile' />
            </div>
            <div className="widget mb-40">
                <div className="widget-title-box mb-30">
                    <span className="animate-border"></span>
                    <h3 className="widget-title">Instagram Feeds</h3>
                </div>
                <div className="tag">
                    <a href="#">Popular</a>
                    <a href="#">desgin</a>
                    <a href="#">usability</a>
                    <a href="#">develop</a>
                    <a href="#">consult</a>
                    <a href="#">icon</a>
                    <a href="#">HTML</a>
                    <a href="#">ux</a>
                    <a href="#">business</a>
                    <a href="#">kit</a>
                    <a href="#">keyboard</a>
                    <a href="#">tech</a>
                </div>
            </div>
            <div className="widget mb-40 b-0">
                <div className="banner-widget">
                    <Link href="#"><Image src={BannerImg} style={{ width: "100%", height: "auto" }} alt="image not found" /></Link>
                </div>
            </div>
        </div>
    );
};

export default SidebarArea;
