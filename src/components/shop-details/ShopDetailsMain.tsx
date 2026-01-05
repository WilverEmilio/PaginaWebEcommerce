"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import { cart_product, decrease_quantity } from "@/redux/slices/cartSlice";
import { RootState } from "@/redux/store";
import { useGetProducts } from "../../../api/getProduct";
import { Product, idType } from "@/interFace/interFace";

const ShopDetailsMain = ({ id }: idType) => {
  const dispatch = useDispatch();
  const { loading, result, error } = useGetProducts(id);

  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );

  // ✅ Manejo correcto de estados
  if (loading) {
    return (
      <div className="container py-5">
        <p className="text-center">Cargando producto...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <p className="text-center">Error al cargar el producto: {error}</p>
      </div>
    );
  }

  // ✅ result es UN OBJETO, no un array
  if (!result) {
    return (
      <div className="container py-5">
        <p className="text-center">Producto no encontrado</p>
      </div>
    );
  }

  const product: Product = result;

  // ✅ Validación de carrito
  const cartItem = cartProducts.find((p: Product) => p.id === product.id);

  return (
    <>
      <Breadcrumb title="Detalle de producto" subTitle="Detalle de producto" />

      <section className="shop-banner-area pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              {/* ✅ Validación de imágenes */}
              {product.images && Array.isArray(product.images) && product.images.length > 0 ? (
                product.images.map((img: any, i: number) => (
                  <Image
                    key={i}
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${img.url}`}
                    alt={product.productName || 'Producto'}
                    width={270}
                    height={450}
                    className="mb-3"
                  />
                ))
              ) : (
                <div className="text-center">
                  <p>Sin imagen disponible</p>
                </div>
              )}
            </div>

            <div className="col-xl-6">
              <h1>{product.productName}</h1>
              <p>{product.description || 'Sin descripción'}</p>
              <span className="h3">${product.price}</span>

              <div className="product-details-action mt-4">
                <button
                  disabled={!cartItem}
                  onClick={() =>
                    cartItem && dispatch(decrease_quantity(cartItem))
                  }
                  className="btn btn-secondary"
                >
                  -
                </button>

                <input 
                  readOnly 
                  value={cartItem?.quantity || 0} 
                  className="mx-3"
                  style={{ width: '50px', textAlign: 'center' }}
                />

                <button 
                  onClick={() => dispatch(cart_product(product))}
                  className="btn btn-primary"
                >
                  +
                </button>

                <Link href="/cart" className="btn btn-success ms-3">
                  Ver Carrito
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopDetailsMain;