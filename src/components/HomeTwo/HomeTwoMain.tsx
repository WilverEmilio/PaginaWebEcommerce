'use client';
import React from 'react';
import HeroTwoSlider from '../Elements/HeroSlider/HeroTwoSlider';
import ServiceSectionTwo from './ServiceSectionTwo';
import CtaSectionTwo from './CtaSectionTwo';
import ProductSection from '../Elements/FilterProduct/ProductSection';
import ChooseUsSectionTwo from './ChooseUsSectionTwo';
import MainServiceSection from './MainServiceSection';
import CounterSectionTwo from './CounterSectionTwo';
import TestimonialsHomeTwo from '../Elements/Testimonial/TestimonialsHomeTwo';
import Blog2SectionTwo from './Blog2SectionTwo';

const HomeTwoMain = () => {
    return (
        <>
            <HeroTwoSlider />
            <ServiceSectionTwo />
            <CtaSectionTwo />
            <ProductSection />
            <ChooseUsSectionTwo />
            <MainServiceSection />
            <CounterSectionTwo />
            <TestimonialsHomeTwo />
            <Blog2SectionTwo />
        </>
    );
};

export default HomeTwoMain;