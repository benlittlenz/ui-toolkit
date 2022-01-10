type IconProps =
  | { startIcon: React.ReactNode; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };

export type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  variant?: 'secondary' | 'primary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  isFullWidth?: boolean;
  isLoading?: boolean;
} & IconProps;

export const variants = {
  SECONDARY: 'secondary',
  PRIMARY: 'primary',
  DANGER: 'danger',
} as const;

export const size = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;
