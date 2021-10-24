import formatProducts from '../formatProducts';

const MOCKED_PRODUCTS: Product[] = [
  {
    id: 1,
    image: 'https://test.jpg',
    price: 300,
    title: 'Some test product',
  },
];

const MOCKED_FORMATTED_PRODUCTS: FormattedProduct[] = [
  {
    id: 1,
    image: 'https://test.jpg',
    price: 300,
    title: 'Some test product',
    inCartAmount: 0,
  },
];

describe('formatProducts()', () => {
  it('should correctly format products', () => {
    const result = formatProducts(MOCKED_PRODUCTS);
    const expectedResult = MOCKED_FORMATTED_PRODUCTS;

    expect(result).toStrictEqual(expectedResult);
  });
});
