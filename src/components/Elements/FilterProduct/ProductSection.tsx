"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";

import shape1 from "../../../../public/assets/img/shape/shape1.png";
import shape2 from "../../../../public/assets/img/shape/shape2.png";
import shape3 from "../../../../public/assets/img/shape/shape3.png";
import shape4 from "../../../../public/assets/img/shape/shape4.png";
import shape5 from "../../../../public/assets/img/shape/1.png";

import { cart_product } from "@/redux/slices/cartSlice";
import { wishlist_product } from "@/redux/slices/wishlist-slice";
import ProductModal from "@/components/common/ProductModel";

import { Category, Product } from "@/interFace/interFace";
import { useGetCategory } from "../../../../api/getCategory";
import { useGetProductsCategory } from "../../../../api/getCategoryProducts";

// ❌ ELIMINA ESTA INTERFAZ - Ya no la necesitas
// interface productDataType {
//   id: number;
//   image: string;
//   title: string;
//   price: number;
//   rating: number;
//   quantity: number;
//   category: any;
//   data: any;
// }

const ProductSection = () => {
  const dispatch = useDispatch();

  const [activeCategorySlug, setActiveCategorySlug] =
    useState<string>("aceites-naturales");

  // ✅ CAMBIA: Usa Product en lugar de productDataType
  const [modaldata, setModalData] = useState<Product | null>(null);

  const categoryResponse = useGetCategory();
  const productResponse = useGetProductsCategory(activeCategorySlug);

  /* =========================
     VALIDACIÓN SEGURA DE DATOS
  ========================= */
  const categories: Category[] = Array.isArray(categoryResponse?.result)
    ? categoryResponse.result
    : [];

  const products: Product[] = Array.isArray(productResponse?.result)
    ? productResponse.result
    : [];

  /* =========================
     MANEJO DE ESTADOS
  ========================= */
  if (categoryResponse.loading || productResponse.loading) {
    return (
      <div className="product-area pos-relative pt-110 pb-85 fix">
        <div className="container">
          <div className="section-title text-center section-circle mb-70">
            <h1>Cargando productos...</h1>
          </div>
        </div>
      </div>
    );
  }

  // Manejo de errores
  if (categoryResponse.error || productResponse.error) {
    return (
      <div className="product-area pos-relative pt-110 pb-85 fix">
        <div className="container">
          <div className="section-title text-center section-circle mb-70">
            <h1>Error al cargar los productos</h1>
            <p>Por favor, intenta recargar la página</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="product-area pos-relative pt-110 pb-85 fix">
        {/* SHAPES */}
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
          <div className="section-title text-center section-circle mb-70">
            <div className="section-img">
              <Image src={shape5} alt="shape" />
            </div>
            <h1>Nuestros productos</h1>
          </div>

          {/* =========================
              CATEGORÍAS - CON VALIDACIÓN
          ========================= */}
          {categories.length > 0 ? (
            <ul className="nav product-tab justify-content-center mb-75">
              {categories.map((cat) => (
                <li
                  key={cat.id}
                  className={
                    activeCategorySlug === cat.slug ? "active nav-item" : "nav-item"
                  }
                  onClick={() => setActiveCategorySlug(cat.slug)}
                >
                  <div className="product-tab-content text-center">
                    {cat.image?.url && (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${cat.image.url}`}
                        alt={cat.nameCategory}
                        width={50}
                        height={50}
                      />
                    )}
                    <h4>{cat.nameCategory}</h4>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center mb-75">
              <p>No hay categorías disponibles</p>
            </div>
          )}

          {/* =========================
              PRODUCTOS - CON VALIDACIÓN
          ========================= */}
          <div className="row">
            {products.length > 0 ? (
              products.slice(0, 4).map((product) => {
                const imageUrl =
                  product.images?.[0]?.url
                    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`
                    : "/assets/img/no-image.png";

                return (
                  <div className="col-xl-3 col-lg-3 col-md-6" key={product.id}>
                    <div className="product-wrapper text-center mb-30">
                      <div className="product-img">
                        <Link href={`/shop-details/${product.id}`}>
                          <Image
                            src={imageUrl}
                            alt={product.productName || "Producto"}
                            width={200}
                            height={200}
                          />
                        </Link>

                        <div className="product-action">
                          <button
                            onClick={() => dispatch(cart_product(product))}
                            aria-label="Agregar al carrito"
                          >
                            <i className="fas fa-shopping-cart" />
                          </button>

                          <button
                            // ✅ CAMBIA: Pasa directamente el producto completo
                            onClick={() => setModalData(product)}
                            aria-label="Vista rápida"
                          >
                            <i className="fas fa-eye" />
                          </button>

                          <button
                            onClick={() =>
                              dispatch(wishlist_product(product))
                            }
                            aria-label="Agregar a favoritos"
                          >
                            <i className="fas fa-heart" />
                          </button>
                        </div>
                      </div>

                      <div className="product-text">
                        <h4>
                          <Link href={`/shop-details/${product.id}`}>
                            {product.productName}
                          </Link>
                        </h4>
                        <div className="pro-price">${product.price}</div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-12 text-center">
                <p>No hay productos disponibles en esta categoría</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* =========================
          MODAL
      ========================= */}
      {modaldata && <ProductModal modaldata={modaldata} />}
    </>
  );
};

export default ProductSection;