'use client';
import LoginForm from '@/form/login-form';
import Link from 'next/link';
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';

const SignInMainArea = () => {
    return (
        <>
            <Breadcrumb title='Sign In' subTitle='Sign In' />
            <section className="login__area pt-110 pb-110">
                <div className="container">
                    <div className="login__inner p-relative z-index-1">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8 col-md-10">
                                <div className="login__wrapper">
                                    <div className="login__top mb-30 text-center">
                                        <h3 className="login__title">Login</h3>
                                        <p>Enter your credentials to acces your account.</p>
                                    </div>
                                    <div className="login__form">
                                        <LoginForm />
                                        <div className="login__register-now">
                                            <p>
                                                Don’t have an account?
                                                <Link href="/signUp">{" "}Sign Up Now</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignInMainArea;