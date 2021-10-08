import formatProducts from '../formatProducts';
import {
  MOCKED_NOT_FORMATTED_PRODUCTS,
  MOCKED_FORMATTED_PRODUCTS,
} from './mockedData';

describe('formatProducts()', () => {
  it('should correctly format products', () => {
    const result = formatProducts(MOCKED_NOT_FORMATTED_PRODUCTS);
    const expectedResult = MOCKED_FORMATTED_PRODUCTS;

    expect(result).toStrictEqual(expectedResult);
  });
});
