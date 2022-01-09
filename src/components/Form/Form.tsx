// import { zodResolver } from '@hookform/resolvers/zod';
import * as React from 'react';
import { useForm, UseFormReturn, SubmitHandler } from 'react-hook-form';
import { ZodType, ZodTypeDef } from 'zod';

type FormProps<TFormValues, Schema> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  id?: string;
  schema?: Schema;
};

export const Form = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<unknown, ZodTypeDef, unknown>
>({
  onSubmit,
  children,
  id,
  schema,
}: FormProps<TFormValues, Schema>) => {
  console.log('schema', schema);
  const methods = useForm<TFormValues>();
  return (
    <form id={id} onSubmit={methods.handleSubmit(onSubmit)}>
      {children(methods)}
    </form>
  );
};
