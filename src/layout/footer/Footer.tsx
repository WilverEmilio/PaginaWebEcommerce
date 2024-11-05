import Link from 'next/link';
import React from 'react';
import shape1 from '../../../public/assets/img/shape/f.png';
import Image from 'next/image';
import SocialIcon from './social-icon';
import CopyRightArea from './copyright-area';
import { responseType_home } from '../../../types/response';
import { useHomeStart } from '../../../api/getHomeStart';
import { useInfo } from '../../../api/getInfo';
import {responseType_info} from '../../../types/response';

const Footer = () => {
    const {resultH,loadingH, errorH}: responseType_home =  useHomeStart();
    const {resultI,loadingI, errorI}: responseType_info = useInfo();

    const backgroundImage = resultH?.fooder?.url
    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${resultH.fooder.url}`
    : '';

    const logo = resultH?.icon?.url
    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${resultH.icon.url}`
    : '';

    if (loadingI) {
        return <div>Loading...</div>
    }

    return (
        <footer>
            <div className="footer-area pt-200" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="container">
                    <div className="footer-bg pb-50">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer-wrapper mb-30">
                                    <div className="footer-logo">
                                        <Link href="/"> 
                                            {/* Aseguramos que logo tenga valor antes de renderizar Image */}
                                            {logo && <Image src={logo} width={150}  height={150}  alt="Logo"/>}
                                        </Link>
                                    </div>
                                    <div className="footer-text">
                                        <p>{resultI?.description}</p>
                                    </div>
                                    <SocialIcon WrapperClass='footer-icon' />
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer-wrapper pl-45 mb-30">
                                    <div className="footer-title">
                                        <h4>Atención al cliente</h4>
                                        <Image src={shape1} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                    </div>
                                    <ul className="fotter-menu">
                                        <li><Link href="/contact">Ayuda y pedidos</Link></li>
                                        <li><Link href="/privacy-policy">Política de privacidad</Link></li>
                                        {/* <li><Link href="/service">Devolver &amp; Cancelación</Link></li>
                                        <li><Link href="/contact">Horario de entrega</Link></li>
                                        <li><Link href="/contact">Recibir una llamada</Link></li>
                                        <li><Link href="/service">Consulta en línea</Link></li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer-wrapper pl-45 mb-30">
                                    <div className="footer-title">
                                        <h4>Información de contacto</h4>
                                        <Image src={shape1} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                    </div>
                                    <ul className="fotter-link">
                                        <li>
                                            <i className='fas fa-paper-plane'></i>
                                            <span className='zomata-contact'>
                                                <Link href="#">{resultI?.address}</Link>
                                            </span>
                                        </li>
                                        <li>
                                            <i className='fas fa-envelope-open'></i>
                                            <span className='zomata-contact'>
                                                {resultI?.email && (
                                                    <a href={`mailto:${resultI.email}`}>
                                                        {resultI.email}
                                                    </a>
                                                )}
                                            </span>
                                        </li>
                                        <li>
                                            <i className='fas fa-headphones'></i>
                                            <span className='zomata-contact'>
                                                {resultI?.phone && (
                                                    <a href={`tel:${resultI.phone}`}>
                                                        {resultI.phone}
                                                    </a>
                                                )}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer-wrapper pl-40 mb-30">
                                    <div className="footer-title">
                                        <h4>Boletines informativos</h4>
                                        <Image src={shape1} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                    </div>
                                    <div className="footer-content">
                                        <p>Ingresa tu email y te enviaremos información de los nuevos productos.</p>
                                    </div>
                                    <div className="subscribes-form">
                                        <div className="form-wrap">
                                            <input type="email" placeholder="Ingresa tu correo electrónico" />
                                            <button className="btn">Suscribir</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CopyRightArea />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
