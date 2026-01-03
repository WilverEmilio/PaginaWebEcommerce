"use client";
import Image from "next/image";
import React from "react";
import { useAbout } from "../../../api/getAbout";

const AboutSectionFour = () => {
  const { loading, result, error } = useAbout();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !result) {
    return null; // evita que la app se rompa
  }

  const imageUrl =
    result.About_Secundario?.url
      ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${result.About_Secundario.url}`
      : null;

  return (
    <div className="about-us-area about-shape pt-120 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="about-info mb-30">
              <h1>
                Bienvenido a <br /> {result.Title}
              </h1>
              <span>{result.phrase}</span>
              <p>{result.About_Us}</p>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="about-img mb-30">
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt="About image"
                  width={500}
                  height={525}
                  className="category-image"
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSectionFour;
