"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import shape from "../../../public/assets/img/shape/1.png";
import img4 from "../../../public/assets/img/icon/icon1.png";
import img5 from "../../../public/assets/img/icon/icon2.png";
import img6 from "../../../public/assets/img/icon/icon3.png";
import { useAbout } from "../../../api/getAbout";

const ServiceSectionTwo = () => {
  const { loading, result } = useAbout();

  if (loading) {
    return (
      <div className="we-do-area pt-110 pb-85">
        <div className="container text-center">
          <p>Cargando...</p>
        </div>
      </div>
    );
  }

  if (!result) return null;

  // ✅ Array estático local - ESTÁ OK porque siempre existe
  const services = [
    {
      id: 1,
      title: result.What_We_Do_OneTitle,
      desc: result.What_We_Do_OneDescription,
      image: img4,
    },
    {
      id: 2,
      title: result.What_We_Do_TwoTitle,
      desc: result.What_We_Do_TwoDescription,
      image: img5,
    },
    {
      id: 3,
      title: result.What_We_Do_ThreeTitle,
      desc: result.What_We_Do_ThreeDescription,
      image: img6,
    },
  ];

  return (
    <div className="we-do-area pt-110 pb-85">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
            <div className="section-title text-center section-circle mb-70">
              <div className="section-img">
                <Image src={shape} alt="shape" />
              </div>
              <h1>Qué hacemos</h1>
              <p>{result.What_We_Do_Description}</p>
            </div>
          </div>
        </div>

        <div className="row">
          {services.map((item) => (
            <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
              <div className="we-do-wrapper text-center mb-30">
                <div className="we-do-img">
                  <Image src={item.image} alt="icon" />
                </div>
                <div className="we-do-text">
                  <h4>
                    <Link href="/services">{item.title}</Link>
                  </h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSectionTwo;