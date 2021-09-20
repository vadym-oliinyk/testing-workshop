export default function formatProducts(
  products: Product[],
): FormattedProduct[] {
  return products.map((product) => ({
    ...product,
    inCartAmount: 0,
  }));
}
