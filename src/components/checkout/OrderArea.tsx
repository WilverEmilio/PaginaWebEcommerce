'use client';

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "../../../api/payment";

const OrderArea = () => {
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');
    const [shipingCast, setShipingCast] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    
    const cartProducts = useSelector(
        (state: RootState) => state.cart.cartProducts
    );

    const buyStripe = async () => {
        setIsLoading(true);
        setError('');
        
        try {
            const stripe = await stripePromise;
            
            if (!cartProducts.length) {
                throw new Error('El carrito está vacío');
            }

            // Verificar que los productos tienen todos los campos necesarios
            const validatedProducts = cartProducts.map(product => ({
                id: product.id,
                productName: product.productName || product.productName,
                price: product.price,
                quantity: product.quantity || 1
            }));

            console.log('Sending products:', validatedProducts); // Debug log

            const res = await makePaymentRequest.post(
                "/api/orders",
                {
                    cartProducts: validatedProducts,
                    shipingCast,
                }
            );

            if (!res.data?.stripeSession?.id) {
                throw new Error('No se recibió una sesión válida de Stripe');
            }

            const result = await stripe?.redirectToCheckout({
                sessionId: res.data.stripeSession.id
            });

            if (result?.error) {
                throw new Error(result.error.message);
            }
        } catch (error: any) {
            console.error('Error en el proceso de pago:', error);
            // Mostrar mensaje de error más detallado
            setError(
                error.response?.data?.error || 
                error.response?.data?.details ||
                error.message || 
                'Hubo un error al procesar el pago'
            );
        } finally {
            setIsLoading(false);
        }
    };

    const totalPrice = cartProducts.reduce((total, product) => {
        if (typeof product.price === 'number' && product.price !== 0) {
            return total + (product.price ?? 0) * (product.quantity ?? 0);
        }
        return total;
    }, 0);

    return (
        <div className="your-order mb-30">
            <h3>La orden</h3>
            <div className="your-order-table table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th className="product-name">Producto</th>
                            <th className="product-total">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartProducts.length ? (
                            cartProducts.map((item) => (
                                <tr key={item.id} className="cart_item">
                                    <td className="product-name">
                                        {item.productName} <strong className="product-quantity"> × {item.quantity}</strong>
                                    </td>
                                    <td className="product-total">
                                        <span className="amount">{item.price ? `Q${item.price}.00` : '$0'}</span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={2} className="text-center">
                                    No hay productos en el carrito
                                </td>
                            </tr>
                        )}
                    </tbody>
                    <tfoot>
                        <tr className="cart-subtotal">
                            <th>Sub-Total</th>
                            <td className="product-total">
                                <span className="amount">Q{totalPrice.toFixed(2)}</span>
                            </td>
                        </tr>
                        <tr className="shipping">
                            <th>Envío</th>
                            <td className="product-total">
                                <ul>
                                    <li>
                                        <input 
                                            onClick={() => setShipingCast(7)} 
                                            type="radio" 
                                            id="Amount" 
                                            name="Shipping"
                                        />
                                        <label htmlFor="Amount">
                                            Tarifa plana: <span className="amount">Q7.00</span>
                                        </label>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr className="order-total">
                            <th>Orden Total</th>
                            <td className="product-total">
                                <strong>
                                    <span className="amount">Q{(totalPrice + shipingCast).toFixed(2)}</span>
                                </strong>
                            </td>
                        </tr>
                    </tfoot>
                </table>

                {error && (
                    <div className="text-red-500 mt-4 p-3 bg-red-100 rounded">
                        {error}
                    </div>
                )}

                <div className="order-button-payment mt-20">
                    <button 
                        type="submit" 
                        className={`btn ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={buyStripe}
                        disabled={isLoading || !cartProducts.length}
                    >
                        {isLoading ? 'Procesando...' : 'Realizar pedido'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderArea;