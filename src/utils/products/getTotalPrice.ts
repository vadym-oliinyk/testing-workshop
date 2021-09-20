export default function getTotalPrice(
  productsInCart: FormattedProduct[],
): number {
  const total = productsInCart.reduce(
    (acc, { price, inCartAmount }) => acc + inCartAmount * price,
    0,
  );

  return Number(total.toFixed(2));
}
