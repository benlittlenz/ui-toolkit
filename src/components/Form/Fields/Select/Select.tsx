import React from 'react';

import { FieldWrapper } from '../Wrapper';

import { StyledSelect } from './styles';
import { SelectProps } from './types';

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { options, error, defaultValue, registration, placeholder } = props;
  return (
    <FieldWrapper error={error}>
      <StyledSelect ref={ref} placeholder={placeholder} value={defaultValue} {...registration}>
        {options.map(({ label, value }) => (
          <option key={label?.toString()} value={value}>
            {label}
          </option>
        ))}
      </StyledSelect>
    </FieldWrapper>
  );
});

Select.displayName = 'Select';

Select.defaultProps = {
  placeholder: 'Placeholder',
};
