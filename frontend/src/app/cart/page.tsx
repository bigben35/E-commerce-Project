import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/headers/header";
import Breadcrumb from "@/components/common/breadcrumb";
import Footer from "@/layout/footers/footer";
import CartArea from "@/components/cart/cart-area";

export const metadata: Metadata = {
  title: "Cart Page",
};

export default function CartPage() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      <main>
        {/* breadcrumb start */}
        <Breadcrumb title="Your Cart" subtitle="Cart" />
        {/* breadcrumb end */}

        {/* cart area start */}
        <CartArea />
        {/* cart area end */}
      </main>

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
