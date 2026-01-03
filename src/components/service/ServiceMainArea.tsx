'use client';

import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ServiceSectionFour from './ServiceSectionFour';
import SpStyleOne from './SpStyleOne';
import ServiceVideoSection from './ServiceVideoSection';
import ServiceAboutSection from './ServiceAboutSection';
import PricingSection from './PricingSection';
import BrandSection from '../Elements/brand/BrandSection';

const ServiceMainArea = () => {
    return (
        <>
            <Breadcrumb title='Nuestros servicios' subTitle='Nuestros servicios' />
            <SpStyleOne />
            <ServiceSectionFour />
            {/* <ServiceVideoSection /> */}
            <ServiceAboutSection />
        </>
    );
};

export default ServiceMainArea;