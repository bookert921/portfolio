export interface DOMRef<T extends HTMLElement> {
  [key: string]: T;
}

export interface EmailData {
  service_id: string | undefined;
  template_id: string | undefined;
  user_id: string | undefined;
  accessToken: string | undefined;
  template_params: {
    name: string;
    message: string;
    email: string;
    subject: string;
  };
}

export type ErrorRecord<T> = Partial<Record<keyof T, string>>;

export interface FormOptions<T> {
  validations?: Validations<T>;
  initialValues?: Partial<T>;
  onSubmit?: () => void;
}

export interface FormState {
  name: string;
  email: string;
  message: string;
}

export interface NavbarProps {
  links: NavLink[];
}

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

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: string;
}

export interface SidebarProps extends NavMenuProps, NavbarProps {
  show: boolean;
  fixedNav: boolean;
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

export type Validations<T extends {}> = Partial<Record<keyof T, Validation>>;

export interface Validation {
  required?: {
    value: boolean;
    message: string;
  };
  pattern?: {
    value: string;
    message: string;
  };
  custom?: {
    isValid: (value: string) => boolean;
    message: string;
  };
}
