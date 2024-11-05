import { contact_schema } from '@/utils/validation-schema';
import { useFormik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import ErrorMsgTwo from './error-msg-two';

const ReviewForm = () => {
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
        useFormik({
            initialValues: {
                name: "",
                email: "",
                massage: "",
            },
            validationSchema: contact_schema,
            onSubmit: (values, { resetForm }) => {
                toast.success("Review Successful")
                resetForm();
            },
        });
    return (
        <form onSubmit={handleSubmit} className="review-form">
            <div className="row">
                <div className="col-xl-12">
                    <label htmlFor="message">YOUR REVIEW</label>
                    <textarea cols={30} rows={10}
                        name="massage"
                        value={values.massage}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="massage"
                        placeholder="Write your comments :"
                    ></textarea>
                    {touched.massage && <ErrorMsgTwo error={errors.massage} />}
                </div>
                <div className="col-xl-6">
                    <label htmlFor="r-name">Name</label>
                    <input
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        id="name"
                        required
                    />
                    {touched.name && <ErrorMsgTwo error={errors.name} />}
                </div>
                <div className="col-xl-6">
                    <label htmlFor="r-email">Email</label>
                    <input
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="email"
                        id="email"
                        required
                    />
                    {touched.email && <ErrorMsgTwo error={errors.email} />}
                </div>
                <div className="col-xl-12">
                    <button className="btn brand-btn">Add your Review
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ReviewForm;