import React, { useContext } from 'react';

import { FieldContext } from '../context';
import { FieldWrapper } from '../Wrapper';

import { StyledInput } from './styles';
import { InputProps } from './types';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ registration, error, ...props }, ref) => {
    const id = useContext(FieldContext);

    return (
      <FieldWrapper error={error}>
        <StyledInput ref={ref} id={id} {...props} {...registration} />
      </FieldWrapper>
    );
  }
);

Input.displayName = 'Field.input';
