import changeInCartAmount from './changeInCartAmount';

export default function removeFromCart(
  products: FormattedProduct[],
  productId: number,
): FormattedProduct[] {
  const newProducts = changeInCartAmount(products, productId, 0);
  return newProducts;
}
