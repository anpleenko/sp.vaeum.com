import { render, screen } from '@testing-library/react';

import { Footer } from '../index';

describe('Footer component', () => {
  it('should footer contains link', async () => {
    render(<Footer />);
    expect(screen.getByText('Сообщить о проблеме')).toBeInTheDocument();
  });

  it('should footer have data-testid footerContainer', async () => {
    render(<Footer />);
    expect(screen.getByTestId('footerContainer')).toBeInTheDocument();
  });

  it('should footer have date', async () => {
    render(<Footer />);
    expect(screen.getByTestId('footerTime')).toBeInTheDocument();
  });

  it('should footer date equal current date', async () => {
    render(<Footer />);
    const fullYear = new Date().getFullYear();

    expect(screen.getByText(fullYear, { exact: false })).toBeInTheDocument();
  });
});
