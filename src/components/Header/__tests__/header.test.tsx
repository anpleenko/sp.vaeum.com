import { render } from '@testing-library/react';

import { Header } from '../index';

describe('Footer component', () => {
  it('should header contains logo', async () => {
    const { getByText } = render(<Header />);
    expect(getByText('Bookmarks')).toBeInTheDocument();
  });

  it('should header component has data-testid attr', async () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('headerComponent')).toBeInTheDocument();
  });

  it('should header contains logo, and logo has data-testid attr', async () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('headerLogo')).toBeInTheDocument();
  });

  it('should header contains menu', async () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('headerMenu')).toBeInTheDocument();
  });
});
