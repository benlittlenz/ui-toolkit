import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Checkbox } from '../Checkbox/Checkbox';

test('it should render the checkbox component and matches the snapshot', () => {
  const { container } = render(<Checkbox name="test" />);

  console.log('container', container);
  expect(container).toMatchSnapshot();
});

test('it should handle onClick', () => {
  const mockClick = jest.fn();
  render(<Checkbox name="test" onClick={mockClick} />);

  userEvent.click(screen.getByRole('checkbox', { name: 'test' }));
  expect(mockClick).toHaveBeenCalled();
});
