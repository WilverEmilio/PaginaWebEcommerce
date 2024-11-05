"use client"
import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { login_schema } from "@/utils/validation-schema";
import UserThree from "@/svg/user-3";
import ErrorMsg from "./error-msg";
import Lock from "@/svg/lock";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [isCheckbox, setIsCheckbox] = useState(false)
  const handleChackbox = () => {
    setIsCheckbox(!isCheckbox)
  }

  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: login_schema,
      onSubmit: (values, { resetForm }) => {
        toast.success("Login Successful")
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
              placeholder="Enter your email"
              id="email"
            />
            <span>
              <UserThree />
            </span>
          </div>
          {touched.email && <ErrorMsg error={errors.email} />}
        </div>

        <div className="login__input-item">
          <div className="login__input-item-inner p-relative">
            <div className="login__input">
              <input
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type={showPass ? "text" : "password"}
                placeholder="Password"
                id="password"
              />
              <span>
                <Lock />
              </span>
            </div>
          </div>
          {touched.password && <ErrorMsg error={errors.password} />}
        </div>
      </div>

      <div className="login__option mb-25 d-sm-flex justify-content-between">
        <div className="login__remember">
          <input type="checkbox"
            checked={isCheckbox}
            onChange={handleChackbox}
            id="tp-remember" />
          <label htmlFor="tp-remember">Remember me</label>
        </div>
        <div className="login__forgot">
          <Link href="/forgot-password">forgot password?</Link>
        </div>
      </div>
      <div className="login__btn text-center">
        <button disabled={!isCheckbox} type="submit" className={isCheckbox == false ? "disabled-btn" : "btn"}>
          SignIn
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
