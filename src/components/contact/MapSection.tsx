import React from 'react';

const MapSection = () => {
    return (
        <section className="map-area">
            <div className="map2-wrapper">
                <div id="contact-map" className="map">
                    <div className="contact-map">
                        <div className="gm-style">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196123.50166403286!2d-91.50726209951331!3d14.839106853371627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDE0JzAwLjAiTiA5McKwMzQyJzQ2LjIiVw!5e0!3m2!1sen!2sbd!4v1629787582901!5m2!1sen!2sbd"
                                width="600" // Puedes ajustar el ancho según necesites
                                height="450" // Puedes ajustar la altura según necesites
                                loading="lazy"
                                style={{ border: 0 }} // Puedes añadir estilo según necesites
                                allowFullScreen // Para permitir la pantalla completa
                                aria-hidden="false"
                                tabIndex={0}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
