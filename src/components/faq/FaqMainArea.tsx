"use client";
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import FaqCta from './FaqCta';
import { useQuestions } from '../../../api/getQuestions';
import { useAbout } from '../../../api/getAbout';
import { Questions } from '@/interFace/interFace';

const FaqMainArea = () => {
  const { carga, resultado } = useQuestions();
  const { loading, result } = useAbout();

  // ✅ VALIDACIÓN SEGURA
  const faqs = Array.isArray(resultado) ? resultado : [];

  if (carga || loading) {
    return (
      <>
        <Breadcrumb title="Faq" subTitle="Faq" />
        <div className="container text-center pt-140 pb-140">
          <p>Cargando...</p>
        </div>
      </>
    );
  }

  if (faqs.length === 0) {
    return (
      <>
        <Breadcrumb title="Faq" subTitle="Faq" />
        <div className="container text-center pt-140 pb-140">
          <p>No hay preguntas frecuentes disponibles en este momento.</p>
        </div>
      </>
    );
  }

  const backgroundImageUrl = result?.Question?.url
    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${result.Question.url}`
    : "";

  return (
    <>
      <Breadcrumb title="Faq" subTitle="Faq" />

      <div className="faq-area pt-140 pb-140">
        {backgroundImageUrl && (
          <div
            className="faq-img d-none d-md-block"
            style={{ 
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        )}

        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 offset-xl-6 col-lg-6 offset-lg-6 col-md-6 offset-md-6">
              <div className="question-collapse">
                <div className="faq-title">
                  <h1>Preguntas Frecuentes</h1>
                </div>

                <div className="accordion" id="accordionExample">
                  {faqs.map((faq: Questions, index: number) => (
                    <div className="accordion-item" key={faq.id}>
                      <div className="accordion-header" id={`heading${index}`}>
                        <button
                          className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
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
                        className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                        data-bs-parent="#accordionExample"
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

      <FaqCta />
    </>
  );
};

export default FaqMainArea;