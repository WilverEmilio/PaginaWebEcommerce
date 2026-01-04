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
  const { loading, result } = useGetProducts(id);

  const products: Product[] = Array.isArray(result) ? result : [];

  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );

  if (loading) return <p>Loading...</p>;
  if (!products.length) return <p>No products available</p>;

  const product = products.find(
    (p: Product) => p.id === Number(id)
  );

  if (!product) return <p>Product not found</p>;

  const cartItem = cartProducts.find(
    (p: Product) => p.id === product.id
  );

  return (
    <>
      <Breadcrumb title="Detalle de producto" subTitle="Detalle de producto" />

      <section className="shop-banner-area pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              {Array.isArray(product.images) && product.images.map((img: any, i: number) => (
                <Image
                  key={i}
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${img.url}`}
                  alt={product.productName}
                  width={270}
                  height={450}
                />
              ))}
            </div>

            <div className="col-xl-6">
              <h1>{product.productName}</h1>
              <p>{product.description}</p>
              <span>${product.price}</span>

              <div className="product-details-action">
                <button
                  disabled={!cartItem}
                  onClick={() =>
                    cartItem && dispatch(decrease_quantity(cartItem))
                  }
                >
                  -
                </button>

                <input readOnly value={cartItem?.quantity || 0} />

                <button onClick={() => dispatch(cart_product(product))}>
                  +
                </button>

                <Link href="/cart">View Cart</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopDetailsMain;
