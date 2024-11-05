"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import shape1 from '../../../../public/assets/img/shape/shape1.png';
import shape2 from '../../../../public/assets/img/shape/shape2.png';
import shape3 from '../../../../public/assets/img/shape/shape3.png';
import shape4 from '../../../../public/assets/img/shape/shape4.png';
import shape5 from '../../../../public/assets/img/shape/1.png';
import Link from 'next/link';
import products_data from '@/data/products-data';
import { getRating } from "../../../hooks/ratings-hooks";
import { useDispatch } from 'react-redux';
import { cart_product } from '@/redux/slices/cartSlice';
import { wishlist_product } from '@/redux/slices/wishlist-slice';
import ProductModal from '@/components/common/ProductModel';
import { responseType } from '../../../../types/response';
import { Category } from '@/interFace/interFace';  
import { Product } from '@/interFace/interFace';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { useParams } from 'next/navigation';
import { useGetCategory } from '../../../../api/getCategory';
import { useGetProductsCategory } from '../../../../api/getCategoryProducts';

const ProductSection = () => {
    const [activeCategorySlug, setActiveCategorySlug] = useState<string>('aceites-naturales');
    const [modaldata, setModalData] = useState<any>({});
    const dispatch = useDispatch();

    const handleAddToCart = (product: Product) => {
        dispatch(cart_product(product));
    };

    // Obtener los datos de la categoría
    const { loading: categoryLoading, result: categories = [], error: categoryError }: responseType = useGetCategory();

    const { Result: products = [], Loading: productsLoading, Error: productsError } = useGetProductsCategory(activeCategorySlug);

    // Mostrar indicadores de carga o errores
    if (categoryLoading || productsLoading) {
        return <p className="features-text">Cargando...</p>;
    }

    if (categoryError || productsError) {
        return <p className="features-text">Error al cargar los datos...</p>;
    }

    if (!categories) {
        return <p className="features-text">No se encuentran las categorías...</p>;
    }

    if (!products && activeCategorySlug !== "") {
        return <p className="features-text">No se encuentran los productos...</p>;
    }    
    return (
        <>
            <div className="product-area pos-relative pt-110 pb-85 fix">
                <div className="shape spahe1 bounce-animate">
                    <Image src={shape1} alt="shape" />
                </div>
                <div className="shape spahe2 bounce-animate">
                    <Image src={shape2} alt="shape" />
                </div>
                <div className="shape spahe3 bounce-animate">
                    <Image src={shape3} alt="shape" />
                </div>
                <div className="shape spahe4 bounce-animate">
                    <Image src={shape4} alt="shape" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                            <div className="section-title text-center section-circle mb-70">
                                <div className="section-img">
                                    <Image src={shape5} alt="shape" />
                                </div>
                                <h1>Nuestros productos</h1>
                                <p>
                                    En esta sección encontrarás los productos de nuestra tienda por categorías.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <ul className="nav product-tab justify-content-center mb-75">
                                {
                                    categories.map((item: Category) => (
                                        <li 
                                            key={item.id} 
                                            onClick={() => setActiveCategorySlug(item.slug)}
                                            className={activeCategorySlug === item.slug ? 'active nav-item' : ''}
                                        >
                                            <div className="product-tab-content text-center">
                                                <div className="product-tab-img">
                                                    {item.image && (
                                                        <Image
                                                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.image.url}`}
                                                            alt={item.nameCategory}
                                                            width={50}
                                                            height={50}
                                                            className="category-image"
                                                        />
                                                    )}
                                                </div>
                                                <h4>{item.nameCategory}</h4>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className="row">
                                {/* Mostrar productos por categoría seleccionada */}
                                {activeCategorySlug === "" ?
                                    <>
                                        {products_data.slice(0, 4).map((item) => (
                                            <div className="col-xl-3 col-lg-3 col-md-6" key={item.id}>
                                                <div className="product-wrapper text-center mb-30">
                                                    <div className="product-img">
                                                        <Link href="/shop-details">
                                                            <Image src={item.images[0].url} alt="product image" width={200} height={200} />
                                                        </Link>

                                                        <div className="product-action">
                                                            <button onClick={() => handleAddToCart(item)}><i className="fas fa-shopping-cart"></i></button>
                                                            <button onClick={() => setModalData(item)}>
                                                                <span data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                    <i className="fas fa-eye"></i>
                                                                </span>
                                                            </button>
                                                            <button onClick={() => dispatch(wishlist_product(item))}><i className="fas fa-heart"></i></button>
                                                        </div>
                                                    </div>
                                                    <div className="product-text">
                                                        <h4><Link href={`/shop-details/${item.id}`}>{item.productName}</Link></h4>
                                                        {/* <div className="pro-rating">{getRating(item.rating)}</div> */}
                                                        <div className="pro-price"><span>${item.price}</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                    :
                                    <>
                                        {products && products.length > 0 ? (
                                        <>
                                            {products.slice(0, 4).map((item: Product) => (
                                                <div className="col-xl-3 col-lg-3 col-md-6" key={item.id}>
                                                    <div className="product-wrapper text-center mb-30">
                                                        <div className="product-img">
                                                            <Link href="/shop-details">
                                                                {item.images && item.images && item.images.length > 0 && (
                                                                    <Image
                                                                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.images[0].url}`}
                                                                        alt={item.productName}
                                                                        width={100}
                                                                        height={200}
                                                                        className="product-image"
                                                                    />
                                                                )}
                                                            </Link>
                                                            <div className="product-action">
                                                                <button onClick={() => handleAddToCart(item)}><i className="fas fa-shopping-cart"></i></button>
                                                                <button onClick={() => setModalData(item)}>
                                                                    <span data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                        <i className="fas fa-eye"></i>
                                                                    </span>
                                                                </button>
                                                                <button onClick={() => dispatch(wishlist_product(item))}><i className="fas fa-heart"></i></button>
                                                            </div>
                                                        </div>
                                                        <div className="product-text">
                                                            <h4><Link href={`/shop-details/${item.id}`}>{item.productName}</Link></h4>
                                                            <div className="pro-price"><span>${item.price}</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                            <div className="features-text">
                                            <Link href="/shop">
                                                Leer más <i className="dripicons-arrow-thin-right"></i>
                                            </Link>
                                        </div>
                                        </>
                                    ) : (
                                        <p className="features-text">No hay productos en esta categoría.</p>
                                    )}
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProductModal modaldata={modaldata} />
        </>
    );
};

export default ProductSection;
