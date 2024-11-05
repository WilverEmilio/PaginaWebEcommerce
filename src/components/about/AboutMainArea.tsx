"use client";
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import AboutSectionFour from './AboutSectionFour';
import FaqSection from '../HomeThree/FaqSection';
import ServiceSectionTwo from '../HomeTwo/ServiceSectionTwo';
import BrandSection from '../Elements/brand/BrandSection';

const AboutMainArea = () => {
    return (
        <>
            <Breadcrumb title='Sobre nosotros' subTitle='Sobre nosotros' />
            <AboutSectionFour />
            <FaqSection />
            <ServiceSectionTwo />
        </>
    );
};

export default AboutMainArea;