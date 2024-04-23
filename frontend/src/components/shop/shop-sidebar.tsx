import React from "react";
import CategoryFilter from "./filter/category-filter";
import PriceFilter from "./filter/price-filter";
import SizeFilter from "./filter/size-filter";
import ColorFilter from "./filter/color-filter";
import BrandFilter from "./filter/brand-filter";
import FeatureProducts from "./filter/feature-products";
import { IProduct } from "@/types/product-d-t";

// prop type
type IProps = {
  feature_products: IProduct[];
  brands: string[];
  colors: string[];
  sizes: string[];
};

const ShopSidebar = ({
  feature_products,
  brands,
  colors,
  sizes,
}: IProps) => {
  return (
    <div className="shop__sidebar">
      <CategoryFilter />
      <PriceFilter />
      <SizeFilter sizes={sizes} />
      <ColorFilter colors={colors} />
      <BrandFilter brands={brands} />
      <FeatureProducts products={feature_products} />
    </div>
  );
};

export default ShopSidebar;
