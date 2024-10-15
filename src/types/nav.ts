import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface NavItem {
  title: string;
  href: string;
  icon: IconDefinition;
  disabled?: boolean;
  external?: boolean;
  label?: string;
}

export interface MainNavItem extends NavItem {}
