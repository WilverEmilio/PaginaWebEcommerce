"use client"
import Image from 'next/image';
import React from 'react';
import icon1 from '../../../public/assets/img/icon/1.png';
import icon2 from '../../../public/assets/img/icon/2.png';
import icon3 from '../../../public/assets/img/icon/3.png';
import { useChooseUsSection } from '../../../api/getChooseUs';
import {responseType_chooseUs} from '../../../types/response';

const ChooseUsSection = () => {
    const { result, loading } = useChooseUsSection();
    const product = result?.image 
                    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${result.image.url}` 
                    : '';
    if (loading) {
        return <p>Loading...</p>;
    }


    return (
                <div className="choose-us-area pt-100 pb-70 pos-relative" key={result?.id}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-12">
                                <div className="choose-img mb-30">
                                <Image
                                    src={product}
                                    width={1000}  
                                    height={640}
                                    alt="image not found"
                                    />
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-12">
                                <div className="choose-wrapper mb-30">
                                    <div className="choose-section">
                                        <h1>¿Por qué elegirnos?</h1>
                                        <p>
                                            {result?.description}
                                        </p>
                                    </div>
                                    <div className="choose-content mb-40">
                                        <div className="choose-us-img">
                                            <Image src={icon1} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                        </div>
                                        <div className="choose-text">
                                            <h4>{result?.title_one}</h4>
                                            <p>{result?.description_one}</p>
                                        </div>
                                    </div>
                                    <div className="choose-content mb-40">
                                        <div className="choose-us-img">
                                            <Image src={icon2} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                        </div>
                                        <div className="choose-text">
                                            <h4>{result?.title_two}</h4>
                                            <p> {result?.description_two}</p>
                                        </div>
                                    </div>
                                    <div className="choose-content">
                                        <div className="choose-us-img">
                                            <Image src={icon3} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                        </div>
                                        <div className="choose-text">
                                            <h4>{result?.title_three}</h4>
                                            <p>{result?.description_three}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default ChooseUsSection;