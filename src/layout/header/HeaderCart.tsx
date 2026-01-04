"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
    cart_product,
    decrease_quantity,
    remove_cart_product,
} from "@/redux/slices/cartSlice";
import { Product } from "@/interFace/interFace";

interface HeaderCartProps {
    setCartOpen: (isOpen: boolean) => void;
    cartOpen: boolean;
}

const HeaderCart: React.FC<HeaderCartProps> = ({ setCartOpen, cartOpen }) => {
    const dispatch = useDispatch();
    
    const handleRemoveCart = (product: Product) => {
        dispatch(remove_cart_product(product));
    };

    const cartProducts = useSelector(
        (state: RootState) => state.cart.cartProducts
    );

    // ✅ VALIDACIÓN: Asegura que cartProducts sea un array
    const safeCartProducts = Array.isArray(cartProducts) ? cartProducts : [];

    const totalPrice = safeCartProducts.reduce(
        (total, product) => total + (product.price ?? 0) * (product.quantity ?? 0),
        0
    );

    return (
        <div className="cartmini__area">
            <div
                className={cartOpen ? "cartmini__wrapper opened" : "cartmini__wrapper"}
            >
                <div className="cartmini__title mb-30">
                    <h4>Carrito de compras</h4>
                </div>
                <div className="cartmini__close">
                    <button
                        type="button"
                        className="cartmini__close-btn"
                        onClick={() => setCartOpen(false)}
                    >
                        <i className="fal fa-times"></i>
                    </button>
                </div>
                <div className="cartmini__widget">
                    <div className="cartmini__inner">
                        {safeCartProducts.length === 0 && (
                            <h5 className="zoma-cart">El carrito está vacío</h5>
                        )}
                        {safeCartProducts.length >= 1 && (
                            <>
                                <ul>
                                    {safeCartProducts.map((item) => (
                                        <li key={item.id}>
                                            <div className="cartmini__thumb">
                                                <Link href="/">
                                                    {/* ✅ VALIDACIÓN CRÍTICA: Verifica images Y length */}
                                                    {item.images && Array.isArray(item.images) && item.images.length > 0 && (
                                                        <Image
                                                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.images[0].url}`}
                                                            alt={item.productName || 'Producto'}
                                                            width={150}
                                                            height={150}
                                                            className="product-image"
                                                        />
                                                    )}
                                                </Link>
                                            </div>
                                            <div className="cartmini__content">
                                                <h5>{item.productName}</h5>
                                                <div className="product-quantity mt-10 mb-10">
                                                    <button
                                                        onClick={() => dispatch(decrease_quantity(item))}
                                                        className="cart-minus-decrease"
                                                    >
                                                        <i className="far fa-minus"></i>
                                                    </button>
                                                    <p className="cart-input-quantity">{item.quantity ?? 0}</p>
                                                    <button
                                                        onClick={() => dispatch(cart_product(item))}
                                                        className="cart-plus-increase"
                                                    >
                                                        <i className="far fa-plus"></i>
                                                    </button>
                                                </div>
                                                <div className="product__sm-price-wrapper">
                                                    <span className="product__sm-price">
                                                        {item.price === 0 ? "FREE" : `$${item.price.toFixed(2)}`}
                                                    </span>
                                                </div>
                                            </div>
                                            <button 
                                                onClick={() => handleRemoveCart(item)} 
                                                className="cartmini__del"
                                            >
                                                <i className="fal fa-times"></i>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                                <div className="cartmini__checkout">
                                    <div className="cartmini__checkout-title">
                                        <h4>Subtotal:</h4>
                                        <span>${totalPrice.toFixed(2)}</span>
                                    </div>
                                </div>
                                <div className="cartmini__viewcart">
                                    <Link className="zoma-sec-btn" href="/cart/">
                                        Ver carrito
                                    </Link>
                                    <Link className="zoma-sec-btn" href="/checkout/">
                                        Checkout
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderCart;