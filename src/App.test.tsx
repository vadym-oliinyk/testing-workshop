import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import App from './App';

jest.mock('axios', () => ({
  get: jest.fn(() => ({
    data: [
      {
        id: 1,
        image: 'https://test.jpg',
        price: 300,
        title: 'Some test product',
      },
    ],
  })),
}));

describe('<App />', () => {
  it('should match snapshot', async () => {
    let app: any;

    await act(async () => {
      app = render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );
    });

    expect(app.container).toMatchSnapshot();
  });
});
