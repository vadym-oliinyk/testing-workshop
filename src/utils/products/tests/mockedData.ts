export const MOCKED_NOT_FORMATTED_PRODUCTS: Product[] = [
  {
    id: 1,
    image: 'https://test.jpg',
    price: 300,
    title: 'Some test product',
  },
];

export const MOCKED_FORMATTED_PRODUCTS: FormattedProduct[] = [
  {
    id: 1,
    image: 'https://test.jpg',
    price: 300,
    title: 'Some test product',
    inCartAmount: 0,
  },
];

export const MOCKED_PRODUCTS: FormattedProduct[] = [
  {
    id: 1,
    image: 'https://test.jpg',
    price: 300,
    title: 'Some test product',
    inCartAmount: 1,
  },
  {
    id: 2,
    image: 'https://test.jpg',
    price: 200,
    title: 'Some test product',
    inCartAmount: 0,
  },
  {
    id: 3,
    image: 'https://test.jpg',
    price: 300,
    title: 'Some test product',
    inCartAmount: 1,
  },
];

export const MOCKED_PRODUCTS_IN_CART: FormattedProduct[] = [
  {
    id: 1,
    image: 'https://test.jpg',
    price: 300,
    title: 'Some test product',
    inCartAmount: 1,
  },
  {
    id: 3,
    image: 'https://test.jpg',
    price: 300,
    title: 'Some test product',
    inCartAmount: 1,
  },
];

export const MOCKED_PRODUCTS_WITHOUT_IN_CART: FormattedProduct[] = [
  {
    id: 1,
    image: 'https://test.jpg',
    price: 300,
    title: 'Some test product',
    inCartAmount: 0,
  },
  {
    id: 2,
    image: 'https://test.jpg',
    price: 200,
    title: 'Some test product',
    inCartAmount: 0,
  },
  {
    id: 3,
    image: 'https://test.jpg',
    price: 300,
    title: 'Some test product',
    inCartAmount: 0,
  },
];

export const MOCKED_PRODUCTS_WITH_CHANGED_AMOUNT: FormattedProduct[] = [
  {
    id: 1,
    image: 'https://test.jpg',
    price: 300,
    title: 'Some test product',
    inCartAmount: 1,
  },
  {
    id: 2,
    image: 'https://test.jpg',
    price: 200,
    title: 'Some test product',
    inCartAmount: 133,
  },
  {
    id: 3,
    image: 'https://test.jpg',
    price: 300,
    title: 'Some test product',
    inCartAmount: 1,
  },
];

export const MOCKED_PRODUCTS_WITH_FLOAT_PRICE: FormattedProduct[] = [
  {
    id: 1,
    image: 'https://test.jpg',
    price: 30.5555,
    title: 'Some test product',
    inCartAmount: 1,
  },
  {
    id: 2,
    image: 'https://test.jpg',
    price: 87.7123,
    title: 'Some test product',
    inCartAmount: 1,
  },
];

export const MOCKED_PRODUCTS_ADDED_TO_CART: FormattedProduct[] = [
  {
    id: 1,
    image: 'https://test.jpg',
    price: 300,
    title: 'Some test product',
    inCartAmount: 1,
  },
  {
    id: 2,
    image: 'https://test.jpg',
    price: 200,
    title: 'Some test product',
    inCartAmount: 1,
  },
  {
    id: 3,
    image: 'https://test.jpg',
    price: 300,
    title: 'Some test product',
    inCartAmount: 1,
  },
];

export const MOCKED_PRODUCTS_REMOVED_FROM_CART: FormattedProduct[] = [
  {
    id: 1,
    image: 'https://test.jpg',
    price: 300,
    title: 'Some test product',
    inCartAmount: 0,
  },
  {
    id: 2,
    image: 'https://test.jpg',
    price: 200,
    title: 'Some test product',
    inCartAmount: 0,
  },
  {
    id: 3,
    image: 'https://test.jpg',
    price: 300,
    title: 'Some test product',
    inCartAmount: 1,
  },
];
