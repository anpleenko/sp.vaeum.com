import { FC } from 'react';
import Typography from '@mui/material/Typography';

import { capitalizeFirstLetter } from 'shared/capitalizeFirstLetter';

import { LinksListProps } from './interface';
import { LinksListStyled, LinkStyled, LogoStyled, DumpStyled, CardStyled } from './styles';

export const LinksList: FC<LinksListProps> = ({ contentLinks }) => (
  <LinksListStyled>
    {contentLinks.map(({ url, logo, title }) => (
      <CardStyled sx={{ minWidth: 140 }} key={`${url}-${title}`}>
        <LinkStyled href={`http://${url}`} target="_blank" rel="noreferrer noopener" underline="none" color="inherit">
          {logo && <LogoStyled logo={logo} />}
          {!logo && <DumpStyled>{capitalizeFirstLetter(title)}</DumpStyled>}
          <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: '15px', fontWeight: 'bold' }}>
            {title}
          </Typography>
        </LinkStyled>
      </CardStyled>
    ))}
  </LinksListStyled>
);
