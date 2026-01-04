'use client';

import React from 'react';
import shapeImg from '../../../public/assets/img/shape/3.png';
import Image from 'next/image';
import Link from 'next/link';
import { useHeader } from '../../../api/getHeader';

const FaqCta = () => {
    const { result, loading, error } = useHeader();
    
    // ✅ VALIDACIÓN SEGURA
    const backgroundImageUrl = result?.FAQ?.url
        ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${result.FAQ.url}` 
        : '';

    if (loading) {
        return (
            <div className="cta-area pt-120 pb-120">
                <div className="container text-center">
                    <p>Cargando...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return null;
    }

    return (
        <div className="cta-area pt-120 pb-120">
            <div className="container">
                <div 
                    className="cta-bg pt-100 pb-90" 
                    style={backgroundImageUrl ? { backgroundImage: `url(${backgroundImageUrl})` } : {}}
                >
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-8">
                            <div className="cta-wrapper mb-15">
                                <div className="cta-img">
                                    <Image 
                                        src={shapeImg} 
                                        style={{ width: "auto", height: "auto" }} 
                                        alt='Decoración' 
                                    />
                                </div>
                                <div className="cta-text">
                                    <h2>¿Quieres ser parte de nuestro equipo?</h2>
                                    <p>
                                        Únete a nuestro equipo en WHACK y forma parte de una experiencia única donde la innovación y la colaboración son fundamentales.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="cta-button mb-15 text-md-right">
                                <Link href="/contact" className="btn">
                                    Únete con nosotros
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqCta;