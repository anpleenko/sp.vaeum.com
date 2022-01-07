import { FC } from 'react';

import { LinksList } from 'components/LinksList';
import { contentLinks } from 'data/contentLinks';
import { popularLinks } from 'data/popularLinks';

import { ContainerStyled } from './styles';

const LinksListPage: FC = () => {
  const linksList = popularLinks.concat(contentLinks);

  return (
    <ContainerStyled fluid data-testid="appMainBlock">
      <LinksList contentLinks={linksList} />
    </ContainerStyled>
  );
};

export default LinksListPage;
