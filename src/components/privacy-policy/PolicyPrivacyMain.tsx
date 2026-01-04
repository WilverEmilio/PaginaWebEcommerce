"use client"
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import Link from 'next/link';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const PolicyPrivacyMain = () => {
    const generatePDF = async () => {
        const doc = new jsPDF();
        const imgWidth = 210;
        const pageHeight = 295;

        const showAllContent = () => {
            const allPanes = document.querySelectorAll('.tab-pane');
            allPanes.forEach(pane => {
                (pane as HTMLElement).classList.add('show', 'active');
            });
        };

        const restoreVisibility = () => {
            const allPanes = document.querySelectorAll('.tab-pane');
            allPanes.forEach(pane => {
                if (!(pane as HTMLElement).classList.contains('original-active')) {
                    (pane as HTMLElement).classList.remove('show', 'active');
                }
            });
        };

        try {
            const originalActivePane = document.querySelector('.tab-pane.show.active');
            originalActivePane?.classList.add('original-active');

            showAllContent();

            const sections = ['tab_privacy_policy', 'tab_terms_conditions', 'tab_return_policy'];
            
            for (let i = 0; i < sections.length; i++) {
                const content = document.getElementById(sections[i]);
                
                if (content) {
                    const canvas = await html2canvas(content);
                    const imgData = canvas.toDataURL('image/png');
                    const imgHeight = (canvas.height * imgWidth) / canvas.width;
                    
                    if (i > 0) {
                        doc.addPage();
                    }
                    
                    doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                }
            }

            restoreVisibility();
            originalActivePane?.classList.remove('original-active');

            doc.save('politica.pdf');
        } catch (error) {
            console.error('Error generating PDF:', error);
            restoreVisibility();
        }
    };

    return (
        <>
            <Breadcrumb title="Política y Privacidad" subTitle="Política y Privacidad" />
            <section className="terms_conditions_section section_space_lg pt-120 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <ul className="nav tabs_nav_boxed unordered_list_block mb-60" role="tablist">
                                <li role="presentation">
                                    <button
                                        className="active"
                                        data-bs-toggle="tab"
                                        data-bs-target="#tab_privacy_policy"
                                        type="button"
                                        role="tab"
                                        aria-selected="true"
                                    >
                                        <i className="fas fa-circle"></i>
                                        <span>Política de privacidad</span>
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button
                                        data-bs-toggle="tab"
                                        data-bs-target="#tab_terms_conditions"
                                        type="button"
                                        role="tab"
                                        aria-selected="false"
                                    >
                                        <i className="fas fa-circle"></i>
                                        <span>Términos y condiciones</span>
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button
                                        data-bs-toggle="tab"
                                        data-bs-target="#tab_return_policy"
                                        type="button"
                                        role="tab"
                                        aria-selected="false"
                                    >
                                        <i className="fas fa-circle"></i>
                                        <span>Política de devoluciones</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-9">
                            <div className="tab-content mb-60">
                                {/* Política de Privacidad */}
                                <div className="tab-pane fade show active" id="tab_privacy_policy" role="tabpanel">
                                    <div className="terms_conditions_content">
                                        <h3 className="warpper_title">Acuerdo de Política de Privacidad</h3>
                                        <p>
                                            En nuestra empresa, tu privacidad es de suma importancia. Queremos garantizar que sepas exactamente cómo y por qué recopilamos, usamos, y protegemos tu información personal.
                                        </p>
                                        <h4 className="info_title">¿Qué datos recopilamos y cómo se usan?</h4>
                                        <p>
                                            Recopilamos varios tipos de datos para mejorar la experiencia del usuario y optimizar nuestros servicios.
                                        </p>
                                        <ul className="icon_list unordered_list_block">
                                            <li>
                                                <span className="list_item_text">
                                                    <strong>Datos personales:</strong> Se utilizan para procesar transacciones y brindar soporte.
                                                </span>
                                            </li>
                                            <li>
                                                <span className="list_item_text">
                                                    <strong>Datos técnicos:</strong> Nos ayudan a mejorar el rendimiento del sitio.
                                                </span>
                                            </li>
                                        </ul>
                                        <h4 className="info_title">¿Cómo protegemos tu información?</h4>
                                        <p>
                                            Implementamos medidas de seguridad avanzadas, como el cifrado SSL, para proteger tu información personal.
                                        </p>
                                        <h4 className="info_title">Tus derechos</h4>
                                        <p>
                                            Tienes derecho a solicitar el acceso a tu información personal, corregirla o eliminarla.
                                        </p>
                                    </div>
                                </div>

                                {/* Términos y Condiciones */}
                                <div className="tab-pane fade" id="tab_terms_conditions" role="tabpanel">
                                    <div className="terms_conditions_content">
                                        <h3 className="warpper_title">Acuerdo de Términos y Condiciones</h3>
                                        <p>
                                            Al acceder y usar nuestro sitio web, aceptas cumplir con estos términos y condiciones.
                                        </p>
                                        <h4 className="info_title">Uso del sitio web</h4>
                                        <p>
                                            Se espera que uses nuestro sitio de manera responsable y ética.
                                        </p>
                                        <ul className="icon_list unordered_list_block">
                                            <li>
                                                <span className="list_item_text">
                                                    <strong>Comportamiento prohibido:</strong> Incluye cualquier intento de hackear el sitio.
                                                </span>
                                            </li>
                                            <li>
                                                <span className="list_item_text">
                                                    <strong>Derechos de propiedad:</strong> Todos los elementos están protegidos por derechos de autor.
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Política de Devoluciones */}
                                <div className="tab-pane fade" id="tab_return_policy" role="tabpanel">
                                    <div className="terms_conditions_content">
                                        <h3 className="warpper_title">Política de Devoluciones</h3>
                                        <p>
                                            Aceptamos devoluciones dentro de los 30 días posteriores a la entrega del producto.
                                        </p>
                                        <h4 className="info_title">Condiciones para devoluciones</h4>
                                        <ul className="icon_list unordered_list_block">
                                            <li>
                                                <span className="list_item_text">
                                                    <strong>Estado original:</strong> El artículo debe estar sin usar.
                                                </span>
                                            </li>
                                            <li>
                                                <span className="list_item_text">
                                                    <strong>Documentación requerida:</strong> Incluye el recibo de compra.
                                                </span>
                                            </li>
                                        </ul>
                                        <h4 className="info_title">Reembolsos</h4>
                                        <p>
                                            El reembolso se realizará a tu método de pago original dentro de 7-10 días hábiles.
                                        </p>
                                        <p>
                                            Contacto:{' '}
                                            <Link className="author_mail" href="mailto:whack@gmail.com">
                                                whack@gmail.com
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-primary mt-3" onClick={generatePDF}>
                                Descargar Términos y Política
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PolicyPrivacyMain;