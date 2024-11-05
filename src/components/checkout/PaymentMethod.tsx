import React from "react";

const PaymentMethod = () => {
    return (
        <>
            <div className="payment-method">
                <div className="accordion" id="checkoutAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="checkoutOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#bankOne" aria-expanded="true"
                                aria-controls="bankOne">
                                Payment Method
                            </button>
                        </h2>
                        <div id="bankOne" className="accordion-collapse collapse show"
                            aria-labelledby="checkoutOne" data-bs-parent="#checkoutAccordion">
                            <div className="accordion-body">
                                <p>You need to pay it with your prefable methods</p>
                                <div className="payment-option mb-10">
                                    <label htmlFor="pay_later_payment">
                                        <input type="radio" id="pay_later_payment" name="payment_method" /> Pay later
                                    </label>
                                </div>
                                <div className="payment-option mb-10">
                                    <label htmlFor="mollie_payment">
                                        <input type="radio" id="mollie_payment" name="payment_method" /> Mobile Payment
                                    </label>
                                </div>
                                <div className="payment-option mb-10">
                                    <label htmlFor="paypal_payment">
                                        <input type="radio" id="paypal_payment" name="payment_method" /> Pay with Paypal
                                    </label>
                                </div>
                                <div className="payment-option mb-10">
                                    <label htmlFor="stripe_payment">
                                        <input type="radio" id="stripe_payment" name="payment_method" /> Pay with Visa/Mastercard
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-button-payment mt-20">
                    <button type="submit" className="btn">Realizar pedido</button>
                </div>
            </div>
        </>
    );
};

export default PaymentMethod;
