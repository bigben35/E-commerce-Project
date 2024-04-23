"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
// internal
import { IProduct } from "@/types/product-d-t";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { add_to_wishlist } from "@/redux/features/wishlist";
import { add_to_compare } from "@/redux/features/compare";
import { add_cart_product } from "@/redux/features/cart";
import { handleModalProduct, handleOpenModal } from "@/redux/features/utility";

// img style
const imgStyle = {
  width: "100%",
  height: "100%",
};

const ProductItem = ({ product }: { product: IProduct }) => {
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
    <div className="product__wrapper mb-60">
      <div className="product__thumb">
        <Link href={`/product-details/${product.id}`}>
          <Image
            src={product.img}
            alt="product-img"
            width={255}
            height={325}
            style={imgStyle}
          />
          <Image
            className="product__thumb-2"
            src={product.thumb_img}
            alt="product-img"
            width={255}
            height={325}
            style={imgStyle}
          />
        </Link>
        <div className="product__action transition-3">
          <a
            onClick={() => dispatch(add_to_wishlist(product))}
            className={`cursor-pointer ${isWishlistAdd ? "active" : ""}`}
            data-bs-toggle="tooltip"
            data-placement="top"
            title="Add to Wishlist"
          >
            <i className="fal fa-heart"></i>
          </a>
          <a
            onClick={() => dispatch(add_to_compare(product))}
            className={`cursor-pointer ${isCompareAdd ? "active" : ""}`}
            data-toggle="tooltip"
            data-placement="top"
            title="Compare"
          >
            <i className="fal fa-sliders-h"></i>
          </a>
          <a
            className="cursor-pointer"
            onClick={() =>handleProductModal(product)}
          >
            <i className="fal fa-search"></i>
          </a>
        </div>
        <div className="product__sale">
          {product.new && <span className="new">new</span>}
          {product.discount && (
            <span className="percent">-{product.discount}%</span>
          )}
        </div>
      </div>
      <div className="product__content p-relative">
        <div className="product__content-inner">
          <h4>
            <Link
              href={`/product-details/${product.id}`}
              dangerouslySetInnerHTML={{ __html: product.title }}
            ></Link>
          </h4>
          <div className="product__price transition-3">
            <span>${product.price.toFixed(2)}</span>
            {product.old_price && (
              <span className="old-price">${product.old_price.toFixed(2)}</span>
            )}
          </div>
        </div>
        <div className="add-cart p-absolute transition-3">
          {isItemAddToCart ? (
            <Link href="/cart" className="cursor-pointer">
              View Cart
            </Link>
          ) : (
            <a
              onClick={() => dispatch(add_cart_product(product))}
              className="cursor-pointer"
            >
              + Add to Cart
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
