'use client';
import Link from 'next/link';
import React from 'react';
import Progressbar from './Progressbar';
import { idType } from '@/interFace/interFace';
import team_data from '@/data/team-data';
import Image from 'next/image';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import GalleryCtaSection from '../gallery-1/GalleryCtaSection';
import BrandSection from '../Elements/brand/BrandSection';

const TeamDetilsMain = ({ id }: idType) => {
    const team: any = team_data.find((item) => item.id == id);

    return (
        <>
            <Breadcrumb title='Team Details' subTitle='Team Details' />
            <div className="service-details-area pt-135 p-rel pb-120">
                <div className="container p-rel">
                    <div className="service-details-content">
                        <div className="service-details-top mb-45">
                            <span className="zom-details-subtitle">{team?.destination}</span>
                            <h3 className="zom-details-title">{team?.authorName}</h3>
                        </div>
                        <div className="service-author-biography">
                            <div className="row align-items-center mb-100">
                                <div className="col-xxl-6 col-xl-6 col-lg-7">
                                    <div className="author-biography-thumb mb-30 mb-lg-0">
                                        {team?.image &&
                                            <Image
                                                src={team.image}
                                                style={{ width: "100%", height: "auto" }}
                                                alt="image not found"
                                            />
                                        }
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-5">
                                    <div className="single-author-biography-info biography-info-space pl-40">
                                        <h3 className="single-author-biography-title">Biography</h3>
                                        <p className="single-author-biography-desc">
                                            Lost the plot James Bond say burke skive offs spiffing
                                            dropped
                                            <br /> a clanger, me old mucker absolutely.
                                        </p>
                                        <div className="single-author-biography-address-list">
                                            <ul>
                                                <li>
                                                    <i className="fal fa-phone-alt"></i>  <Link href="tel:+53684956245">+(536) 84 95 62 45</Link>
                                                </li>
                                                <li>
                                                    <i className="fal fa-envelope"></i> {" "}
                                                    <Link href="mailto:pabloinfo@gmail.com" target='_blank'>
                                                        pabloinfo@gmail.com
                                                    </Link>
                                                </li>

                                                <li>
                                                    <i className="fal fa-map-marker-alt"></i>  <Link href="tel:+53684956245">+(536) 84 95 62 45</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="single-author-biography-social mb-45">
                                            <Link href="https://www.facebook.com/">
                                                <i className="fab fa-facebook-f"></i>
                                            </Link>
                                            <Link href="https://twitter.com/">
                                                <i className="fab fa-twitter"></i>
                                            </Link>
                                            <Link href="https://vimeo.com/">
                                                <i className="fab fa-vimeo-v"></i>
                                            </Link>
                                            <Link href="https://bd.linkedin.com/">
                                                <i className="fab fa-linkedin-in"></i>
                                            </Link>
                                        </div>
                                        <Progressbar />
                                    </div>
                                </div>
                            </div>
                            <div className="service-next-prev d-flex justify-content-between">
                                <Link href="/service-details" className="prev-arrow-redirect">
                                    <i className="fal fa-arrow-left"></i>
                                    Previous
                                </Link>
                                <Link href="/service-details" className="next-arrow-redirect">
                                    Next <i className="fal fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <GalleryCtaSection />
            <BrandSection />
        </>
    );
};

export default TeamDetilsMain;