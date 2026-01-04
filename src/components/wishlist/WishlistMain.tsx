"use client";
import React from "react";
import Link from "next/link";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { RootState } from "@/redux/store";
import { remove_wishlist_product } from "@/redux/slices/wishlist-slice";
import { cart_product } from "@/redux/slices/cartSlice";

const WishlistMain = () => {
    const dispatch = useDispatch();

    const wishlistProducts = useSelector(
        (state: RootState) => state.wist.cartProducts
    );

    // Verificar el contenido de wishlistProducts
    console.log(wishlistProducts);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    };

    // Calcular el total de la wishlist
    const total = wishlistProducts.reduce((acc, item) => {
        return acc + (item.price * (item.quantity || 1));
    }, 0);

    return (
        <main>
            <Breadcrumb title="Lista de deseos" subTitle="Lista de deseos" />
            <div className="cart-area pt-100 pb-100">
                <div className="container">
                    {wishlistProducts?.length === 0 && (
                        <div className="text-center">
                            <h3>Your wishlist is empty</h3>
                        </div>
                    )}
                    {wishlistProducts?.length > 0 && (
                        <div className="row">
                            <div className="col-12">
                                <form onSubmit={handleSubmit} action="#">
                                    <div className="table-content table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className="product-thumbnail">Images</th>
                                                    <th className="cart-product-name">Product</th>
                                                    <th className="product-price">Unit Price</th>
                                                    <th className="product-quantity">Add to cart</th>
                                                    <th className="product-subtotal">Total</th>
                                                    <th className="product-remove">Remove</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Array.isArray(wishlistProducts) && wishlistProducts.map((item: any, index: number) => {
                                                    // Calcular el subtotal de cada item
                                                    const subtotal = item.price * (item.quantity || 1);

                                                    return (
                                                        <tr key={index}>
                                                            <td className="product-thumbnail">
                                                                <Link href="/course-details">
                                                                    {item?.images && item?.images.length > 0 && (
                                                                        <Image
                                                                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.images[0].url}`}
                                                                            alt={item.productName}
                                                                            width={100}
                                                                            height={100}
                                                                            className="product-image"
                                                                        />
                                                                    )}
                                                                </Link>
                                                            </td>
                                                            <td className="product-name">
                                                                <Link href="/course-details">
                                                                    {item?.productName || item?.title}
                                                                </Link>
                                                            </td>
                                                            <td className="product-price">
                                                                <span className="amount">{item?.price === 0 ? "FREE" : `$${item?.price.toFixed(2)}`}</span>
                                                            </td>
                                                            <td className="product-quantity">
                                                                <button
                                                                    onClick={() => dispatch(cart_product(item))}
                                                                    className="fill-btn"
                                                                >
                                                                    Add to Cart
                                                                </button>
                                                            </td>
                                                            <td className="product-subtotal">
                                                                <span className="amount">
                                                                    ${subtotal.toFixed(2)}
                                                                </span>
                                                            </td>
                                                            <td className="product-remove">
                                                                <button className="remove-btn"
                                                                    onClick={() =>
                                                                        dispatch(remove_wishlist_product(item))
                                                                    }
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
                                    <div className="total-area">
                                        <h3>Total: ${total.toFixed(2)}</h3> {/* Mostrar el total aquí */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default WishlistMain;
