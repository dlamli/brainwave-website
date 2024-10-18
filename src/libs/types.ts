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
export interface SectionProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  crosses?: boolean;
  crossesOffsset?: string;
  customPaddings?: boolean;
}

export interface GeneratingProps {
  className?: string;
}

export interface NotificationProps {
  className?: string;
  title?: string;
}

export interface CompanyLogosProps {
  className?: string;
}
