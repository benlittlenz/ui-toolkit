import React from 'react';

import { Spinner } from '../Spinner/Spinner';

import { StyledButton } from './styles';
import { ButtonProps } from './types';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, variant, size, isFullWidth, isLoading = false, startIcon, endIcon, ...props },
    ref
  ) => {
    console.log('starticon', startIcon);
    return (
      <StyledButton
        ref={ref}
        type="button"
        variant={variant}
        size={size}
        isFullWidth={isFullWidth}
        {...props}
      >
        {isLoading && <Spinner size="small" />}
        {!isLoading && startIcon}
        <span className="mx-2">{children}</span> {!isLoading && endIcon}
      </StyledButton>
    );
  }
);

Button.defaultProps = {
  variant: 'secondary',
  size: 'medium',
  isFullWidth: false,
};

Button.displayName = 'Button';
