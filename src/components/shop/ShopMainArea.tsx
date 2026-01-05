"use client"
import React, { useState } from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import PaginationData from '../common/pagination/pagination-data'
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { cart_product } from '@/redux/slices/cartSlice';
import { Product, productsType } from '@/interFace/interFace';
import { wishlist_product } from '@/redux/slices/wishlist-slice';
import ProductModal from '../common/ProductModel';
import { useGetProductsAll } from '../../../api/getProductAll';

interface categoryShopType {
    id: number;
    category: string
}

const ShopMainArea = () => {

    const [modaldata, setModalData] = useState<productsType | null>(null);
    const [activeCategory, setActiveCategory] = useState<string>("Default By");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12; 
    
    const dispatch = useDispatch();
    const handleAddToCart = (product: Product) => {dispatch(cart_product(product));};

    const {result, loading, error} = useGetProductsAll();
    
    // ✅ VALIDACIÓN DEFENSIVA COMPLETA
    const safeResult = Array.isArray(result) ? result : [];
    
    const filterData = activeCategory === "Default By" 
        ? safeResult 
        : safeResult.filter((item: Product) => 
            item?.category?.nameCategory === activeCategory
          );

    // ✅ Validación adicional
    const safeFilterData = Array.isArray(filterData) ? filterData : [];

    // Calcular los productos que se mostrarán en la página actual
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = safeFilterData.slice(indexOfFirstProduct, indexOfLastProduct);

    // Funciones para manejar la paginación
    const totalPages = Math.ceil(safeFilterData.length / itemsPerPage);

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    // ✅ MANEJO DE ESTADOS
    if (loading) {
        return (
            <>
                <Breadcrumb title='Página de productos' subTitle='Página de productos' />
                <div className="container py-5">
                    <p className="text-center">Cargando productos...</p>
                </div>
            </>
        );
    }

    if (error) {
        return (
            <>
                <Breadcrumb title='Página de productos' subTitle='Página de productos' />
                <div className="container py-5">
                    <p className='text-center'>Error: {error}</p>
                </div>
            </>
        );
    }

    // Apartado para poner el orden a los productos
    const categoryShopData: categoryShopType[] = []
    
    const handleSelectChange = (e: any) => {
        const selectedCategory = e.target.value;
        setActiveCategory(selectedCategory);
        setCurrentPage(1);
    };

    return (
        <>
            <Breadcrumb title='Página de productos' subTitle='Página de productos' />
            <div className="product-area pos-relative pt-110 pb-120 fix">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5 col-md-6 col-sm-7">
                            <div className="product-showing">
                                <p>Mostrando {indexOfFirstProduct + 1}–{Math.min(indexOfLastProduct, safeFilterData.length)} de {safeFilterData.length} resultados</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-5">
                            <div className="pro-filter mb-40 f-right">
                                <select name="pro-filter" id="pro-filter" onChange={handleSelectChange} value={activeCategory}>
                                    <option value="Default By">Predeterminado</option>
                                    {categoryShopData.map((item) => (
                                        <option value={item.category} key={item.id}>
                                            {item.category}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {currentProducts.length === 0 ? (
                            <div className="col-12 text-center py-5">
                                <p>No hay productos disponibles</p>
                            </div>
                        ) : (
                            currentProducts.map((item: Product) => (
                                <div className="col-xl-3 col-lg-3 col-md-6" key={item.id}>
                                    <div className="product-wrapper text-center mb-30">
                                        <div className="product-img">
                                            {item.images && item.images.length > 0 && (
                                                <Image
                                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.images[0].url}`}
                                                    alt={item.productName || 'Producto'}
                                                    width={200}
                                                    height={200}
                                                    className="product-image"
                                                />
                                            )}
                                            <div className="product-action">
                                                <button onClick={() => handleAddToCart(item)}>
                                                    <i className="fas fa-shopping-cart"></i>
                                                </button>
                                                <button onClick={() => setModalData(item)}>
                                                <span data-bs-toggle="modal" data-bs-target="#productModalId">
                                                    <i className="fas fa-eye"></i>
                                                </span>
                                                </button>
                                                <button onClick={() => dispatch(wishlist_product(item))}>
                                                    <i className="fas fa-heart"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product-text">
                                            <h4>
                                                <Link href={`/shop-details/${item.id}`}>
                                                    {item.productName}
                                                </Link>
                                            </h4>
                                            <div className="pro-price">
                                                <span>${item.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {safeFilterData.length > 0 && (
                        <div className="row">
                            <PaginationData
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onNext={handleNextPage}
                                onPrevious={handlePreviousPage}
                            />
                        </div>
                    )}
                </div>
            </div>
            <ProductModal modaldata={modaldata} />
        </>
    );
};

export default ShopMainArea;