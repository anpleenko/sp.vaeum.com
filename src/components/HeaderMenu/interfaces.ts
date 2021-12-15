import { MenuLink } from 'data/interfaces';

export interface HeaderMenuProps {
  /** id для тестирования */
  dataTestid: string;
  /** список ссылок */
  menuLinks: MenuLink[];
}
