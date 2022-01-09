import { UseFormRegisterReturn, FieldError } from 'react-hook-form';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  registration?: Partial<UseFormRegisterReturn>;
  error?: FieldError | undefined;
}
