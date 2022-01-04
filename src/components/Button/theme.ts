import { variants, size } from './types';

export const scaleVariants = {
  [size.SMALL]: {
    height: '32px',
    padding: '0 16px',
  },
  [size.MEDIUM]: {
    height: '48px',
    padding: '0 24px',
  },
  [size.LARGE]: {
    height: '54px',
    padding: '0 30px',
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
