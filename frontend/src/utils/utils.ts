import product_data from "@/data/product-data";

export const calculateDiscountedPrice = (price: number, discount: number) => {
  return (price - (price * discount) / 100).toFixed(2);
};

export const convertToURL = (value: string): string => {
  // Replace spaces and special characters with hyphens
  const converted_value = value
    .toLowerCase()
    .replace(/&/g, 'and') // Replace '&' with 'and'
    .replace(/[^a-z0-9-]+/g, '-') // Replace non-alphanumeric characters with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens

  return converted_value;
}

// Get max price
export function maxPrice(): number {
  const max_price = product_data.reduce((max, product) => {
    return product.price > max ? product.price : max;
  }, 0);
  return max_price
}

