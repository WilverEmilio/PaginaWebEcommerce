"use client";
import React, { useState, useEffect } from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import DifferentAdress from "./DifferentAdress";
import OrderArea from "./OrderArea";
import CouponArea from "./CouponArea";

const CheckoutMain = () => {
    const [isActiveB, setActiveB] = useState(true);

    // Interfaces for data types
    interface Department {
        DepartamentoID: number;
        DepartamentoNombre: string;
    }

    interface Municipality {
        CodMunicipio: number;
        MunicipioNombre: string;
    }

    const [departments, setDepartments] = useState<Department[]>([]);
    const [municipalities, setMunicipalities] = useState<Municipality[]>([]);
    const [selectedDepartment, setSelectedDepartment] = useState<number | null>(null);

    // Function to toggle account creation section
    const handleToggleB = () => {
        setActiveB(!isActiveB);
    };

    // Fetch departments from the API
    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await fetch("https://elephant-project.com/SicopApiMonitoreo/api/DashboardMapa/GetInformacionDepartamentos/2022");
                const data = await response.json();
                setDepartments(data);
            } catch (error) {
                console.error("Error fetching departments:", error);
            }
        };

        fetchDepartments();
    }, []);

    // Fetch municipalities when a department is selected
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
                    console.error("Error fetching municipalities:", error);
                }
            }
        };

        fetchMunicipalities();
    }, [selectedDepartment]);

    // Handle department selection
    const handleDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const departmentID = parseInt(e.target.value);
        setSelectedDepartment(departmentID);
    };

    return (
        <main>
            <Breadcrumb title="Verificar" subTitle="Verificar" />
            <CouponArea />
            <section className="checkout-area pb-70">
                <div className="container">
                    <form action="#">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="checkbox-form">
                                    <h3>Detalles</h3>
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
                                        {/* Other form fields remain the same */}
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>
                                                    Nombre <span className="required">*</span>
                                                </label>
                                                <input type="text" placeholder="Nombre" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>
                                                    Apellido <span className="required">*</span>
                                                </label>
                                                <input type="text" placeholder="Apellido" required />
                                            </div>
                                        </div>
                                        {/* <div className="col-md-12">
                                            <div className="checkout-form-list">
                                                <label>Company Name</label>
                                                <input type="text" placeholder="Company name" />
                                            </div>
                                        </div> */}
                                        <div className="col-md-12">
                                            <div className="checkout-form-list">
                                                <label>
                                                    Dirección <span className="required">*</span>
                                                </label>
                                                <input type="text" placeholder="Dirección" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list">
                                                <input
                                                    type="text"
                                                    placeholder="Apartamento, suite, unidad, etc. (opcional)"
                                                />
                                            </div>
                                        </div>
                                        {/* <div className="col-md-12">
                                            <div className="checkout-form-list">
                                                <label>
                                                    Town / City <span className="required">*</span>
                                                </label>
                                                <input type="text" placeholder="Town / City" required />
                                            </div>
                                        </div> */}
                                        {/* <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>
                                                    State / County <span className="required">*</span>
                                                </label>
                                                <input type="text" placeholder="State / County" required />
                                            </div>
                                        </div> */}
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>
                                                    Código postal / ZIP <span className="required">*</span>
                                                </label>
                                                <input type="text" placeholder="Código postal / ZIP" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>
                                                Dirección de correo electrónico <span className="required">*</span>
                                                </label>
                                                <input type="email" placeholder="Correo electronico" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>
                                                Teléfono <span className="required">*</span>
                                                </label>
                                                <input type="text" placeholder="Teléfono" />
                                            </div>
                                        </div>
                                        {/* <div className="col-md-12">
                                            <div className="checkout-form-list create-acc">
                                                <label onClick={handleToggleB}>
                                                    ¿Crear una cuenta?
                                                </label>
                                            </div>
                                            <div
                                                id="cbox_info"
                                                className={`checkout-form-list create-account ${isActiveB ? "danger" : "d-block"
                                                    }`}
                                            >
                                                <p>
                                                Cree una cuenta ingresando la información a continuación.
                                                Si es un cliente habitual, inicie sesión en la
                                                parte superior de la página.
                                                </p>
                                                <label>
                                                    Contraseña de la cuenta <span className="required">*</span>
                                                </label>
                                                <input type="password" placeholder="password" required />
                                            </div>
                                        </div> */}
                                    </div>
                                    <DifferentAdress />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <OrderArea />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default CheckoutMain;
