'use client'
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// internal
import ErrorMsg from '../common/error-msg';
import CouponArea from "./coupon-area";
import CheckoutOrders from './checkout-orders';
import CheckoutPayment from './checkout-payment';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { getCartProducts } from '@/redux/features/cart';
import Link from 'next/link';

// type form data

type FormData = {
  firstName: string;
  lastName: string;
  company: string;
  country: string;
  address: string;
  city: string;
  apartment: string;
  state: string;
  zipCode: string;
  email: string;
  phone: string;
  orderNote?: string;
};

const schema = yup.object().shape({
  firstName: yup.string().required().label("First Name"),
  lastName: yup.string().required().label("Last Name"),
  company: yup.string().required().label("Company"),
  country: yup.string().required().label("Country"),
  address: yup.string().required().label("Address"),
  city: yup.string().required().label("City"),
  apartment: yup.string().required().label("Apartment"),
  state: yup.string().required().label("State"),
  zipCode: yup.string().required().label("Zip Code"),
  email: yup.string().required().email().label("Email"),
  phone: yup.string().required().min(4).label("Phone"),
  orderNote: yup.string().label("Order Note"),
});

const CheckoutArea = () => {
  const { cart_products } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      dispatch(getCartProducts());
    }
  }, [dispatch]);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data))
    reset()
  });
  return (
    <div>
      {/* coupon area start */}
      {cart_products.length > 0 && <CouponArea />}
      {/* coupon area end */}

      <section className="checkout-area pb-70">
        <div className="container">
        {cart_products.length === 0 &&
            <div className='text-center pt-100'>
              <h3>Your cart is empty</h3>
              <Link href="/shop" className="os-btn os-btn-2 mt-30">Return to shop</Link>
            </div>
          }

          {cart_products.length > 0 && 
          <form onSubmit={onSubmit}>
            <div className="row">
              <div className="col-lg-6">
                <div className="checkbox-form">
                  <h3>Billing Details</h3>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="country-select">
                        <label>Country <span className="required">*</span></label>
                        <select id='country' {...register("country")}>
                          <option value="volvo">bangladesh</option>
                          <option value="saab">Algeria</option>
                          <option value="mercedes">Afghanistan</option>
                          <option value="Ghana">Ghana</option>
                          <option value="Albania">Albania</option>
                          <option value="Bahrain">Bahrain</option>
                          <option value="Colombia">Colombia</option>
                          <option value="Dominican Republic">Dominican Republic</option>
                        </select>
                         <ErrorMsg msg={errors.country?.message!} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>First Name <span className="required">*</span></label>
                        <input type="text" id='firstName' {...register("firstName")} placeholder="First Name" />
                        <ErrorMsg msg={errors.firstName?.message!} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>Last Name <span className="required">*</span></label>
                        <input type="text" id='lastName' {...register("lastName")} placeholder="Last Name" />
                        <ErrorMsg msg={errors.lastName?.message!} />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>Company Name</label>
                        <input type="text" id='company' {...register("company")} placeholder="Company" />
                        <ErrorMsg msg={errors.company?.message!} />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>Address <span className="required">*</span></label>
                        <input type="text" id='address' {...register("address")} placeholder="Street address" />
                        <ErrorMsg msg={errors.address?.message!} />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <input type="text" id='apartment' {...register("apartment")} placeholder="Apartment, suite, unit etc. (optional)" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>Town / City <span className="required">*</span></label>
                        <input type="text" id='city' {...register("city")} placeholder="Town / City" />
                        <ErrorMsg msg={errors.city?.message!} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>State / County <span className="required">*</span></label>
                        <input id='state' {...register("state")} type="text" placeholder="State" />
                        <ErrorMsg msg={errors.state?.message!} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>Postcode / Zip <span className="required">*</span></label>
                        <input type="text" id='zipCode' {...register("zipCode")} placeholder="Postcode / Zip" />
                        <ErrorMsg msg={errors.zipCode?.message!} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>Email Address <span className="required">*</span></label>
                        <input type="email" id='email' {...register("email")} placeholder="Your Email" />
                        <ErrorMsg msg={errors.email?.message!} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>Phone <span className="required">*</span></label>
                        <input type="text" id='phone' {...register("phone")} placeholder="Postcode / Zip" />
                        <ErrorMsg msg={errors.phone?.message!} />
                      </div>
                    </div>
                  </div>
                  <div className="different-address">
                    <div className="order-notes">
                      <div className="checkout-form-list">
                        <label>Order Notes</label>
                        <textarea id="orderNote" cols={30} rows={10} {...register("orderNote")} placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="your-order mb-30 ">
                  <h3>Your order</h3>
                  {/* checkout orders */}
                  <CheckoutOrders cart_products={cart_products}/>
                  {/* checkout orders */}

                  {/* checkout payment */}
                  <CheckoutPayment/>
                  {/* checkout payment */}
                </div>
              </div>
            </div>
          </form>}
        </div>
      </section>
    </div>
  );
};

export default CheckoutArea;
