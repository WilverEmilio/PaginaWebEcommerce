import Image from 'next/image';
import React from 'react';
import AboutMeImg from '../../../public/assets/img/blog/details/me.png';
import SocialIcon from '@/layout/footer/social-icon';

const BlogAboutMe = () => {
    return (
        <div className="widget mb-40">
            <div className="widget-title-box mb-30">
                <span className="animate-border"></span>
                <h3 className="widget-title">About Me</h3>
            </div>
            <div className="about-me text-center">
                <Image src={AboutMeImg} style={{ width: "auto", height: "auto" }} alt="image not found" />
                <h4>Zulia Maron Duo</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <SocialIcon WrapperClass='widget-social-icon' />
            </div>
        </div>
    );
};

export default BlogAboutMe;