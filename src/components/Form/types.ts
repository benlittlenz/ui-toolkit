import { Input } from './Input';
import { Label } from './Label';
import { Textarea } from './Textarea';

export interface FieldComposition {
  Label: typeof Label;
  Input: typeof Input;
  Textarea: typeof Textarea;
}

export interface TextareaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  isResizable?: boolean;
}
