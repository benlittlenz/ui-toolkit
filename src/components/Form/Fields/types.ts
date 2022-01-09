import { UseFormRegisterReturn } from 'react-hook-form';

import { Input } from './Input/Input';
import { Label } from './Label/Label';
import { Select } from './Select/Select';
import { Textarea } from './Textarea/Textarea';

export interface FieldComposition {
  Label: typeof Label;
  Input: typeof Input;
  Textarea: typeof Textarea;
  Select: typeof Select;
}

export interface TextareaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  isResizable?: boolean;
  registration?: Partial<UseFormRegisterReturn>;
}

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  registration?: Partial<UseFormRegisterReturn>;
}
