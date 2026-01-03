"use client";
import Image from 'next/image';
import React from 'react';
import { useServiceImg } from '../../../api/getServiceImg';
import { responseType } from '../../../types/response';

const ServiceAboutSection = () => {
  const { result, loading, error } = useServiceImg();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const backgroundImageUrl = result?.imagen2?.url
    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${result.imagen2.url}`
    : null;

  return (
    <div className="zomata-area pt-120 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 cl-md-6">
            <div className="zomata-img mb-30">
              {backgroundImageUrl && (
                <Image
                  src={backgroundImageUrl}
                  width={500}
                  height={300}
                  alt="Service image"
                  style={{ width: '100%', height: 'auto' }}
                />
              )}
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 cl-md-6">
            <div className="zomata-wrapper mb-30">
              <div className="zomata-text">
                <h1>{result?.Title}</h1>
                <p>{result?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAboutSection;
