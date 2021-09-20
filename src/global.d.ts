declare interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

declare interface FormattedProduct extends Product {
  inCartAmount: number;
}
