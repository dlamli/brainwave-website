export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  px?: string;
  white?: boolean | undefined;
  onClick?: () => void;
}

export interface HeaderProps {
  children?: React.ReactNode;
}
