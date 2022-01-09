import React, { useContext } from 'react';

import { FieldContext } from '../context';

import { StyledLabel } from './styles';

export const Label = React.forwardRef<HTMLLabelElement, React.ComponentPropsWithoutRef<'label'>>(
  (props, ref) => {
    const id = useContext(FieldContext);

    return <StyledLabel ref={ref} htmlFor={id} {...props} />;
  }
);

Label.displayName = 'Field.label';
