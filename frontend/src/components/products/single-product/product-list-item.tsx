'use client'
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IProduct } from "@/types/product-d-t";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { add_cart_product } from "@/redux/features/cart";
import { handleModalProduct, handleOpenModal } from "@/redux/features/utility";
import { add_to_compare } from "@/redux/features/compare";
import { add_to_wishlist } from "@/redux/features/wishlist";

// props type
type IProps = {
  product: IProduct;
};

// img style
const imgStyle = {
  width: "100%",
  height: "100%",
};

const ProductListItem = ({ product }: IProps) => {
  const {id,img,details,title,old_price,discount,thumb_img,price,sm_desc}=product || {};
  const [isItemAddToCart, setIsItemAddToCart] = useState(false);
  const [isCompareAdd, setIsCompareAdd] = useState(false);
  const [isWishlistAdd, setIsWishlistAdd] = useState(false);
  const { cart_products } = useAppSelector((state) => state.cart);
  const { wishlist } = useAppSelector((state) => state.wishlist);
  const { compare_products } = useAppSelector((state) => state.compare);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsItemAddToCart(cart_products.some((i) => i.id === product.id));
    setIsWishlistAdd(wishlist.some((i) => i.id === product.id));
    setIsCompareAdd(compare_products.some((i) => i.id === product.id));
  }, [cart_products, compare_products, product.id, wishlist]);

  const handleProductModal = (prd: IProduct) => {
    dispatch(handleModalProduct({ product: prd }))
    dispatch(handleOpenModal())
  }

  return (
    <div className="product__wrapper mb-40">
      <div className="row">
        <div className="col-xl-4 col-lg-4">
          <div className="product__thumb">
            <Link href={`/product-details/${id}`}>
              <Image
                src={img}
                alt="product-img"
                width={255}
                height={325}
                style={imgStyle}
              />
              <Image
                className="product__thumb-2"
                src={thumb_img}
                alt="product-img"
                width={255}
                height={325}
                style={imgStyle}
              />
            </Link>
            <div className="product__sale">
              {product.new && <span className="new">new</span>}
              {discount && <span className="percent">-{discount}%</span>}
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-lg-8">
          <div className="product__content p-relative">
            <div className="product__content-inner list">
              <h4>
                <Link href={`/product-details/${id}`}>{title}</Link>
              </h4>
              <div className="product__price-2 mb-10">
                <span>${price.toFixed(2)}</span>
                {old_price && (
                  <span className="old-price">${old_price.toFixed(2)}</span>
                )}
              </div>
              <p>{sm_desc}</p>
              <div className="product__list mb-30">
                <ul>
                  {details.details_list.slice(0, 3).map((l, i) => (
                    <li key={i}>
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="add-cart-list d-sm-flex align-items-center">
              {isItemAddToCart ? (
                <Link href="/cart" className="add-cart-btn mr-10">
                  View cart
                </Link>
              ) : (
                <a
                  onClick={() => dispatch(add_cart_product(product))}
                  className="add-cart-btn mr-10 cursor-pointer"
                >
                  {" "}
                  <i className="fal fa-plus"></i>
                  {" "}Add to Cart
                </a>
              )}
              <div className="product__action-2 transition-3 mr-20">
                <a
                  onClick={() => dispatch(add_to_wishlist(product))}
                  className={`cursor-pointer ${isWishlistAdd ? "active" : ""}`}
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Add to Wishlist"
                >
                  <i className="fal fa-heart"></i>
                </a>
                <a
                  onClick={() => dispatch(add_to_compare(product))}
                  className={`cursor-pointer ${isCompareAdd ? "active" : ""}`}
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Compare"
                >
                  <i className="fal fa-sliders-h"></i>
                </a>
                <a onClick={() =>handleProductModal(product)} className="cursor-pointer">
                  <i className="fal fa-search"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
