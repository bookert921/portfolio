import { PaletteMode, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type DarkModeContextProps = {
  mode: PaletteMode;
  toggleTheme: (specificValue?: PaletteMode) => void;
};

export interface DOMRef<T> {
  [key: string]: T;
}

export type ErrorRecord<T> = Partial<Record<keyof T, string>>;

export type Feature = {
  title: string;
  text: string;
  icon: () => JSX.Element;
};

export type FormOptions<T> = {
  validations?: Validations<T>;
  initialValues?: Partial<T>;
  onSubmit?: () => void;
};

export type FormState = {
  name: string;
  email: string;
  message: string;
};

export type NavbarProps = {
  links: NavLink[];
};

export type NavLink = {
  name: string;
  url: string;
};

export type NavMenuProps = {
  sideOpen: boolean;
  setSideOpen: (openSide: boolean) => void;
};

export interface NavigationProps extends SidebarProps {
  mobile: boolean;
}

export type RefContextProps = {
  refs: DOMRef<any>;
  setRef: (node: any) => void;
};

export type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  article?: string;
};

export interface SidebarProps extends NavMenuProps, NavbarProps {
  show: boolean;
  fixedNav: boolean;
}

export type SiteConfig = {
  pageLinks: NavLink[];
  workHistory: WorkHistory[];
  socialMedia: SocialMedia[];
  features: Feature[];
};

export interface SocialMedia extends NavLink {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
}

export type StorageProps<T> = {
  key: string;
  item: T;
  storageObject: Storage;
};

export type ToggleOptions<T> = {
  initialValue: T;
  alternateValue?: T;
};

export type Validation = {
  required: {
    value: boolean;
    message: string;
  };
  pattern: {
    value: string;
    message: string;
  };
  custom: {
    isValid: (value: string) => boolean;
    message: string;
  };
};

export type Validations<T extends {}> = Partial<
  Record<keyof T, Partial<Validation>>
>;

export interface WorkCardProps {
  workHistory: WorkHistory;
}

export type WorkHistory = {
  company: string;
  subtitle: string;
  description: string;
  url: string;
};
