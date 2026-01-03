"use client";
import React from 'react';
import SocialIcon from '../footer/social-icon';
import Link from 'next/link';
import { useInfo } from '../../../api/getInfo';
import { responseType_info } from '../../../types/response';

const TopHeaderTwo = () => {
    const {result,loading,error} =  useInfo();

    return (
        <div className="header-area header-2 d-none d-md-block">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7 col-md-9">
                        <div className="header-wrapper">
                            <div className="header-text">
                                <span>
                                    <i className='far fa-map'> </i>
                                    <Link href='#'>
                                        {result?.address}
                                    </Link>
                                </span>
                                <span>
                                    <i className='far fa-envelope'> </i>
                                    <Link href="mailto:suport@gmail.com">
                                        {result?.email}
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-3">
                        <SocialIcon WrapperClass='header-icon text-md-right' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopHeaderTwo;