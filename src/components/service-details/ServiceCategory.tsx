"use client";
import Link from 'next/link';
import React from 'react';
import { useService } from '../../../api/getService';
import { serviceType3 } from '@/interFace/interFace';

const ServiceCategory = () => {
    const { result, loading, error } = useService();

    // ✅ VALIDACIÓN SEGURA
    const services = Array.isArray(result) ? result : [];

    if (loading) {
        return (
            <ul className="services-link">
                <li>Cargando servicios...</li>
            </ul>
        );
    }

    if (error) {
        return (
            <ul className="services-link">
                <li>Error al cargar servicios</li>
            </ul>
        );
    }

    if (services.length === 0) {
        return (
            <ul className="services-link">
                <li>No hay servicios disponibles</li>
            </ul>
        );
    }

    return (
        <ul className="services-link">
            {/* ✅ CORRECCIÓN CRÍTICA AQUÍ */}
            {services.map((service: serviceType3, index: number) => (
                <li key={service.id || index}>
                    <Link href="#">
                        <i className="fas fa-angle-right"></i> {service.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default ServiceCategory;