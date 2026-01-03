"use client";
import service_data from '@/data/service-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import shape from '../../../public/assets/img/shape/1.png';
import { responseType } from '../../../types/response';
import { useAbout } from '../../../api/getAbout';
import img4 from '../../../public/assets/img/icon/icon1.png';
import img5 from '../../../public/assets/img/icon/icon2.png';
import img6 from '../../../public/assets/img/icon/icon3.png';

const ServiceSectionTwo = () => {
    const { loading, result } = useAbout();
    console.log(result);

    if (loading) {
        return <p>Loading...</p>;
    }

    // // Verifica que result y attributes estén definidos
    // if (!result || !result.attributes) {
    //     return <p>No se encontraron datos</p>;
    // }

    // Datos dinámicos de "Qué hacemos" basados en la API
    const service_data = [
        {
            id: 1,
            title: result.What_We_Do_OneTitle,
            desc: result.What_We_Do_OneDescription,
            image: img4 // Ícono correspondiente
        },
        {
            id: 2,
            title: result.What_We_Do_TwoTitle,
            desc: result.What_We_Do_TwoDescription,
            image: img5 // Ícono correspondiente
        },
        {
            id: 3,
            title: result.What_We_Do_ThreeTitle,
            desc: result.What_We_Do_ThreeDescription,
            image: img6 // Ícono correspondiente
        }
    ];

    return (
        <>
            <div className="we-do-area pt-110 pb-85">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                            <div className="section-title text-center section-circle mb-70">
                                <div className="section-img">
                                    <Image src={shape} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                </div>
                                <h1>Qué hacemos</h1>
                                <p>{result?.What_We_Do_Description}</p>
                            </div>
                        </div>
                    </div>

                    {/* Sección dinámica de los servicios */}
                    <div className="row">
                        {
                            service_data.map((item) => (
                                <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
                                    <div className="we-do-wrapper text-center mb-30">
                                        <div className="we-do-img">
                                            <Image src={item.image} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                        </div>
                                        <div className="we-do-text">
                                            <h4><Link href="/services">{item.title}</Link></h4>
                                            <p>{item.desc}</p>
                                            {/* <Link href="/services">
                                                Read More <i className="dripicons-arrow-thin-right"></i>
                                            </Link> */}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceSectionTwo;