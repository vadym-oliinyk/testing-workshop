export default function changeInCartAmount(
  products: FormattedProduct[],
  productId: number,
  amount: number,
): FormattedProduct[] {
  return products.map((product) =>
    product.id === productId
      ? {
          ...product,
          inCartAmount: amount,
        }
      : product,
  );
}
