import { render } from '@testing-library/react';

import { Footer } from '../index';

describe('Footer component', () => {
  it('should footer contains link', async () => {
    const { getByText } = render(<Footer />);
    expect(getByText('Сообщить о проблеме')).toBeInTheDocument();
  });

  it('should footer have data-testid footerContainer', async () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId('footerContainer')).toBeInTheDocument();
  });

  it('should footer have date', async () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId('footerTime')).toBeInTheDocument();
  });

  it('should footer date equal current date', async () => {
    const { getByText } = render(<Footer />);
    const fullYear = new Date().getFullYear();

    expect(getByText(fullYear, { exact: false })).toBeInTheDocument();
  });
});
