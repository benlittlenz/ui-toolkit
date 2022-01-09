import { UseFormRegisterReturn, FieldError } from 'react-hook-form';

export interface TextareaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  isResizable?: boolean;
  registration?: Partial<UseFormRegisterReturn>;
  error?: FieldError | undefined;
}
