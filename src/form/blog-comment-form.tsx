"use client"
import { blogSchema } from '@/utils/validation-schema';
import { useFormik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import ErrorMsgTwo from './error-msg-two';

const BlogCommentForm = () => {
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
        useFormik({
            initialValues: {
                name: "",
                email: "",
                website: "",
                comment: "",
            },
            validationSchema: blogSchema,
            onSubmit: (values, { resetForm }) => {
                toast.success("Comment Successful")
                resetForm();
            },
        });

    return (
        <div className="post-comments-form">
            <div className="post-comments-title">
                <h2>Post Comments</h2>
            </div>
            <form onSubmit={handleSubmit} className="conatct-post-form">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="contact-icon contacts-message">
                            <textarea
                                name="comment"
                                value={values.comment}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="comment"
                                placeholder="Your Comments...."
                            ></textarea>
                            {touched.comment && <ErrorMsgTwo error={errors.comment} />}
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="contact-icon contacts-name">
                            <input
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                placeholder="Your Name...."
                                id="name"
                                required
                            />
                            {touched.name && <ErrorMsgTwo error={errors.name} />}
                        </div>

                    </div>
                    <div className="col-xl-12">
                        <div className="contact-icon contacts-email">
                            <input
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="email"
                                placeholder="Your email...."
                                id="email"
                                required
                            />
                        </div>
                        {touched.email && <ErrorMsgTwo error={errors.email} />}
                    </div>
                    <div className="col-xl-12">
                        <div className="contact-icon contacts-website">
                            <input
                                name="website"
                                value={values.website}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                placeholder="Your Website...."
                                id="website"
                            />
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <button className="btn" type="submit"> <span className="btn-text">Post comment <i className="far fa-long-arrow-right"></i></span></button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BlogCommentForm;