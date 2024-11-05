"use client"
import React from "react";
import CountUpContent from "../common/counter/CountUpContent";
import counter_data from "@/data/counter-data";
import { responseType_experience } from "../../../types/response";
import { useExperience } from "../../../api/getExperience";
import { Experience } from "@/interFace/interFace";
import { responseType_home } from "../../../types/response";
import { useHomeStart } from "../../../api/getHomeStart";

const CounterSection = () => {

    const { resultE, loadingE }: responseType_experience = useExperience();
    const {resultH,loadingH, errorH}: responseType_home =  useHomeStart();

    const backgroundImage = resultH?.image_experence?.url
    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${resultH.image_experence.url}`
    : '';

    if (loadingE) {
        return <p>Loading...</p>;
    }

    return (
        <div className="counter-area pt-110 pb-85" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="container">
                {counter_data &&
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="counter-title text-center mb-60">
                                <h1>Somos una empresa experta en lo saludable<br /> Tu salud, nuestra prioridad. </h1>
                            </div>
                        </div>
                        {resultE.map((item: Experience) => (
                            <div key={item.id} className="col-xl-3 col-lg-3 col-md-6">
                                <div className="counter-wrapper mb-30">
                                    <div className="counter-text">
                                        <h1>
                                            <CountUpContent number={item.number}
                                                text={item.counterIcon}
                                            ></CountUpContent>
                                        </h1>
                                        <span>{item.Title}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}
export default CounterSection;