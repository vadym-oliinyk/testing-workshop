import changeInCartAmount from './changeInCartAmount';

export default function addToCart(
  products: FormattedProduct[],
  productId: number,
): FormattedProduct[] {
  const newProducts = changeInCartAmount(products, productId, 1);
  return newProducts;
}
