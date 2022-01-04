export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'secondary' | 'primary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  isFullWidth?: boolean;
}

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
