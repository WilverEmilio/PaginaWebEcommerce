'use client';

import useGlobalContext from '@/hooks/use-context';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useGetProductsAll } from '../../../api/getProductAll';
import { productsType } from '@/interFace/interFace';

const SearchBarModel = () => {
    const { inputValue, setInputValue } = useGlobalContext();
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState<productsType[]>([]);
    
    const { result, loading } = useGetProductsAll();
    const products = Array.isArray(result) ? result : [];

    // ✅ BLOQUEAR SCROLL cuando el modal está abierto
    useEffect(() => {
        if (inputValue) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [inputValue]);

    // Filtrar productos cuando cambia el término de búsqueda
    useEffect(() => {
        if (searchTerm.trim() === "") {
            setFilteredProducts([]);
            return;
        }

        const searchLower = searchTerm.toLowerCase();
        const filtered = products.filter((product) =>
            product.productName.toLowerCase().includes(searchLower) ||
            product.description?.toLowerCase().includes(searchLower) ||
            product.category?.nameCategory.toLowerCase().includes(searchLower)
        );

        setFilteredProducts(filtered);
    }, [searchTerm, products]);

    // Limpiar búsqueda al cerrar
    const handleClose = () => {
        setSearchTerm("");
        setFilteredProducts([]);
        setInputValue(false);
    };

    // Manejar submit del formulario
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <>
            <div 
                className={inputValue ? "modal fade show search-modal" : "modal fade"} 
                tabIndex={-1} 
                role="dialog" 
                aria-hidden="true"
                style={inputValue ? { display: 'block' } : {}}
            >
                <div className="modal-remove">
                    <button onClick={handleClose}>
                        <i className='fas fa-window-close'></i>
                    </button>
                </div>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                placeholder="Buscar productos..." 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                autoFocus
                            />
                            <button type="submit">
                                <i className='fas fa-search'></i>
                            </button>
                        </form>

                        {/* Resultados de búsqueda */}
                        <div className="search-results-container">
                            {loading && searchTerm && (
                                <div className="search-loading">
                                    <p>Buscando productos...</p>
                                </div>
                            )}

                            {!loading && searchTerm && filteredProducts.length === 0 && (
                                <div className="search-no-results">
                                    <p>No se encontraron productos para &quot;{searchTerm}&quot;</p>
                                </div>
                            )}

                            {!loading && filteredProducts.length > 0 && (
                                <div className="search-results-list">
                                    <div className="search-results-header">
                                        <h5>
                                            {filteredProducts.length} {filteredProducts.length === 1 ? 'resultado' : 'resultados'}
                                        </h5>
                                    </div>
                                    
                                    <ul className="search-products">
                                        {filteredProducts.slice(0, 5).map((product) => (
                                            <li key={product.id} className="search-product-item">
                                                <Link 
                                                    href={`/shop-details/${product.id}`}
                                                    onClick={handleClose}
                                                >
                                                    <div className="search-product-wrapper">
                                                        {product.images && product.images.length > 0 ? (
                                                            <div className="search-product-img">
                                                                <Image
                                                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
                                                                    alt={product.productName}
                                                                    width={60}
                                                                    height={60}
                                                                />
                                                            </div>
                                                        ) : (
                                                            <div className="search-product-img no-image">
                                                                <i className="fas fa-image"></i>
                                                            </div>
                                                        )}
                                                        
                                                        <div className="search-product-details">
                                                            <h6>{product.productName}</h6>
                                                            <div className="search-product-meta">
                                                                <span className="price">${product.price.toFixed(2)}</span>
                                                                {product.category?.nameCategory && (
                                                                    <span className="category">
                                                                        {product.category.nameCategory}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>

                                    {filteredProducts.length > 5 && (
                                        <div className="search-view-all">
                                            <Link 
                                                href="/shop" 
                                                className="view-all-btn"
                                                onClick={handleClose}
                                            >
                                                Ver todos ({filteredProducts.length})
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Backdrop overlay */}
            {inputValue && (
                <div 
                    className="modal-backdrop fade show" 
                    onClick={handleClose}
                    style={{ zIndex: 9998 }}
                ></div>
            )}
        </>
    );
};

export default SearchBarModel;