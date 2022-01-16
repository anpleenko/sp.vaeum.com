import { FC } from 'react';

import { AppBarMenu } from 'features/app-bar-menu';
import { AppTopBar } from 'features/app-top-bar';
import { Footer } from 'features/footer';
import { LinksList } from 'features/links-list';
import { contentLinks } from 'data/contentLinks';
import { menuLinks } from 'data/menuLinks';
import { popularLinks } from 'data/popularLinks';

import { ContainerStyled } from './styles';

const LinksListPage: FC = () => (
  <>
    <AppTopBar>
      {menuLinks.map(({ items, label }) => (
        <AppBarMenu key={label} items={items} label={label} data-testid="headerMenu" />
      ))}
    </AppTopBar>

    <ContainerStyled data-testid="appMainBlock">
      <LinksList contentLinks={[...popularLinks, ...contentLinks]} />
    </ContainerStyled>

    <Footer />
  </>
);

export default LinksListPage;
