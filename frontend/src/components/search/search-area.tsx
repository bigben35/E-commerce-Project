"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { IProduct } from "@/types/product-d-t";
import ShopArea from "../shop/shop-area";

// prop type
type IProps = {
  product_data: IProduct[];
};

const SearchArea = ({ product_data }: IProps) => {
  const [productItems, setProductItems] = useState<IProduct[]>([
    ...product_data,
  ]);
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const searchText = searchParams.get("searchText");

  const categoryMatch = (item: IProduct) => {
    return (
      !category || item.category.toLowerCase().includes(category.toLowerCase())
    );
  };

  const titleMatch = (item: IProduct) => {
    return (
      !searchText || item.title.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  useEffect(() => {
    setProductItems(
      product_data.filter((item) => categoryMatch(item) && titleMatch(item))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("first", productItems);

  return (
    <>
      <ShopArea
        shop_col="col-xl-3 col-lg-3 col-md-6 col-sm-6 custom-col-10"
        product_data={productItems}
      />
    </>
  );
};

export default SearchArea;
