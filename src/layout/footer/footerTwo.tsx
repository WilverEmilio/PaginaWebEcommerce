import React from 'react';
import SocialIcon from './social-icon';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/assets/img/logo/logo.png';
import shapeOne from '../../../public/assets/img/shape/f2.png';
import footerImage from '../../../public/assets/img/footer/1.jpg';

const FooterTwo = () => {
    return (
        <footer>
            <div className="footer-area pt-100 pb-65">
                <div className="container">
                    <div className="footer-bg pb-50">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer-wrapper single-footer mb-30">
                                    <div className="footer-logo">
                                        <Link href="/">
                                            <Image src={Logo} style={{ width: "auto", height: "auto" }} alt="logo" />
                                        </Link>
                                    </div>
                                    <div className="footer-text">
                                        <p>Lorem ipsum dolor amet cons adipisicing elit sed do eiusmod tempor
                                            incidie.</p>
                                    </div>
                                    <ul className="fotter-link">
                                        <li>
                                            <i className='fas fa-paper-plane'></i>
                                            <span className='zomata-contact-2'>
                                                <Link href="#">205 Olazu Familia, Herba <br />
                                                    Street Front USA</Link>
                                            </span>
                                        </li>
                                        <li>
                                            <i className='fas fa-envelope-open'></i>
                                            <span className='zomata-contact-2'>
                                                <Link href="mailto:zomatainfo@gmail.com">
                                                    zomatainfo@gmail.com
                                                </Link>
                                            </span>
                                        </li>
                                        <li>
                                            <i className='fas fa-headphones'></i>
                                            <span className='zomata-contact-2'>
                                                <Link href="tel:+53684956245">+(536) 84 95 62 45</Link>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer-wrapper single-footer pl-45 mb-30">
                                    <div className="footer-title">
                                        <h4>Customer Support</h4>
                                        <Image src={shapeOne} style={{ width: "auto", height: "auto" }} alt="shape-image" />
                                    </div>
                                    <ul className="fotter-menu">
                                        <li><Link href="/contact">Help and Ordering</Link></li>
                                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                        <li><Link href="/service">Return &amp; Cancellation</Link></li>
                                        <li><Link href="/contact">Delevery Schedule</Link></li>
                                        <li><Link href="/contact">Get a Call</Link></li>
                                        <li><Link href="/service">Online Enquiry</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer-wrapper single-footer pl-45 mb-30">
                                    <div className="footer-title">
                                        <h4>Newsletters</h4>
                                        <Image src={shapeOne} style={{ width: "auto", height: "auto" }} alt="shape" />
                                    </div>
                                    <div className="footer-content">
                                        <p>Enter your email and we’ll send you latest information plans.</p>
                                    </div>
                                    <div className="subscribes-form">
                                        <div className="form-wrap">
                                            <input type="email" placeholder="Enter your emaill" />
                                            <button className="btn">Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer-wrapper single-footer pl-40 mb-30">
                                    <div className="footer-title">
                                        <h4>Instagram</h4>
                                        <Image src={shapeOne} style={{ width: "auto", height: "auto" }} alt="shape" />
                                    </div>
                                    <div className="instagram-img">
                                        <Link href="/">
                                            <Image src={footerImage} style={{ width: "auto", height: "auto" }}
                                                alt="footer" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-area footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="copyright">
                                <p>Copyright <i className='fas fa-copyright'></i> 2023 <Link href="#">Zomata</Link>.
                                    All Rights Reserved
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <SocialIcon WrapperClass='footer-icon text-md-right' />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterTwo;