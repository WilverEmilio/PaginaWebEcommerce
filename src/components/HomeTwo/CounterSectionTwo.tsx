import counter_data from '@/data/counter-data';
import React from 'react';
import CountUpContent from '../common/counter/CountUpContent';
import counterBg from '../../../public/assets/img/bg/bg9.jpg'

const CounterSectionTwo = () => {
    return (
        <div className="counter-area pt-110 pb-85" style={{ backgroundImage: `url(${counterBg.src})` }}>
            <div className="container">
                {counter_data &&
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="counter-title text-center mb-60">
                                <h1>We Are Startup Company.Experts In Field <br /> Organic Startup Movement.</h1>
                            </div>
                        </div>
                        {counter_data.map((counter, num) => (
                            <div key={num} className="col-xl-3 col-lg-3 col-md-6">
                                <div className="counter-wrapper mb-30">
                                    <div className="counter-text">
                                        <h1>
                                            <CountUpContent number={counter.countNum}
                                                text={counter.counterIcon}
                                            ></CountUpContent>
                                        </h1>
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

export default CounterSectionTwo;