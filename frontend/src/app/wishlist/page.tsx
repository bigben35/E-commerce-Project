import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/headers/header";
import Breadcrumb from "@/components/common/breadcrumb";
import WishlistArea from "@/components/wishlist/wishlist-area";
import Footer from "@/layout/footers/footer";

export const metadata: Metadata = {
  title: "Wishlist Page",
};

export default function WishlistPage() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      <main>
        {/* breadcrumb start */}
        <Breadcrumb title="Wishlist" subtitle="Wishlist" />
        {/* breadcrumb end */}

        {/* wishlist area start */}
        <WishlistArea />
        {/* wishlist area end */}
      </main>

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
