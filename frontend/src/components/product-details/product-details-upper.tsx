"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import { IProduct } from "@/types/product-d-t";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { add_cart_product, decrement, increment } from "@/redux/features/cart";

// prop type
type IProps = {
  product: IProduct;
  style_2?: boolean;
  bottomShow?: boolean;
};

const ProductDetailsUpper = ({
  product,
  style_2,
  bottomShow = true,
}: IProps) => {
  const { orderQuantity } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const [activeImg, setActiveImg] = useState(product.related_images[0]);

  const handleImageActive = (img: string) => {
    setActiveImg(img);
  };

  return (
    <>
      <div className="row">
        {!style_2 && (
          <div className="col-xl-6 col-lg-6">
            <div className="product__modal-box d-flex">
              <div className="product__modal-nav mr-20">
                <nav>
                  <div className="nav nav-tabs" id="product-details">
                    {product.related_images.map((img, i) => (
                    <a key={i}
                      className={`nav-item nav-link cursor-pointer ${img === activeImg ? "active" : ""}`}
                    >
                      <div className="product__nav-img w-img" onClick={() => handleImageActive(img)}>
                        <Image
                          src={img}
                          alt="product-img"
                          width={92}
                          height={117}
                        />
                      </div>
                    </a>
                  ))}
                  </div>
                </nav>
              </div>
              <div className="tab-content mb-20" id="product-detailsContent">
                <div className="product__modal-img product__thumb w-img">
                  <Image
                    src={activeImg}
                    alt="product-img"
                    width={418}
                    height={534}
                  />
                  <div className="product__sale">
                    {product.new && <span className="new">new</span>}
                    {product.discount && (
                      <span className="percent">-{product.discount}%</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {style_2 && (
          <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
            <div className="product__modal-box">
              <div className="tab-content mb-20" id="nav-tabContent">
                <div className="product__modal-img w-img">
                  <Image
                    src={activeImg}
                    alt="product-img"
                    width={327}
                    height={416}
                  />
                </div>
              </div>
              <nav>
                <div className="nav nav-tabs justify-content-between">
                  {product.related_images.map((img, i) => (
                    <a key={i}
                      className={`nav-item nav-link cursor-pointer ${img === activeImg ? "active" : ""}`}
                    >
                      <div className="product__nav-img w-img" onClick={() => handleImageActive(img)}>
                        <Image
                          src={img}
                          alt="product-img"
                          width={92}
                          height={117}
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        )}

        <div
          className={style_2?"col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12":"col-xl-6 col-lg-6"}
        >
          <div className="product__modal-content product__modal-content-2">
            <h4>
              <Link href={`/product-details/${product.id}`}>
                {product.title}
              </Link>
            </h4>
            <div className="rating rating-shop mb-15">
              <ul>
                <li><span><i className="fas fa-star"></i></span></li>
                <li><span><i className="fas fa-star"></i></span></li>
                <li><span><i className="fas fa-star"></i></span></li>
                <li><span><i className="fas fa-star"></i></span></li>
                <li><span><i className="fas fa-star"></i></span></li>
              </ul>
              <span className="rating-no ml-10 rating-left">
                {product.reviews.length} rating(s)
              </span>
              <span className="review rating-left">
                <a href="#">Add your Review</a>
              </span>
            </div>
            <div className="product__price-2 mb-25">
              <span>${product.price.toFixed(2)}</span>
              {product.old_price && (
                <span className="old-price">
                  ${product.old_price.toFixed(2)}
                </span>
              )}
            </div>
            <div className="product__modal-des mb-30">
              <p>{product.sm_desc}</p>
            </div>
            <div className="product__modal-form mb-30">
              <form action="#">
                <div className="product__modal-input size mb-20">
                  <label>
                    Size <i className="fas fa-star-of-life"></i>
                  </label>
                  <select>
                    <option>- Please select -</option>
                    {product.sizes.map((size) => (
                      <option key={size}>{size}</option>
                    ))}
                  </select>
                </div>
                <div className="product__modal-input color mb-20">
                  <label>
                    Color <i className="fas fa-star-of-life"></i>
                  </label>
                  <select>
                    <option>- Please select -</option>
                    {product.colors.map((clr) => (
                      <option key={clr}>{clr}</option>
                    ))}
                  </select>
                </div>
                <div className="product__modal-required mb-5">
                  <span>Required Fields *</span>
                </div>
                <div className="pro-quan-area d-sm-flex align-items-center">
                  <div className="product-quantity-title">
                    <label>Quantity</label>
                  </div>
                  <div className="product-quantity mr-20 mb-20">
                    <div className="cart-plus-minus">
                      <input
                        type="text"
                        value={orderQuantity}
                        disabled
                        readOnly
                      />
                      <div
                        onClick={() => dispatch(decrement())}
                        className="dec qtybutton"
                      >
                        -
                      </div>
                      <div
                        onClick={() => dispatch(increment())}
                        className="inc qtybutton"
                      >
                        +
                      </div>
                    </div>
                  </div>
                  <div className="pro-cart-btn">
                    <a
                      onClick={() => dispatch(add_cart_product(product))}
                      className="add-cart-btn mb-20 cursor-pointer"
                    >
                      + Add to Cart
                    </a>
                  </div>
                </div>
              </form>
            </div>

            {bottomShow && (
              <div>
                <div className="product__tag mb-25">
                  <span>Category:</span>
                  <span>
                    <a className="cursor-pointer">{product.category}</a>
                  </span>
                </div>
                <div className="product__share">
                  <span>Share :</span>
                  <ul>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-behance"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsUpper;
