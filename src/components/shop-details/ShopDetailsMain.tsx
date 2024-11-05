"use client"
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import Link from 'next/link';
import Image from 'next/image';
import { cart_product, decrease_quantity } from '@/redux/slices/cartSlice';
import { idType } from '@/interFace/interFace';
import { useDispatch, useSelector} from "react-redux";
import { RootState } from '@/redux/store';
import { useGetProducts } from '../../../api/getProduct';
import { Product } from '@/interFace/interFace';


const ShopDetailsMain = ({ id }: idType) => {
    const dispatch = useDispatch();
    const { loading: productsLoading, result: products = [] } = useGetProducts(id);
    const cartProducts = useSelector((state: RootState) => state.cart.cartProducts); 

    // Verifica el estado de carga
    if (productsLoading) {
        return <div>Loading...</div>; // Mensaje de carga
    }

    
    if (!products || products.length === 0) {
        return <div>No products available.</div>; 
    }

    
    const productId = Number(id); 
    const product = products.find((item: Product) => item.id === productId); 


    if (!product) {
        return <div>Product not found.</div>;
    }

    // Busca el producto en el carrito
    const myData = cartProducts.find((item: Product) => item.id === (product as Product).id); 

    const handleAddToCart = () => {
        dispatch(cart_product(product)); 
    };

    const handleRemoveCart = () => {
        if (myData) {
            dispatch(decrease_quantity(myData));
        }
    };

    return (
        <>
            <Breadcrumb title='Detalle de producto' subTitle='Detalle de producto' />
            {products && products.length > 0 ? (
                products.map((item: Product) => (
                    <section className="shop-banner-area pt-120 pb-80" key={item.id}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div>
                                        <div className="product-details-img mb-20">
                                            <div className="tab-content" id="productDetailsTab">
                                                {item.images?.map((img, index) => (
                                                    <div key={index} className={`tab-pane fade ${index === 0 ? 'active show' : ''}`} id={`pro-${index + 1}`} role="tabpanel" aria-labelledby={`pro-${index + 1}-tab`}>
                                                        <div className="product-large-img">
                                                            <Image
                                                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.images[0].url}`}
                                                                alt={item.productName}
                                                                width={270}
                                                                height={450}
                                                                className="product-image"
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
    
                                        <ul className="shop-thumb-tab mb-30" id="myTab" role="tablist">
                                            {item.images?.map((img, index) => (
                                                <li key={index} className="nav-item" role="presentation">
                                                    <button className={`nav-link ${index === 0 ? 'active show' : ''}`} id={`pro-${index + 1}-tab`} data-bs-toggle="tab"
                                                        data-bs-target={`#pro-${index + 1}`} type="button" role="tab" aria-controls={`pro-${index + 1}`}
                                                        aria-selected={index === 0}>
                                                        <Image
                                                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${img.url}`}
                                                            alt={item.productName}
                                                            width={280}
                                                            height={150}
                                                            className="product-image"
                                                        />
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
    
                                <div className="col-xl-6 col-lg-6">
                                    <div className="product-details mb-30">
                                        <div className="product-details-title">
                                            <h1>{item.productName}</h1>
                                            <div className="details-price mb-20">
                                                <span>{item.price === 0 ? "FREE" : `$${item.price}`}</span>
                                            </div>
                                            <div className="pro-rating mb-20">
                                                <i className='fas fa-star'></i>
                                                <i className='fas fa-star'></i>
                                                <i className='fas fa-star'></i>
                                                <i className='fas fa-star'></i>
                                                <i className='fas fa-star'></i>
                                            </div>
                                        </div>
                                        <p>{item.description}</p>
                                        <div className='product-social mb-30'>
                                            <Link href="https://www.facebook.com/"> <i className='fab fa-facebook-f'> </i></Link>
                                            <Link href="https://twitter.com/"> <i className='fab fa-twitter'> </i></Link>
                                            <Link href="https://www.linkedin.com/"> <i className='fab fa-linkedin'> </i></Link>
                                            <Link href="https://www.youtube.com/"> <i className='fab fa-youtube'> </i></Link>
                                        </div>
                                        <div className="product-details-action">
                                            <div>
                                                <button className="cart-minus"
                                                    onClick={handleRemoveCart}
                                                    disabled={!myData}
                                                >
                                                    <i className="far fa-minus"></i>
                                                </button>
                                                <input className="cart-input" type="text" readOnly
                                                    value={myData?.quantity || 0} />
                                                <button className="cart-plus" onClick={handleAddToCart}>
                                                    <i className="far fa-plus"></i>
                                                </button>
                                                <Link href="/cart" className="zomata-fill-btn">
                                                    View Cart
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))
            ) : (
                <div>No products available.</div> // Mensaje si no hay productos
            )}
        </>
    );
}

export default ShopDetailsMain;