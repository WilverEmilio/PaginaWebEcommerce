"use client";
import React from 'react';
import Link from 'next/link';
import { useHeader } from '../../../../api/getHeader';
import { responseType } from '../../../../types/response';


interface PropsData {
    title: string | undefined,
    subTitle: string | undefined
}

const Breadcrumb = ({ title, subTitle }: PropsData) => {
    const { result, loading, error }: responseType = useHeader();
    const backgroundImageUrl = result?.Shop
                    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${result.Shop.url}` 
                    : '';

                    
    return (
        <>
            <div className="breadcrumb-area pt-160 pb-170" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="breadcrumb-text text-center">
                                <h1>{title}</h1>
                                <ul className="breadcrumb-menu">
                                    <li><Link href="/">Inicio</Link></li>
                                    <li><i className='fas fa-chevron-right'></i></li>
                                    <li><span>{subTitle}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Breadcrumb;