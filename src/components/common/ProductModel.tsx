"use client";

import Link from "next/link";
import React from "react";
import { cart_product, decrease_quantity } from "@/redux/slices/cartSlice";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { productsType } from "@/interFace/interFace";
import { RootState } from "@/redux/store";
import { getRating } from "@/hooks/ratings-hooks";
import { wishlist_product } from "@/redux/slices/wishlist-slice";

const ProductModal: React.FC<{ modaldata: productsType | null }> = ({
  modaldata,
}) => {
  const dispatch = useDispatch();
  
  const handleAddToCart = (product: productsType) => {
    dispatch(cart_product(product));
  };
  
  const handleDecressCart = (product: productsType) => {
    dispatch(decrease_quantity(product));
  };

  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );

  // ✅ VALIDACIÓN: Si no hay modaldata, no renderizar
  if (!modaldata) {
    return null;
  }

  const myData = cartProducts.find((item) => item.id === modaldata.id);

  // ✅ Obtener la primera imagen si existe
  const imageUrl = modaldata.images && modaldata.images.length > 0
    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${modaldata.images[0].url}`
    : null;

  return (
    <div
      className="modal fade"
      id="productModalId"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered product__modal"
        role="document"
      >
        <div className="modal-content">
          <div className="product__modal-wrapper p-relative">
            <div className="product__modal-close p-absolute">
              <button data-bs-dismiss="modal">
                <i className="fal fa-times"></i>
              </button>
            </div>
            <div className="product__modal-inner">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="product__modal-box">
                    <div className="tab-content" id="modalTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="nav1"
                        role="tabpanel"
                        aria-labelledby="nav1-tab"
                      >
                        <div className="product__modal-img w-img">
                          {imageUrl ? (
                            <Image
                              src={imageUrl}
                              style={{ width: "100%", height: "auto" }}
                              alt={modaldata.productName || "Producto"}
                              width={500}
                              height={500}
                            />
                          ) : (
                            <div className="text-center py-5 bg-light">
                              <i className="fas fa-image fa-3x text-muted"></i>
                              <p className="mt-2">Sin imagen</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="product__modal-content">
                    <h4 data-bs-dismiss="modal">
                      <Link href={`/shop-details/${modaldata.id}`}>
                        {modaldata.productName || "Producto sin nombre"}
                      </Link>
                    </h4>
                    
                    <div className="product__stock mb-3">
                      <span>Disponibilidad: </span>
                      <span className={modaldata.stock && modaldata.stock > 0 ? 'text-success' : 'text-danger'}>
                        {modaldata.stock && modaldata.stock > 0 ? 'En Stock' : 'Sin Stock'}
                      </span>
                    </div>

                    {modaldata.description && (
                      <p className="product__description mb-3">
                        {modaldata.description}
                      </p>
                    )}

                    <div className="product__review d-sm-flex mb-3">
                      <div className="rating rating__shop zoma-rating mb-15 mr-35">
                        <ul>{getRating(5)}</ul>
                      </div>
                    </div>

                    <div className="product__price mb-4">
                      <span className="h4 text-primary">
                        {modaldata.price === 0
                          ? "GRATIS"
                          : `$${modaldata.price.toFixed(2)}`}
                      </span>
                    </div>

                    <div className="product__modal-form">
                      <div className="product-quantity-cart mb-30">
                        <div className="product-quantity-form">
                          <form onSubmit={(e) => e.preventDefault()}>
                            <button
                              onClick={() => handleDecressCart(modaldata)}
                              className="cart-minus"
                              disabled={!myData || myData.quantity <= 1}
                            >
                              <i className="far fa-minus"></i>
                            </button>
                            <input
                              className="cart-input m-0"
                              readOnly
                              value={myData?.quantity || 0}
                            />
                            <button
                              onClick={() => handleAddToCart(modaldata)}
                              className="cart-plus"
                              disabled={modaldata.stock !== undefined && modaldata.stock <= 0}
                            >
                              <i className="far fa-plus"></i>
                            </button>
                          </form>
                        </div>
                        <div data-bs-dismiss="modal">
                          <Link href="/cart" className="zoma-btn">
                            Ver Carrito
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="product__modal-links">
                      <ul>
                        <li>
                          <Link
                            href="#"
                            title="Agregar a favoritos"
                            onClick={(e) => {
                              e.preventDefault();
                              dispatch(wishlist_product(modaldata));
                            }}
                          >
                            <i className="fal fa-heart"></i>
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="#" 
                            title="Compartir"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fal fa-share-alt"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {modaldata.category?.nameCategory && (
                      <div className="product__meta mt-3 pt-3 border-top">
                        <span className="text-muted">Categoría: </span>
                        <span>{modaldata.category.nameCategory}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;