import Image from 'next/image';
import React from 'react';
import shapeImg from '../../../public/assets/img/shape/1.png';
import team_data from '@/data/team-data';
import Link from 'next/link';

const TeamSectionThree = () => {
    return (
        <div className="team-area pt-110 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                        <div className="section-title text-center section-circle mb-70">
                            <div className="section-img">
                                <Image src={shapeImg} style={{ width: "auto", height: "auto" }} alt='image not found' />
                            </div>
                            <h1>Zomata Farmer</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor
                                incididunt ut labore et dolore magna aliqua enim minim veniam</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        team_data.slice(8, 11).map((item) => (
                            <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
                                <div className="single-team text-center mb-30">
                                    <div className="team2-img">
                                        <Image src={item.image} style={{ width: "100%", height: "auto" }} alt='image not found' />
                                        <div className="team-content">
                                            <Link href={`/team-details/${item.id}`}><h4>{item.authorName}</h4></Link>
                                            <span>{item.destination}</span>
                                            <div className="team2-icon">
                                                {
                                                    item?.socialIcon?.map((icon: any) => (
                                                        <Link key={icon.id} href={icon.socialLink}><i className={icon.icon}></i></Link>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default TeamSectionThree;