import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import team_data from '@/data/team-data';
import Link from 'next/link';
import Image from 'next/image';
import GalleryCtaSection from '../gallery-1/GalleryCtaSection';
import BrandSection from '../Elements/brand/BrandSection';

const TeamMainArea = () => {
    return (
        <>
            <Breadcrumb title='Team' subTitle='Team' />
            <div className="team-area pt-120 pb-70">
                <div className="container">
                    <div className="row">
                        {
                            team_data.slice(0, 8).map((item) => (
                                <div className="col-xl-3 col-lg-3 col-md-6" key={item.id}>
                                    <div className="team-wrapper text-center mb-45">
                                        <div className="team-img">
                                            <Image src={item.image} style={{ width: "100%", height: "auto" }} alt='image not found' />
                                            <div className="team-icon">
                                                {
                                                    item?.socialIcon?.map((icon: any) => (
                                                        <Link key={icon.id} href={icon.socialLink}><i className={icon.icon}></i></Link>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="team-text">
                                            <Link href={`/team-details/${item.id}`}><h4>{item.authorName}</h4></Link>
                                            <span>{item.destination}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
            <GalleryCtaSection />
            <BrandSection />
        </>
    );
};

export default TeamMainArea;