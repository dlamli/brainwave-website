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
  className: string;
  id: string;
  crosses: string;
  crossesOffsset: string;
  customPaddings: string;
  children: React.ReactNode;
}
