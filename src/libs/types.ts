export type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  px?: string;
  white?: boolean | undefined;
  onClick?: () => void;
};

export type HeaderProps = {
  children?: React.ReactNode;
};
export type SectionProps = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  crosses?: boolean;
  crossesOffsset?: string;
  customPaddings?: boolean;
};

export type GeneratingProps = {
  className?: string;
};

export type NotificationProps = {
  className?: string;
  title?: string;
};

export type CompanyLogosProps = {
  className?: string;
};

export type HeadingProps = {
  className?: string;
  title?: string;
};
