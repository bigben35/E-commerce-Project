import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/headers/header";
import Breadcrumb from "@/components/common/breadcrumb";
import Footer from "@/layout/footers/footer";
import CheckoutArea from "@/components/checkout/checkout-area";

export const metadata: Metadata = {
  title: "Checkout Page",
};

export default function CheckoutPage() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      <main>
        {/* breadcrumb start */}
        <Breadcrumb title="Checkout" subtitle="Checkout" />
        {/* breadcrumb end */}

        {/* checkout area start */}
        <CheckoutArea />
        {/* checkout area end */}
      </main>

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
