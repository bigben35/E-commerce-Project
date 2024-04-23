import { promises as fs } from "fs";
import { Metadata } from "next";
// internal
import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
import ShopCategory from "@/components/shop/shop-category";
import HeroSliderOne from "@/components/hero-banner/hero-banner-one";
import BlogArea from "@/components/blogs/blog-area";
import SubscribeArea from "@/components/subscribe-area";
import TrendingProductsThree from "@/components/products/trending-products-3";
import BannerProducts from "@/components/products/banner-products";
import SaleOffProducts from "@/components/products/sale-off-products";
import Footer from "@/layout/footers/footer";

export const metadata: Metadata = {
  title: "Home Page Six",
};

export default async function HomePageSix() {
  const file = await fs.readFile(
    process.cwd() + "/src/app/product-data.json",
    "utf8"
  );
  const product_data = JSON.parse(file);

  return (
    <Wrapper>
      {/* header start */}
      <HeaderThree />
      {/* header end */}

      <main>
        {/* hero banner start */}
        <HeroSliderOne style_2={true} />
        {/* hero banner end */}

        {/* category area start */}
        <ShopCategory spacing="pt-30" style_4={true} />
        {/* category area end */}

        {/* trending products start */}
        <TrendingProductsThree products={product_data} style_2={true} />
        {/* trending products end */}

        {/* product banner start */}
        <BannerProducts products={product_data} />
        {/* product banner end */}

        {/* sale of products start */}
        <SaleOffProducts products={product_data} />
        {/* sale of products end */}

        {/* blog area start */}
        <BlogArea />
        {/* blog area end */}

        {/* subscribe area start */}
        <SubscribeArea />
        {/* subscribe area end */}
      </main>

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
