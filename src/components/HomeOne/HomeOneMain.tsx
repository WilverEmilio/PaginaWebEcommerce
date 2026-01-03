'use client';
import React from 'react';
import HeroSliderOne from '../Elements/HeroSlider/HeroSliderOne';
import AboutSection from './AboutSection';
import FutureSection from './FutureSection';
import ChooseUsSection from './ChooseUsSection';
import CounterSection from './CounterSection';
import dynamic from 'next/dynamic';

const ProductSection = dynamic(() => import('../Elements/FilterProduct/ProductSection'), {
    ssr: false
})

const HomeOneMain = () => {
    return (
        <>
            <HeroSliderOne />
            <AboutSection />
            <FutureSection />
            <ProductSection />
            <CounterSection />
            <ChooseUsSection />
        </>
    );
};

export default HomeOneMain;