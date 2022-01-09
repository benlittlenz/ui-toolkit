import * as React from 'react';
import { FieldError } from 'react-hook-form';
import styled from 'styled-components';

type FieldWrapperProps = {
  children: React.ReactNode;
  error?: FieldError | undefined;
};

const Wrapper = styled.div`
  margin-top: 4px;
`;

const ErrorMessage = styled.div`
  font-size: 11px;
  font-weight: 500;
  color: red;
`;

export const FieldWrapper = (props: FieldWrapperProps) => {
  const { error, children } = props;
  return (
    <Wrapper>
      {children}
      {error?.message && (
        <ErrorMessage role="alert" aria-label={error.message}>
          {error.message}
        </ErrorMessage>
      )}
    </Wrapper>
  );
};
