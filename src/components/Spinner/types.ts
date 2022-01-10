export type SpinnerProps = {
  size?: 'small' | 'medium' | 'large' | 'extralarge';
};

export const sizeVariants = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA_LARGE: 'extralarge',
} as const;
