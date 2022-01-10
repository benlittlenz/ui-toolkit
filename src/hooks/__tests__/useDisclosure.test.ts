import { renderHook, act } from '@testing-library/react-hooks';

import { useDisclosure } from '../useDisclosure';

test('it should open the state', () => {
  const { result } = renderHook(() => useDisclosure());

  expect(result.current.isOpen).toBe(false);

  act(() => {
    result.current.open();
  });

  expect(result.current.isOpen).toBe(true);
});
