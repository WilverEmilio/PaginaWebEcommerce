"use client";
import Image from 'next/image';
import React from 'react';
import DetailsImg from '../../../public/assets/img/service/service-details/1.jpg';
import DetailsImg2 from '../../../public/assets/img/service/service-details/6.jpg';
import { useGetServicesID } from '../../../api/getServiceID';
import { serviceType2 } from '@/interFace/interFace';

interface ServiceDetailsContentProps {
    id: number; // Cambiar para aceptar el id
}


const ServiceDetailsContent: React.FC<ServiceDetailsContentProps> = ({ id }) => {
    const { result: serviceData = [], loading} = useGetServicesID(id);

    if (loading) {
        return <div>Loading...</div>;
    }

    // Verifica si hay datos y accede al primer elemento
    if (!serviceData || serviceData.length === 0) {
        return <div>No se encontró información del servicio.</div>;
    }

    const serviceDetail: serviceType2 = serviceData[0]; // Accede al primer elemento

    return (
        <div className="services-details-wrapper">
            <div className="services-details-img mb-50">
            <Image
                                                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${serviceDetail.images[0].url}`}
                                                                alt={serviceDetail.Title}
                                                                width={270}
                                                                height={550}
                                                                className="product-image"
                                                            />
            </div>
            <div className="services-details-text">
                <h1>{serviceDetail.Title}</h1>
                <p>{serviceDetail.description}</p>
            </div>
            <div className="services-details-info"
                style={{ backgroundImage: `url(${DetailsImg2.src})` }}>
                <p>{serviceDetail.phrase}</p>
            </div>
            {/* <div className="services-details-text mb-35">
                <h1>Why Needs Organic Food For Health</h1>
                <p>No one rejects dislikes or avoids pleasure itself because it is pleasure but
                    because those who do not know how to pursue pleasure rationally encounter
                    consequences that are extremely painful. Nor again is there anyone who loves or
                    pursues desires to obtain pain of itself because it is pain, but because
                    occasionally.</p>
            </div>
            <ServiceContent />
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="services2-img mb-30">
                        <Image src={DetailsImg3} style={{ width: "100%", height: "auto" }} alt="image not found" />
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="services2-img mb-30">
                        <Image src={DetailsImg4} style={{ width: "100%", height: "auto" }} alt="image not found" />
                    </div>
                </div>
            </div>
            <div className="services2-details-text">
                <p>Pleasure and praising pain was born and I will give you a complete account of the
                    system, and expound the actual teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes, or avoids pleasure
                    itself, because it is pleasure, but because those who do not know how to pursue
                    pleasure rationally encounter consequences that are extremely painful. Nor again
                    is there anyone who loves or pursues or desires to obtain pain of itself,
                    because it is pain, but because occasionally circumstances occur in which toil
                    and pain can procure him some </p>
            </div> */}
        </div>
    );
};

export default ServiceDetailsContent;