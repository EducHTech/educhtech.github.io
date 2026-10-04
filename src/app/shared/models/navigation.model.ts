export interface NavLink {
  label: string;
  route: string;
}

/** Entrée du menu principal : un lien simple, ou un groupe avec sous-menu. */
export interface NavItem {
  label: string;
  route?: string;
  children?: readonly NavLink[];
}

export interface FooterColumn {
  title: string;
  links: readonly NavLink[];
}
