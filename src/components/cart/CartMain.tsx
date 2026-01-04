"use client";
import React from "react";
import Link from "next/link";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import { useSelector, useDispatch } from "react-redux";
import { cart_product, clear_cart, decrease_quantity, remove_cart_product } from "@/redux/slices/cartSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { Product } from "@/interFace/interFace";

const CartMain = () => {
    const dispatch = useDispatch();

    const handleRemoveCart = (product: Product) => {
        dispatch(remove_cart_product(product));
    };

    const cartProducts = useSelector((state: RootState) => state.cart.cartProducts);

    // ✅ VALIDACIÓN: Asegura que cartProducts sea un array
    const safeCartProducts = Array.isArray(cartProducts) ? cartProducts : [];

    const totalPrice = safeCartProducts.reduce((total, product) => {
        if (typeof product.price === 'number' && product.price !== 0) {
            return total + (product.price ?? 0) * (product.quantity ?? 0);
        }
        return total;
    }, 0);

    return (
        <main>
            <Breadcrumb title="Carrito de compras" subTitle="Carrito de compras" />

            {safeCartProducts.length === 0 ? (
                <div className="container">
                    <div className="empty-text pt-100 pb-60 text-center">
                        <h3>Tu carrito está vacío</h3>
                    </div>
                </div>
            ) : (
                <section className="cart-area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="table-content table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">Imágenes</th>
                                                <th className="cart-product-name">Producto</th>
                                                <th className="product-price">Precio Unitario</th>
                                                <th className="product-quantity">Cantidad</th>
                                                <th className="product-subtotal">Total</th>
                                                <th className="product-remove">Eliminar</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {safeCartProducts.map((item) => {
                                                const itemTotal = (item.price ?? 0) * (item.quantity ?? 0);
                                                return (
                                                    <tr key={item.id}>
                                                        <td className="product-thumbnail">
                                                            <Link href={`/shop-details/${item.id}`}>
                                                                {/* ✅ VALIDACIÓN CRÍTICA: Verifica images */}
                                                                {item.images && Array.isArray(item.images) && item.images.length > 0 ? (
                                                                    <Image
                                                                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.images[0].url}`}
                                                                        alt={item.productName || 'Producto'}
                                                                        width={150}
                                                                        height={150}
                                                                        className="product-image"
                                                                    />
                                                                ) : (
                                                                    <div className="no-image" style={{ width: 150, height: 150, background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                        Sin imagen
                                                                    </div>
                                                                )}
                                                            </Link>
                                                        </td>
                                                        <td className="product-name">{item.productName}</td>
                                                        <td className="product-price">
                                                            <span className="amount">
                                                                {item.price === 0 ? "GRATIS" : `$${item.price.toFixed(2)}`}
                                                            </span>
                                                        </td>
                                                        <td className="product-quantity text-center">
                                                            <div className="product-quantity mt-10 mb-10">
                                                                <form onSubmit={(e) => e.preventDefault()} action="#">
                                                                    <button
                                                                        onClick={() => item.quantity > 1 && dispatch(decrease_quantity(item))}
                                                                        type="button"
                                                                        className="cart-minus"
                                                                        disabled={item.quantity <= 1}
                                                                    >
                                                                        <i className="far fa-minus"></i>
                                                                    </button>
                                                                    <input
                                                                        className="cart-input"
                                                                        value={item.quantity ?? 0}
                                                                        readOnly
                                                                    />
                                                                    <button
                                                                        onClick={() => dispatch(cart_product(item))}
                                                                        type="button"
                                                                        className="cart-plus"
                                                                    >
                                                                        <i className="far fa-plus"></i>
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </td>
                                                        <td className="product-subtotal">
                                                            <span className="amount">${itemTotal.toFixed(2)}</span>
                                                        </td>
                                                        <td className="product-remove">
                                                            <button 
                                                                className="remove-btn" 
                                                                onClick={() => handleRemoveCart(item)}
                                                            >
                                                                <i className="fa fa-times"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="coupon-all">
                                            <div className="coupon d-flex align-items-center">
                                                <input
                                                    id="coupon_code"
                                                    className="input-text"
                                                    name="coupon_code"
                                                    placeholder="Código de cupón"
                                                    type="text"
                                                />
                                                <button className="fill-btn" name="apply_coupon" type="submit">
                                                    Aplicar cupón
                                                </button>
                                            </div>
                                            <div className="coupon2">
                                                <button
                                                    onClick={() => dispatch(clear_cart())}
                                                    className="fill-btn"
                                                    name="update_cart"
                                                    type="submit"
                                                >
                                                    Vaciar Carrito
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5 ml-auto">
                                        <div className="cart-page-total">
                                            <h2>Total del carrito</h2>
                                            <ul className="mb-20">
                                                <li>
                                                    Subtotal <span>${totalPrice.toFixed(2)}</span>
                                                </li>
                                                <li>
                                                    Total <span>${totalPrice.toFixed(2)}</span>
                                                </li>
                                            </ul>
                                            <Link href="/checkout" className="fill-btn">
                                                Proceder al pago
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
};

export default CartMain;