import React from 'react';

interface CheckboxProps {
  name: string;
  checked?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export function Checkbox({
  name,
  checked = false,
  onClick = () => null,
}: CheckboxProps): JSX.Element {
  return (
    <input
      type="checkbox"
      name={name}
      checked={checked}
      aria-checked={checked}
      onClick={onClick}
      aria-label={name}
      onChange={() => null} // Prevent uncontrolled checkbox warnings
    />
  );
}
