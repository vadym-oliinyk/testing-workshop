// Incorrect

// import getProducts from './getProducts';

// describe('getProducts()', () => {
//   it('should send request to /cats.json', async () => {
//     const request = await getProducts();

//     expect(request);
//   });
// });

// Correct

// import axios from 'axios';

// jest.mock('axios', () => ({
//   get: jest.fn(() => ({
//     data: null,
//   })),
// }));

// describe('getProducts()', () => {
//   it('should send GET request to /cats.json', async () => {
//     await getProducts();

//     expect(axios.get).toBeCalledWith('/cats.json');
//   });
// });
