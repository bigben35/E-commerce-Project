"use client";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hook";
import { getCartProducts, initialOrderQuantity } from "@/redux/features/cart";
import { getWishlistProducts } from "@/redux/features/wishlist";
import { getCompareProducts } from "@/redux/features/compare";
import ProductModal from "@/components/common/modals/product-modal";
import BackToTop from "@/components/common/back-to-top";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initialOrderQuantity());
    dispatch(getCartProducts());
    dispatch(getWishlistProducts());
    dispatch(getCompareProducts());
  }, [router,dispatch]); 

  return (
    <>
      {children} 
      <BackToTop/>
      <ProductModal/>
      <ToastContainer/>
    </>
  );
};

export default Wrapper;