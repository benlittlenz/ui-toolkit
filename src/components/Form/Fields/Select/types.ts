import { UseFormRegisterReturn, FieldError } from 'react-hook-form';

type Option = {
  label: React.ReactNode;
  value: string | number | string[];
};

export interface SelectProps extends React.ComponentPropsWithoutRef<'select'> {
  options: Option[];
  defaultValue?: string;
  placeholder?: string;
  registration?: Partial<UseFormRegisterReturn>;
  error?: FieldError | undefined;
}
