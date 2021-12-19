import { render, screen } from '@testing-library/react';

import { Header } from '../index';

describe('Footer component', () => {
  it('should header contains logo', async () => {
    render(<Header />);
    expect(screen.getByText('Bookmarks')).toBeInTheDocument();
  });

  it('should header component has data-testid attr', async () => {
    render(<Header />);
    expect(screen.getByTestId('headerComponent')).toBeInTheDocument();
  });

  it('should header contains logo, and logo has data-testid attr', async () => {
    render(<Header />);
    expect(screen.getByTestId('headerLogo')).toBeInTheDocument();
  });

  it('should header contains menu', async () => {
    render(<Header />);
    expect(screen.getByTestId('headerMenu')).toBeInTheDocument();
  });
});
