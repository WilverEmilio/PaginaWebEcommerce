"use client"
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import Link from 'next/link';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const PolicyPrivacyMain = () => {
    const generatePDF = async () => {
        const doc = new jsPDF();
        let totalHeight = 0;
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 295; // A4 height in mm
        const margin = 10; // margin in mm

        // Function to make all content visible temporarily
        const showAllContent = () => {
            const allPanes = document.querySelectorAll('.tab-pane');
            allPanes.forEach(pane => {
                pane.classList.add('show', 'active');
            });
        };

        // Function to restore original visibility
        const restoreVisibility = () => {
            const allPanes = document.querySelectorAll('.tab-pane');
            allPanes.forEach(pane => {
                if (!pane.classList.contains('original-active')) {
                    pane.classList.remove('show', 'active');
                }
            });
        };

        try {
            // Save original state
            const originalActivePane = document.querySelector('.tab-pane.show.active');
            originalActivePane?.classList.add('original-active');

            // Make all content visible
            showAllContent();

            // Get all sections
            const sections = ['tab_privacy_policy', 'tab_terms_conditions', 'tab_return_policy'];
            
            for (let i = 0; i < sections.length; i++) {
                const content = document.getElementById(sections[i]);
                
                if (content) {
                    const canvas = await html2canvas(content);
                    const imgData = canvas.toDataURL('image/png');
                    
                    // Calculate heights
                    const imgHeight = (canvas.height * imgWidth) / canvas.width;
                    
                    // Add new page if it's not the first section
                    if (i > 0) {
                        doc.addPage();
                    }
                    
                    // Add content
                    doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                }
            }

            // Restore original visibility state
            restoreVisibility();
            originalActivePane?.classList.remove('original-active');

            // Save the PDF
            doc.save('politica.pdf');
        } catch (error) {
            console.error('Error generating PDF:', error);
            // Restore visibility even if there's an error
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
                                            En nuestra empresa, tu privacidad es de suma importancia. Queremos garantizar que sepas exactamente cómo y por qué recopilamos, usamos, y protegemos tu información personal. Esta política es integral y está diseñada para responder a cualquier inquietud que puedas tener sobre el manejo de tus datos.
                                        </p>
                                        <h4 className="info_title">¿Qué datos recopilamos y cómo se usan?</h4>
                                        <p>
                                            Recopilamos varios tipos de datos para mejorar la experiencia del usuario y optimizar nuestros servicios. Esto incluye información que proporcionas directamente, como tu nombre, correo electrónico, y detalles de contacto, así como datos recopilados automáticamente, como tu dirección IP y el historial de navegación.
                                        </p>
                                        <ul className="icon_list unordered_list_block">
                                            <li>
                                                <span className="list_item_text">
                                                    <strong>Datos personales:</strong> Se utilizan para procesar transacciones, brindar soporte al cliente y enviar comunicaciones importantes.
                                                </span>
                                            </li>
                                            <li>
                                                <span className="list_item_text">
                                                    <strong>Datos técnicos:</strong> Nos ayudan a mejorar el rendimiento de nuestro sitio web y a diagnosticar problemas técnicos.
                                                </span>
                                            </li>
                                        </ul>
                                        <h4 className="info_title">¿Cómo protegemos tu información?</h4>
                                        <p>
                                            Implementamos una variedad de medidas de seguridad avanzadas, como el cifrado SSL, para proteger tu información personal. Solo empleados autorizados tienen acceso a esta información y están obligados a mantener su confidencialidad.
                                        </p>
                                        <h4 className="info_title">Compartir datos con terceros</h4>
                                        <p>
                                            Nunca vendemos ni alquilamos tu información a terceros. Solo compartimos datos con socios de confianza que nos ayudan a operar nuestro sitio web y a ofrecer nuestros servicios, y siempre bajo estrictos acuerdos de confidencialidad.
                                        </p>
                                        <h4 className="info_title">Tus derechos</h4>
                                        <p>
                                            Tienes derecho a solicitar el acceso a tu información personal, corregirla si es inexacta, o eliminarla si ya no es necesaria para los fines para los que fue recopilada. Si deseas ejercer estos derechos, contáctanos directamente.
                                        </p>
                                    </div>
                                </div>

                                {/* Términos y Condiciones */}
                                <div className="tab-pane fade" id="tab_terms_conditions" role="tabpanel">
                                    <div className="terms_conditions_content">
                                        <h3 className="warpper_title">Acuerdo de Términos y Condiciones</h3>
                                        <p>
                                            Bienvenido a nuestra plataforma. Al acceder y usar nuestro sitio web, aceptas cumplir con estos términos y condiciones. Hemos diseñado estas directrices para asegurar una experiencia segura y justa para todos.
                                        </p>
                                        <h4 className="info_title">Uso del sitio web</h4>
                                        <p>
                                            Se espera que uses nuestro sitio de manera responsable y ética. Está prohibido realizar cualquier actividad que pueda comprometer la seguridad del sitio o infringir los derechos de otros usuarios.
                                        </p>
                                        <ul className="icon_list unordered_list_block">
                                            <li>
                                                <span className="list_item_text">
                                                    <strong>Comportamiento prohibido:</strong> Esto incluye cualquier intento de hackear el sitio, cargar contenido malicioso o usar la plataforma con fines fraudulentos.
                                                </span>
                                            </li>
                                            <li>
                                                <span className="list_item_text">
                                                    <strong>Derechos de propiedad:</strong> Todos los elementos del sitio web, incluyendo imágenes, logotipos, y textos, están protegidos por derechos de autor y no pueden ser reutilizados sin permiso.
                                                </span>
                                            </li>
                                        </ul>
                                        <h4 className="info_title">Actualizaciones de términos</h4>
                                        <p>
                                            Nos reservamos el derecho de actualizar estos términos periódicamente. Se te notificará sobre cualquier cambio importante, pero es tu responsabilidad revisar esta página con regularidad.
                                        </p>
                                    </div>
                                </div>

                                {/* Política de Devoluciones */}
                                <div className="tab-pane fade" id="tab_return_policy" role="tabpanel">
                                    <div className="terms_conditions_content">
                                        <h3 className="warpper_title">Política de Devoluciones</h3>
                                        <p>
                                            Queremos que te sientas completamente satisfecho con tu compra. Si no estás satisfecho con un producto o si llega dañado o defectuoso, puedes devolverlo bajo las siguientes condiciones.
                                        </p>
                                        <h4 className="info_title">Condiciones para realizar devoluciones</h4>
                                        <p>
                                            Aceptamos devoluciones dentro de los 30 días posteriores a la entrega del producto, siempre que se cumplan los siguientes criterios:
                                        </p>
                                        <ul className="icon_list unordered_list_block">
                                            <li>
                                                <span className="list_item_text">
                                                    <strong>Estado original:</strong> El artículo debe estar sin usar y en su empaque original.
                                                </span>
                                            </li>
                                            <li>
                                                <span className="list_item_text">
                                                    <strong>Documentación requerida:</strong> Incluye el recibo de compra o una prueba de transacción.
                                                </span>
                                            </li>
                                            <li>
                                                <span className="list_item_text">
                                                    <strong>Excepciones:</strong> Algunos artículos, como productos personalizados o alimentos perecederos, no son elegibles para devolución.
                                                </span>
                                            </li>
                                        </ul>
                                        <h4 className="info_title">Proceso para realizar una devolución</h4>
                                        <p>
                                            Para iniciar el proceso, contáctanos a través de nuestro servicio de atención al cliente. Se te proporcionará un número de autorización de devolución junto con instrucciones detalladas.
                                        </p>
                                        <p>
                                            <strong>Gastos de devolución:</strong> Los gastos de envío para la devolución son responsabilidad del cliente, salvo que el producto sea defectuoso o incorrecto.
                                        </p>
                                        <h4 className="info_title">Reembolsos</h4>
                                        <p>
                                            Una vez que hayamos recibido y procesado tu devolución, te notificaremos el estado de tu reembolso. Si es aprobado, el reembolso se realizará a tu método de pago original dentro de 7-10 días hábiles.
                                        </p>
                                        <p>
                                            Para más detalles, contáctanos en:
                                            <Link className="author_mail" href="mailto:howdy@zomata.com">
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