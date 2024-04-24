import { promises as fs } from 'fs';
import Header from "@/layout/headers/header";
import Wrapper from '@/layout/wrapper';
import HeroSliderOne from "@/components/hero-banner/hero-banner-one";
import ShopCategory from "@/components/shop/shop-category";
import TrendingProducts from '@/components/products/trending-products';
import Brands from '@/components/brands/brand-area';
import BlogArea from '@/components/blogs/blog-area';
import SubscribeArea from '@/components/subscribe-area';
import BannerProducts from '@/components/products/banner-products';
import SaleOffProducts from '@/components/products/sale-off-products';
import Footer from '@/layout/footers/footer';

export default async function HomePage() {
  const file = await fs.readFile(process.cwd() + '/src/app/product-data.json', 'utf8');
  const product_data = JSON.parse(file);

  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      <main>
        {/* hero banner start */}
        <HeroSliderOne />
        {/* hero banner end */}

        {/* category area start */}
        <ShopCategory/>
        {/* category area end */}

        {/* trending products start */}
        <TrendingProducts products={product_data} />
        {/* trending products end */}

        {/* product banner start */}
        <BannerProducts products={product_data}/>
        {/* product banner end */}

        {/* sale of products start */}
        <SaleOffProducts products={product_data}/>
        {/* sale of products end */}

        {/* brand area start */}
        <Brands/>
        {/* brand area end */}

        {/* blog area start */}
        <BlogArea/>
        {/* blog area end */}

        {/* subscribe area start */}
        <SubscribeArea/>
        {/* subscribe area end */}
      </main>

      {/* footer start */}
      <Footer/>
      {/* footer end */}
    </Wrapper>
  );
}
