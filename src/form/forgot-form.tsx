"use client"
import { useFormik } from "formik";
import React from "react";
import ErrorMsg from "./error-msg";
import { toast } from "react-toastify";
import { forgotten_schema } from "@/utils/validation-schema";
import Email from "@/svg/email";

const ForgotForm = () => {
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        email: '',
      },
      validationSchema: forgotten_schema,
      onSubmit: (values, { resetForm }) => {
        toast.success("Forgot Successfully")
        resetForm();
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <div className="login__input-wrapper">
        <div className="login__input-item">
          <div className="login__input">
            <input
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              placeholder="Your Email"
              id="email"
              required
            />
            <span>
              <Email />
            </span>
          </div>
          {touched.email && <ErrorMsg error={errors.email} />}
        </div>
      </div>
      <div className="login__btn text-center">
        <button type="submit" className="btn">
          Send request
        </button>
      </div>
    </form>
  );
};

export default ForgotForm;
