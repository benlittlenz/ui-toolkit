import React from 'react';

import { StyledSelect } from './styles';

type Option = {
  label: React.ReactNode;
  value: string | number | string[];
};

interface SelectProps extends React.ComponentPropsWithoutRef<'select'> {
  options: Option[];
  defaultValue?: string;
  placeholder?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { options, defaultValue, placeholder } = props;
  return (
    <StyledSelect ref={ref} placeholder={placeholder} value={defaultValue}>
      {options.map(({ label, value }) => (
        <option key={label?.toString()} value={value}>
          {label}
        </option>
      ))}
    </StyledSelect>
  );
});

Select.displayName = 'Select';

Select.defaultProps = {
  placeholder: 'Placeholder',
};
