"use client";
import Link from 'next/link';
import React from 'react';
import { useService } from '../../../api/getService';
import { responseType } from '../../../types/response';
import { serviceType } from '@/interFace/interFace';

const ServiceCategory = () => {
    const { result, loading, error }: responseType = useService();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    return (
        <ul className="services-link">
            {result?.map((service: serviceType, index: number) => (
                <li key={index}>
                    <Link href="#">
                        <i className="fas fa-angle-right"></i> {service.Title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default ServiceCategory;