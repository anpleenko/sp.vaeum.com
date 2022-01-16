import { render, screen } from '@testing-library/react';

import { menuLinks } from 'data/menuLinks';

import { MENU_BUTTON_DATA_TESTID } from '../constants';
import { AppBarMenu } from '../ui';

describe('HeaderMenu component', () => {
  it('should HeaderMenu get data-testid props', async () => {
    render(<AppBarMenu items={menuLinks[0].items} label={menuLinks[0].label} />);
    expect(screen.getByTestId(MENU_BUTTON_DATA_TESTID)).toBeInTheDocument();
  });
});
