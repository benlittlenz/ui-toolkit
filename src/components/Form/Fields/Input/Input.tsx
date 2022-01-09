import React, { useContext } from 'react';

import { FieldContext } from '../context';
import { StyledInput } from '../styles';
import { InputProps } from '../types';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ registration, ...props }, ref) => {
    const id = useContext(FieldContext);

    return <StyledInput ref={ref} id={id} {...props} {...registration} />;
  }
);

Input.displayName = 'Field.input';
