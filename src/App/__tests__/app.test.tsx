import { render, screen } from '@testing-library/react';

import { contentLinks } from 'data/contentLinks';
import { menuLinks } from 'data/menuLinks';
import { popularLinks } from 'data/popularLinks';

import { App } from '..';

describe('App', () => {
  it('should render links', () => {
    render(<App />);

    [...popularLinks, ...contentLinks, ...menuLinks].forEach(({ title }) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });
});
