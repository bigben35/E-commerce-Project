import { promises as fs } from "fs";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/headers/header";
import HeroSliderTwo from "@/components/hero-banner/hero-banner-two";
import ShopCategory from "@/components/shop/shop-category";
import Brands from "@/components/brands/brand-area";
import BlogArea from "@/components/blogs/blog-area";
import SubscribeArea from "@/components/subscribe-area";
import Footer from "@/layout/footers/footer";
import TrendingProductsTwo from "@/components/products/trending-products-2";
import SaleOffProducts from "@/components/products/sale-off-products";

export const metadata: Metadata = {
  title: "Home Page Two",
};

export default async function HomePageTwo() {
  const file = await fs.readFile(
    process.cwd() + "/src/app/product-data.json",
    "utf8"
  );
  const product_data = JSON.parse(file);

  return (
    <Wrapper>
      {/* header start */}
      <Header header_big={true} />
      {/* header end */}

      <main className="box-25">
        {/* hero banner start */}
        <HeroSliderTwo />
        {/* hero banner end */}

        {/* category area start */}
        <ShopCategory spacing="pt-95" style_2={true} />
        {/* category area end */}

        {/* trending products start */}
        <TrendingProductsTwo products={product_data} />
        {/* trending products end */}

        {/* sale of products start */}
        <SaleOffProducts
          products={product_data}
          spacing="pb-55"
          style_2={true}
        />
        {/* sale of products end */}

        {/* blog area start */}
        <BlogArea />
        {/* blog area end */}

        {/* brand area start */}
        <Brands df={true} />
        {/* brand area end */}

        {/* subscribe area start */}
        <SubscribeArea style_2={true} />
        {/* subscribe area end */}
      </main>

      {/* footer start */}
      <div className="box-25 box-pb-40">
        <Footer style_2={true} />
      </div>
      {/* footer end */}
    </Wrapper>
  );
}
