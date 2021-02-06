import { FC } from 'react';

import { capitalizeFirstLetter } from 'helpers/capitalizeFirstLetter';

import { LinksListProps } from './interface';
import { LinksListStyled, ListItemStyled, LinkStyled, LogoStyled, DumpStyled, LinkTextStyled } from './styles';

export const LinksList: FC<LinksListProps> = ({ contentLinks }) => (
  <LinksListStyled>
    {contentLinks.map(({ url, logo, title }) => (
      <ListItemStyled key={`${url}-${title}`}>
        <LinkStyled href={url} target="_blank" rel="noreferrer noopener">
          {logo && <LogoStyled logo={logo} />}
          {!logo && <DumpStyled>{capitalizeFirstLetter(title)}</DumpStyled>}
          <LinkTextStyled>{title}</LinkTextStyled>
        </LinkStyled>
      </ListItemStyled>
    ))}
  </LinksListStyled>
);
