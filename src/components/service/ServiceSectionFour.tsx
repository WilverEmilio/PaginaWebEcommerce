"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useService } from '../../../api/getService';
import { serviceType1 } from '@/interFace/interFace';

const ServiceSectionFour = () => {
    const { result, loading, error } = useService();

    // ✅ VALIDACIÓN SEGURA
    const services = Array.isArray(result) ? result : [];

    if (loading) {
        return (
            <div className="services-area pb-60">
                <div className="container text-center">
                    <p>Cargando servicios...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="services-area pb-60">
                <div className="container text-center">
                    <p>Error al cargar los servicios</p>
                </div>
            </div>
        );
    }

    if (services.length === 0) {
        return (
            <div className="services-area pb-60">
                <div className="container text-center">
                    <p>No hay servicios disponibles.</p>
                </div>
            </div>
        );
    }

    // Función para truncar texto
    const truncateText = (text: string, limit: number) => {
        return text.length > limit ? `${text.slice(0, limit)}...` : text;
    };

    return (
        <div className="services-area pb-60">
            <div className="container">
                <div className="row">
                    {/* ✅ CORRECCIÓN AQUÍ */}
                    {services.map((item: serviceType1) => {
                        // ✅ Validar que images existe y tiene elementos
                        const imageUrl = item.images?.[1]?.url 
                            ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${item.images[1].url}`
                            : '/assets/img/no-image.png';

                        return (
                            <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
                                <div className="services-wrapper single-services mb-60">
                                    <div className="services-img">
                                        <Link href={`/services-details/${item.id}`}>
                                            <Image
                                                src={imageUrl}
                                                alt={item.Title}
                                                width={100}
                                                height={250}
                                                className="product-image"
                                            />
                                        </Link>
                                    </div>
                                    <div className="services-text text-center">
                                        <h3>
                                            <Link href={`/services-details/${item.id}`}>
                                                {item.Title}
                                            </Link>
                                        </h3>
                                        <p>{truncateText(item.description, 150)}</p>
                                        <Link href={`/services-details/${item.id}`}>
                                            Leer más <i className="dripicons-arrow-thin-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ServiceSectionFour;