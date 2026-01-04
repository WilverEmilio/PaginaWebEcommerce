"use client"
import React from "react";
import CountUpContent from "../common/counter/CountUpContent";
import counter_data from "@/data/counter-data";
import { useExperience } from "../../../api/getExperience";
import { Experience } from "@/interFace/interFace";
import { useHomeStart } from "../../../api/getHomeStart";

const CounterSection = () => {
    const { result, loading } = useExperience();
    const { resultH, loadingH, errorH } = useHomeStart();

    // ✅ VALIDACIÓN SEGURA
    const experiences = Array.isArray(result) ? result : [];

    const backgroundImage = resultH?.image_experence?.url
        ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${resultH.image_experence.url}`
        : '';

    if (loading || loadingH) {
        return (
            <div className="counter-area pt-110 pb-85">
                <div className="container">
                    <div className="text-center">
                        <p>Cargando...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div 
            className="counter-area pt-110 pb-85" 
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="counter-title text-center mb-60">
                            <h1>
                                Somos una empresa experta en lo saludable<br /> 
                                Tu salud, nuestra prioridad.
                            </h1>
                        </div>
                    </div>

                    {/* ✅ CORRECCIÓN CRÍTICA AQUÍ */}
                    {experiences.length > 0 ? (
                        experiences.map((item: Experience) => (
                            <div key={item.id} className="col-xl-3 col-lg-3 col-md-6">
                                <div className="counter-wrapper mb-30">
                                    <div className="counter-text">
                                        <h1>
                                            <CountUpContent 
                                                number={item.number}
                                                text={item.counterIcon}
                                            />
                                        </h1>
                                        <span>{item.Title}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center">
                            <p>No hay datos de experiencia disponibles</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CounterSection;