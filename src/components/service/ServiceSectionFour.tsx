"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useService } from '../../../api/getService';
import { serviceType1 } from '@/interFace/interFace';
import { responseType } from '../../../types/response';

const ServiceSectionFour = () => {
    const { result, loading, error } = useService();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    // Asegúrate de que `result` sea un arreglo antes de mapear
    if (!result || result.length === 0) {
        return <p>No hay productos disponibles.</p>;
    }

    // Función para truncar texto
    const truncateText = (text: string, limit: number) => {
        return text.length > limit ? `${text.slice(0, limit)}...` : text;
    };

    return (
        <div className="services-area pb-60">
            <div className="container">
                <div className="row">
                    {result.map((item: serviceType1) => (
                        <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
                            <div className="services-wrapper single-services mb-60">
                                <div className="services-img">
                                    <Link href={`/services-details/${item.id}`}>
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.images[1].url}`}
                                            alt={item.Title}
                                            width={100}
                                            height={250}
                                            className="product-image"
                                        />
                                    </Link>
                                </div>
                                <div className="services-text text-center">
                                    <h3>
                                        <Link href={`/services-details/${item.id}`}>{item.Title}</Link>
                                    </h3>
                                    {/* Truncar la descripción a 100 caracteres */}
                                    <p>{truncateText(item.description, 150)}</p>
                                    <Link href={`/services-details/${item.id}`}>
                                        Leer más <i className="dripicons-arrow-thin-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceSectionFour;
