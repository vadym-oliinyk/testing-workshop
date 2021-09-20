export default function getProductsInCart(
  products: FormattedProduct[],
): FormattedProduct[] {
  return products.filter(({ inCartAmount }) => inCartAmount > 0);
}
