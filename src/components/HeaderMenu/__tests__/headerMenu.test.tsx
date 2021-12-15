import { render, screen } from '@testing-library/react';
import { flatMap } from 'lodash';

import { menuLinks } from 'data/menuLinks';

import { HeaderMenu } from '../index';

describe('HeaderMenu component', () => {
  it('should HeaderMenu get data-testid props', async () => {
    const dataTestId = 'headerMenu';
    render(<HeaderMenu dataTestid={dataTestId} menuLinks={menuLinks} />);
    expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
  });

  it('should HeaderMenu has items', async () => {
    const dataTestId = 'headerMenu';
    const menuLinksItems = flatMap(menuLinks, (menuLink) => menuLink.items);
    render(<HeaderMenu dataTestid={dataTestId} menuLinks={menuLinks} />);

    expect(screen.getAllByTestId('headerMenuLink')).toHaveLength(menuLinks.length);
    expect(screen.getAllByTestId('headerMenuLinkItem')).toHaveLength(menuLinksItems.length);
  });
});
