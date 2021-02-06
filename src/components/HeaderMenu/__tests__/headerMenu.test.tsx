import { render } from '@testing-library/react';
import { flatMap } from 'lodash';

import { menuLinks } from 'data/menuLinks';

import { HeaderMenu } from '../index';

describe('HeaderMenu component', () => {
  it('should HeaderMenu get data-testid props', async () => {
    const dataTestId = 'headerMenu';
    const { getByTestId } = render(<HeaderMenu dataTestid={dataTestId} menuLinks={menuLinks} />);
    expect(getByTestId(dataTestId)).toBeInTheDocument();
  });

  it('should HeaderMenu has items', async () => {
    const dataTestId = 'headerMenu';
    const menuLinksItems = flatMap(menuLinks, (menuLink) => menuLink.items);
    const { getAllByTestId } = render(<HeaderMenu dataTestid={dataTestId} menuLinks={menuLinks} />);

    expect(getAllByTestId('headerMenuLink')).toHaveLength(menuLinks.length);
    expect(getAllByTestId('headerMenuLinkItem')).toHaveLength(menuLinksItems.length);
  });
});
