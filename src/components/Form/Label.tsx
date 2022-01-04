import React from 'react';

export const Label = React.forwardRef<HTMLLabelElement, React.ComponentPropsWithoutRef<'label'>>(( props, ref ) => {
  return <label {...props} />
})

Label.displayName = 'Field.label';
