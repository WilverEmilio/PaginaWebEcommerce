'use client';
import React from 'react';
import HeroSliderThree from '../Elements/HeroSlider/HeroSliderThree';
import AboutThreeSection from './AboutThreeSection';
import OrganicSection from './OrganicSection';
import ProductSection from '../Elements/FilterProduct/ProductSection';
import CounterSectionThree from './CounterSectionThree';
import BestDealsSection from './BestDealsSection';
import ServiceSectionThree from './ServiceSectionThree';
import TeamSectionThree from './TeamSectionThree';
import FaqSection from './FaqSection';
import BlogSectionThree from './BlogSectionThree';

const HomeThreeMain = () => {
    return (
        <>
            <HeroSliderThree />
            <AboutThreeSection />
            <OrganicSection />
            <ProductSection />
            <CounterSectionThree />
            <BestDealsSection />
            <ServiceSectionThree />
            <TeamSectionThree />
            <FaqSection />
            <BlogSectionThree />
        </>
    );
};

export default HomeThreeMain;