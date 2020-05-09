export interface MenuLinks {
  label: string;
  items: ContentLink[];
}

export interface ContentLink {
  description: string;
  title: string;
  url: string;
  logo?: string;
}
