"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import { cart_product, decrease_quantity } from "@/redux/slices/cartSlice";
import { RootState } from "@/redux/store";
import { useGetProducts } from "../../../api/getProduct";
import { productsType, idType } from "@/interFace/interFace";

const ShopDetailsMain = ({ id }: idType) => {
  const dispatch = useDispatch();
  const { loading, result, error } = useGetProducts(id);

  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );

  if (loading) {
    return (
      <>
        <Breadcrumb title="Detalle de producto" subTitle="Detalle de producto" />
        <div className="container py-5">
          <p className="text-center">Cargando producto...</p>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Breadcrumb title="Detalle de producto" subTitle="Detalle de producto" />
        <div className="container py-5">
          <p className="text-center">Error al cargar el producto: {error}</p>
        </div>
      </>
    );
  }

  // ✅ CLAVE: result es un ARRAY, extrae el primer elemento
  if (!result || !Array.isArray(result) || result.length === 0) {
    return (
      <>
        <Breadcrumb title="Detalle de producto" subTitle="Detalle de producto" />
        <div className="container py-5">
          <p className="text-center">Producto no encontrado</p>
        </div>
      </>
    );
  }

  // ✅ Extrae el primer elemento del array
  const productData = result[0];

  // ✅ Construir el producto SOLO con los campos de productsType
  const product: productsType = {
    id: productData.id,
    productName: productData.productName,
    slug: productData.slug,
    description: productData.description || '',
    price: productData.price || 0,
    stock: productData.stock || 0,
    quantity: productData.quantity || 1,
    images: productData.images || [],
    category: productData.category || { slug: '', nameCategory: '' },
  };

  const cartItem = cartProducts.find((p: productsType) => p.id === product.id);

  return (
    <>
      <Breadcrumb title="Detalle de producto" subTitle="Detalle de producto" />

      <section className="shop-banner-area pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              {product.images && Array.isArray(product.images) && product.images.length > 0 ? (
                <div className="product-images">
                  {product.images.map((img: any, i: number) => (
                    <div key={i} className="mb-3">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${img.url}`}
                        alt={product.productName || 'Producto'}
                        width={500}
                        height={500}
                        className="img-fluid rounded"
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-image text-center p-5 bg-light rounded">
                  <i className="fas fa-image fa-4x text-muted mb-3"></i>
                  <p className="text-muted">Sin imagen disponible</p>
                </div>
              )}
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="product-details-content">
                <h1 className="mb-3">{product.productName}</h1>
                
                {product.description && (
                  <p className="mb-4 text-muted">{product.description}</p>
                )}
                
                <div className="product-price mb-4">
                  <span className="h2 text-success fw-bold">${product.price.toFixed(2)}</span>
                </div>

                {product.stock !== undefined && (
                  <div className="product-stock mb-3">
                    <span className={product.stock > 0 ? 'badge bg-success' : 'badge bg-danger'}>
                      {product.stock > 0 ? `✓ En stock (${product.stock} disponibles)` : '✗ Sin stock'}
                    </span>
                  </div>
                )}

                <div className="product-details-action mt-4">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="quantity-controls d-flex align-items-center border rounded bg-white">
                      <button
                        disabled={!cartItem || cartItem.quantity <= 1}
                        onClick={() => cartItem && dispatch(decrease_quantity(cartItem))}
                        className="btn btn-light border-0 px-3"
                      >
                        <i className="fas fa-minus"></i>
                      </button>

                      <input 
                        readOnly 
                        value={cartItem?.quantity || 0} 
                        className="form-control border-0 text-center fw-bold"
                        style={{ width: '60px' }}
                      />

                      <button 
                        onClick={() => dispatch(cart_product(product))}
                        className="btn btn-light border-0 px-3"
                        disabled={product.stock !== undefined && product.stock <= 0}
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>

                    <button 
                      onClick={() => dispatch(cart_product(product))}
                      className="btn btn-primary flex-grow-1"
                      disabled={product.stock !== undefined && product.stock <= 0}
                    >
                      <i className="fas fa-shopping-cart me-2"></i>
                      Agregar al carrito
                    </button>
                  </div>

                  <Link href="/cart" className="btn btn-outline-success w-100">
                    <i className="fas fa-eye me-2"></i>
                    Ver Carrito
                  </Link>
                </div>

                {/* Información adicional */}
                <div className="product-meta mt-4 pt-4 border-top">
                  {product.category?.nameCategory && (
                    <div className="mb-2">
                      <strong className="text-muted">Categoría:</strong> 
                      <span className="ms-2">{product.category.nameCategory}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopDetailsMain;