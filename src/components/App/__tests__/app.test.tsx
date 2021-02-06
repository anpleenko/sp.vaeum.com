import { render } from '@testing-library/react';

import { App } from '../index';

describe('Footer component', () => {
  it('should app contains header block', async () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('headerComponent')).toBeInTheDocument();
  });

  it('should app contains main block', async () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('appMainBlock')).toBeInTheDocument();
  });

  it('should app contains footer block', async () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('footerContainer')).toBeInTheDocument();
  });
});
