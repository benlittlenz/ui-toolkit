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

test('it should close the state', () => {
  const { result } = renderHook(() => useDisclosure());

  expect(result.current.isOpen).toBe(false);

  act(() => {
    result.current.close();
  });

  expect(result.current.isOpen).toBe(false);
});

test('it should toggle the state', () => {
  const { result } = renderHook(() => useDisclosure());

  expect(result.current.isOpen).toBe(false);

  act(() => {
    result.current.toggle();
  });

  expect(result.current.isOpen).toBe(true);
});

test('it should define initial state', () => {
  const { result } = renderHook(() => useDisclosure(true));

  expect(result.current.isOpen).toBe(true);

  act(() => {
    result.current.toggle();
  });

  expect(result.current.isOpen).toBe(false);
});
