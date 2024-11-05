import React from 'react';

const Progressbar = () => {
    return (
        <div className="single-author-biography-achievement-progressbar fix">
            <h3 className="single-author-biography-title space-2">
                Honors & Achievements
            </h3>
            <div className="single-skill mb-28">
                <div className="bar-title">
                    <h4>Web Design & Development</h4>
                </div>
                <div className="progress">
                    <div
                        className="progress-bar wow slideInLeft"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        data-wow-duration="1s"
                        data-wow-delay=".2s"
                    >
                        <span>90%</span>
                    </div>
                </div>
            </div>
            <div className="single-skill mb-28">
                <div className="bar-title">
                    <h4>Branding</h4>
                </div>
                <div className="progress">
                    <div
                        className="progress-bar wow slideInLeft"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        data-wow-duration="1s"
                        data-wow-delay=".2s"
                    >
                        <span>75%</span>
                    </div>
                </div>
            </div>
            <div className="single-skill">
                <div className="bar-title">
                    <h4>Web Research</h4>
                </div>
                <div className="progress">
                    <div
                        className="progress-bar wow slideInLeft"
                        role="progressbar"
                        style={{ width: "60%" }}
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        data-wow-duration="1s"
                        data-wow-delay=".2s"
                    >
                        <span>60%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Progressbar;