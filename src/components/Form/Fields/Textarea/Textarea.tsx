import React, { useContext } from 'react';

import { FieldContext } from '../context';
import { StyledTextArea } from '../styles';
import { TextareaProps } from '../types';

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ isResizable, registration, ...props }, ref) => {
    const id = useContext(FieldContext);

    return (
      <StyledTextArea ref={ref} id={id} isResizable={isResizable} {...props} {...registration} />
    );
  }
);

Textarea.displayName = 'Field.Textarea';

Textarea.defaultProps = {
  isResizable: true,
};
