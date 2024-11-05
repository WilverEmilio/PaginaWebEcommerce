import counter_data from '@/data/counter-data';
import React from 'react';
import bgImage from '../../../public/assets/img/bg/bg12.jpg';
import CountUpContent from '../common/counter/CountUpContent';

const CounterSectionThree = () => {
    return (
        <div className="counter-area pt-120 pb-85" style={{ backgroundImage: `url(${bgImage.src})` }}>
            <div className="container">
                <div className="counter-bg mb-60">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="counter-section mb-30">
                                <h1>30</h1>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8">
                            <div className="counter-info mb-30">
                                <h1>Years of Industry <br /> Experience</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {counter_data &&
                    <div className="row">
                        {counter_data.slice(0, 4).map((counter, num) => (
                            <div key={num} className="col-xl-3 col-lg-3 col-md-6">
                                <div className="counter-wrapper mb-30">
                                    <div className="counter-text">
                                        <h1> <CountUpContent number={counter.countNum}
                                            text={counter.counterIcon}
                                        ></CountUpContent></h1>
                                        <span>{counter.countTitle}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    );
};

export default CounterSectionThree;