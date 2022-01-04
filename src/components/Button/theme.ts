import { variants, size } from './types';

export const sizeVariants = {
  [size.SMALL]: {
    height: '32px',
    padding: '0.25rem 1rem',
    fontSize: '0.875rem',
  },
  [size.MEDIUM]: {
    height: '48px',
    padding: '0.25rem 1.25rem',
    fontSize: '1rem',
  },
  [size.LARGE]: {
    height: '54px',
    padding: '0.25rem 1.5rem',
    fontSize: '1.25rem',
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: '#0ea5e9',
    color: 'white',
  },
  [variants.SECONDARY]: {
    backgroundColor: '#6366f1',
    color: 'white',
  },
  [variants.DANGER]: {
    backgroundColor: '#e11d48',
    color: 'white',
  },
};
