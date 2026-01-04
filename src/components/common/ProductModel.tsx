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

interface productDataType {
  id: number;
  image: string;
  title: string;
  price: number;
  rating: number;
  quantity: number;
  category: any;
  data: any;
}

const mapFeaturedToProduct = (featured: productDataType): productsType => {
  return {
    id: featured.id,
    productName: featured.title,
    slug: featured.data?.slug ?? featured.title.toLowerCase().replace(/\s+/g, "-"),
    description: featured.data?.description ?? "",
    price: featured.price,
    quantity: featured.quantity ?? 1,
    stock: featured.data?.stock ?? 0,
    images: [
      {
        id: featured.id,
        url: featured.data?.imageUrl ?? "",
      },
    ],
    category: {
      slug: featured.category?.slug ?? "general",
      nameCategory: featured.category?.name ?? "General",
    },
  };
};

const ProductModal: React.FC<{ modaldata: productDataType | null }> = ({
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
                          {modaldata.image ? (
                            <Image
                              src={modaldata.image}
                              style={{ width: "100%", height: "auto" }}
                              alt={modaldata.title || "Producto"}
                              width={500}
                              height={500}
                            />
                          ) : (
                            <div className="text-center py-5">Sin imagen</div>
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
                        {modaldata.title || "Producto sin nombre"}
                      </Link>
                    </h4>
                    <div className="product__stock">
                      <span>Disponibilidad:</span>
                      <span>En Stock</span>
                    </div>
                    <div className="product__review d-sm-flex">
                      <div className="rating rating__shop zoma-rating mb-15 mr-35">
                        <ul>{getRating(modaldata.rating || 0)}</ul>
                      </div>
                    </div>
                    <div className="product__price">
                      <span>
                        {modaldata.price === 0
                          ? "GRATIS"
                          : `$${modaldata.price}`}
                      </span>
                    </div>
                    <div className="product__modal-form">
                      <div className="product-quantity-cart mb-30">
                        <div className="product-quantity-form">
                          <form onSubmit={(e) => e.preventDefault()}>
                            <button
                              onClick={() =>
                                handleDecressCart(mapFeaturedToProduct(modaldata))
                              }
                              className="cart-minus"
                            >
                              <i className="far fa-minus"></i>
                            </button>
                            <input
                              className="cart-input m-0"
                              readOnly
                              value={myData?.quantity || 0}
                            />
                            <button
                              onClick={() =>
                                handleAddToCart(mapFeaturedToProduct(modaldata))
                              }
                              className="cart-plus"
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
                              dispatch(wishlist_product(mapFeaturedToProduct(modaldata)));
                            }}
                          >
                            <i className="fal fa-heart"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
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