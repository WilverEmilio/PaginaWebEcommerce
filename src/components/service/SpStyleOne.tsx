"use client";
import Image from 'next/image';
import React from 'react';
import { useServiceImg } from '../../../api/getServiceImg';
import { responseType } from '../../../types/response';


const SpStyleOne = () => {
    const { result, loading, error }: responseType = useServiceImg();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    const backgroundImageUrl = result?.start
                    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${result.start.url}` 
                    : '';
    return (
        <div className="our-service-area pt-120 pb-45">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-5">
                        <div className="our-service-img mb-30">
                        {backgroundImageUrl && (
                                <Image
                                    src={backgroundImageUrl}
                                    width={500}  // Ajusta el ancho según tus necesidades
                                    height={300} // Ajusta la altura según tus necesidades
                                    alt="image not found"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            )}                        
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-7">
                        <div className="our-service-text mb-30">
                            <h1>Años de experiencia en la industria</h1>
                            <p>
                                Nuestros productos saludables están diseñados para 
                                ofrecerte bienestar y calidad de vida, utilizando 
                                ingredientes naturales y procesos que preservan los 
                                nutrientes esenciales. Ya sea que busques opciones 
                                sin aditivos artificiales, ricas en vitaminas o adaptadas 
                                a estilos de vida activos, garantizamos que cada producto ha 
                                sido seleccionado con cuidado para brindarte lo mejor de la naturaleza. 
                                Descubre cómo una alimentación balanceada y consciente puede transformar 
                                tu salud, proporcionándote la energía y vitalidad que necesitas día a día.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpStyleOne;