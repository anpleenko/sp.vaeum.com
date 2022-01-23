import { render, screen } from '@testing-library/react';

import { menuLinks } from 'data/menuLinks';

import { HEADER_MENU } from '../constants';
import { AppBarMenu } from '../ui';

describe('HeaderMenu component', () => {
  it('should HeaderMenu get data-testid props', async () => {
    render(<AppBarMenu menuLinks={menuLinks} />);

    expect(screen.getByTestId(HEADER_MENU)).toBeInTheDocument();
  });
});
