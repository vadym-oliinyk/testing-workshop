import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import Header from './Header';

describe('<Header />', () => {
  it('should match snapshot for /', () => {
    const { container } = render(
      <MemoryRouter>
        <Header inCartAmount={2} />
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot for /cart', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/cart']}>
        <Header inCartAmount={2} />
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
