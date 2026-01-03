"use strict";
'use client';
import React, { useState } from 'react';
import { useEffect } from 'react';

const DifferentAdress = () => {
    const [isActiveC, setActiveC] = useState(true);
    const handleToggleC = () => {
        setActiveC(!isActiveC);
    };

    const [isActiveB, setActiveB] = useState(true);

    // Interfaces para los tipos de datos
    interface Departamento {
        DepartamentoID: number;
        DepartamentoNombre: string;
    }

    interface Municipio {
        CodMunicipio: number;
        MunicipioNombre: string;
    }

    const [departments, setDepartments] = useState<Departamento[]>([]);
    const [municipalities, setMunicipalities] = useState<Municipio[]>([]);
    const [selectedDepartment, setSelectedDepartment] = useState<number | null>(null);

    // Función para alternar la sección de creación de cuenta
    const handleToggleB = () => {
        setActiveB(!isActiveB);
    };

    // Obtener departamentos desde la API
    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await fetch("https://elephant-project.com/SicopApiMonitoreo/api/DashboardMapa/GetInformacionDepartamentos/2022");
                const data = await response.json();
                setDepartments(data);
            } catch (error) {
                console.error("Error al obtener los departamentos:", error);
            }
        };

        fetchDepartments();
    }, []);

    // Obtener municipios cuando se selecciona un departamento
    useEffect(() => {
        const fetchMunicipalities = async () => {
            if (selectedDepartment !== null) {
                try {
                    const response = await fetch(
                        `https://elephant-project.com/SicopApiMonitoreo/api/DashboardMapa/GetInformacionMunicipios/2022/${selectedDepartment}`
                    );
                    const data = await response.json();
                    setMunicipalities(data);
                } catch (error) {
                    console.error("Error al obtener los municipios:", error);
                }
            }
        };

        fetchMunicipalities();
    }, [selectedDepartment]);

    // Manejar la selección del departamento
    const handleDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const departmentID = parseInt(e.target.value);
        setSelectedDepartment(departmentID);
    };

    return (
        <div className="different-address">
            <div className="ship-different-title">
                <label onClick={handleToggleC}>¿Enviar a una dirección diferente?</label>
            </div>
            <div id="ship-box-info" className={`${isActiveC ? "danger" : "d-block"}`}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="country-select">
                            <label>
                                Departamento <span className="required">*</span>
                            </label>
                            <select onChange={handleDepartmentChange}>
                                <option value="">Seleccione un departamento</option>
                                {departments.map((department) => (
                                    <option key={department.DepartamentoID} value={department.DepartamentoID}>
                                        {department.DepartamentoNombre}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {municipalities.length > 0 && (
                        <div className="col-md-12">
                            <div className="country-select">
                                <label>
                                    Municipio <span className="required">*</span>
                                </label>
                                <select>
                                    <option value="">Seleccione un municipio</option>
                                    {municipalities.map((municipality) => (
                                        <option key={municipality.CodMunicipio} value={municipality.CodMunicipio}>
                                            {municipality.MunicipioNombre}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    )}
                    <div className="col-md-6">
                        <div className="checkout-form-list">
                            <label>Nombre <span className="required">*</span></label>
                            <input type="text" placeholder="Nombre" required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="checkout-form-list">
                            <label>Apellido <span className="required">*</span></label>
                            <input type="text" placeholder="Apellido" required />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="checkout-form-list">
                            <label>Nombre de la empresa</label>
                            <input type="text" placeholder="Nombre de la empresa" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="checkout-form-list">
                            <label>Dirección <span className="required">*</span></label>
                            <input type="text" placeholder="Dirección" required />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="checkout-form-list">
                            <input type="text" placeholder="Apartamento, suite, unidad, etc. (opcional)" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="checkout-form-list">
                            <label>Código postal <span className="required">*</span></label>
                            <input type="text" placeholder="Código postal" required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="checkout-form-list">
                            <label>Correo electrónico <span className="required">*</span></label>
                            <input type="email" placeholder="Correo electrónico" required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="checkout-form-list">
                            <label>Teléfono <span className="required">*</span></label>
                            <input type="text" placeholder="Teléfono" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="order-notes">
                <div className="checkout-form-list">
                    <label>Notas del pedido</label>
                    <textarea id="checkout-mess" placeholder="Notas sobre su pedido, e.g. instrucciones especiales para la entrega."></textarea>
                </div>
            </div>
        </div>
    );
};

export default DifferentAdress;
