import React from 'react';
import shapeImg from '../../../public/assets/img/shape/3.png';
import Image from 'next/image';
import Link from 'next/link';
import { useHeader } from '../../../api/getHeader';
import { responseType } from '../../../types/response';

const FaqCta = () => {
    const { result, loading, error }: responseType = useHeader();
    const backgroundImageUrl = result?.FAQ
                    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${result.FAQ.url}` 
                    : '';
    return (
        <div className="cta-area pt-120 pb-120">
            <div className="container">
                <div className="cta-bg pt-100 pb-90" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-8">
                            <div className="cta-wrapper mb-15">
                                <div className="cta-img">
                                    <Image src={shapeImg} style={{ width: "auto", height: "auto" }} alt='image not found' />
                                </div>
                                <div className="cta-text">
                                    <h1>Trabajar con WHACK</h1>
                                    <p>Únete a nuestro equipo en WHACK y forma parte de una experiencia única donde la innovación y la colaboración son fundamentales. Estamos comprometidos con el crecimiento y desarrollo de cada miembro, ofreciendo un ambiente dinámico y creativo.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="cta-button mb-15 text-md-right">
                                <Link href="/contact" className="btn">Únete con nosotros</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqCta;
