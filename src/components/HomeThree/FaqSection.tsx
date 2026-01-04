"use client";
import React from "react";
import { useQuestions } from "../../../api/getQuestions";
import { useAbout } from "../../../api/getAbout";
import { Questions } from "@/interFace/interFace";

const FaqSection = () => {
  const { carga, resultado } = useQuestions();
  const { loading, result } = useAbout();

  // ✅ VALIDACIÓN SEGURA
  const faqs = Array.isArray(resultado) ? resultado : [];

  if (carga || loading) {
    return (
      <div className="faq-area gray2-bg pt-105 pb-90">
        <div className="container text-center">
          <p>Cargando...</p>
        </div>
      </div>
    );
  }

  if (faqs.length === 0 || !result) return null;

  const backgroundImageUrl = result.Question?.url
    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${result.Question.url}`
    : "";

  return (
    <div className="faq-area gray2-bg pt-105 pb-90">
      <div
        className="faq-img d-none d-md-block"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6 offset-xl-6 col-lg-6 offset-lg-6 col-md-6 offset-md-6">
            <div className="question-collapse">
              <div className="faq-title">
                <h1>Preguntas Frecuentes</h1>
              </div>

              <div className="accordion" id="accordionExample">
                {/* ✅ CORRECCIÓN AQUÍ */}
                {faqs.map((faq: Questions, index: number) => (
                  <div className="accordion-item" key={faq.id}>
                    <div className="accordion-header" id={`heading${index}`}>
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded={index === 0}
                        aria-controls={`collapse${index}`}
                      >
                        <h5>{faq.Question}</h5>
                      </button>
                    </div>

                    <div
                      id={`collapse${index}`}
                      className={`accordion-collapse collapse ${
                        index === 0 ? "show" : ""
                      }`}
                    >
                      <div className="accordion__panel">
                        <p>{faq.Response}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;