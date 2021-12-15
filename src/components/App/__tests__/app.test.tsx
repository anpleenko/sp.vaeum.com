import { render, screen } from '@testing-library/react';

import { App } from '../index';

describe('Footer component', () => {
  it('should app contains header block', async () => {
    render(<App />);
    expect(screen.getByTestId('headerComponent')).toBeInTheDocument();
  });

  it('should app contains main block', async () => {
    render(<App />);
    expect(screen.getByTestId('appMainBlock')).toBeInTheDocument();
  });

  it('should app contains footer block', async () => {
    render(<App />);
    expect(screen.getByTestId('footerContainer')).toBeInTheDocument();
  });
});
