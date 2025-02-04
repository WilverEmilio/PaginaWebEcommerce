import Link from 'next/link';
import React from 'react';
import bgImg from '../../../public/assets/img/bg/bg11.jpg';

const OrganicSection = () => {
    return (
        <div className="organic-area pt-165 pb-180" style={{ backgroundImage: `url(${bgImg.src})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 offset-xl-6 col-lg-6 offset-lg-6 col-md-10 offset-md-2">
                        <div className="organic-wrapper">
                            <div className="organic-text">
                                <h1>Organic Nutrition <br /> Without Chemicals</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisie.</p>
                                <Link href="/shop" className="btn">
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrganicSection;