import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import serviceBg from '../../../public/assets/img/service/service-details/4.jpg';
import serviceShape from '../../../public/assets/img/service/service-details/shape.png';
import Image from 'next/image';
import Link from 'next/link';
import ServiceCategory from './ServiceCategory';
import ServiceDetailsContent from './ServiceDetailsContent';
import { idType } from '@/interFace/interFace';

const ServiceDetailsMain = ({ id }: idType) => {
    return (
        <>
            <Breadcrumb title="Service Details" subTitle="Service Details" />
            <div className="services-details-area pt-120 pb-75">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-30">
                            <div
                                className="services-sidebar mb-60"
                                style={{ backgroundImage: `url(${serviceBg.src})` }}
                            >
                                <div className="services-title">
                                    <h1>Servicios</h1>
                                    <div className="servicest-t-img">
                                        <Image
                                            src={serviceShape}
                                            style={{ width: 'auto', height: 'auto' }}
                                            alt="image not found"
                                        />
                                    </div>
                                </div>
                                <ServiceCategory />
                            </div>
                            <div
                                className="services-sidebar mb-60"
                                style={{
                                    backgroundImage: `url(${'assets/img/service/service-details/5.jpg'})`,
                                }}
                            >
                                <div className="services-title">
                                    <h1>Descargas</h1>
                                    <div className="servicest-t-img">
                                        <Image
                                            src={serviceShape}
                                            style={{ width: 'auto', height: 'auto' }}
                                            alt="image not found"
                                        />
                                    </div>
                                </div>
                                <ul className="services-link">
                                    <li>
                                        <Link href="#">
                                            <i className="far fa-file-word"></i>Presentation pdf
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i className="far fa-file-word"></i>Wordfile.doc
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 mb-30">
                            {/* Enviar solo el `id` a ServiceDetailsContent */}
                            <ServiceDetailsContent id={id} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailsMain;
