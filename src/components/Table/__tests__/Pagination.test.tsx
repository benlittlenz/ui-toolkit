import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Pagination } from '../Pagination';

test('it should render with default props', () => {
  const { container } = render(
    <Pagination
      currentPage={1}
      rowsPerPage={10}
      rowCount={40}
      onPageChange={jest.fn()}
      onChangeRowsPerPage={jest.fn()}
    />
  );
  console.log(container.firstChild);
  expect(container.firstChild).toMatchSnapshot();
});

describe('when clicking the first page button', () => {
  test('it should call onChangePage with correct args when current page is greater than 1', () => {
    const onChangePageMock = jest.fn();

    const { container } = render(
      <Pagination
        currentPage={4}
        rowsPerPage={10}
        rowCount={40}
        onPageChange={onChangePageMock}
        onChangeRowsPerPage={jest.fn()}
      />
    );
    userEvent.click(container.querySelector('button#pagination-first-page') as HTMLButtonElement);

    expect(onChangePageMock).toHaveBeenCalled();
  });
  test('it should not call onChangePage when current page is 1', () => {
    const onChangePageMock = jest.fn();

    const { container } = render(
      <Pagination
        currentPage={1}
        rowsPerPage={10}
        rowCount={40}
        onPageChange={onChangePageMock}
        onChangeRowsPerPage={jest.fn()}
      />
    );
    userEvent.click(container.querySelector('button#pagination-first-page') as HTMLButtonElement);

    expect(onChangePageMock).toBeCalledTimes(0);
  });
});

describe('when clicking the last page', () => {
  test('it should call onChangePage with correct args when current page is less than last page', () => {
    const onChangePageMock = jest.fn();

    const { container } = render(
      <Pagination
        currentPage={1}
        rowsPerPage={10}
        rowCount={40}
        onPageChange={onChangePageMock}
        onChangeRowsPerPage={jest.fn()}
      />
    );

    userEvent.click(container.querySelector('button#pagination-last-page') as HTMLButtonElement);

    expect(onChangePageMock).toHaveBeenCalledTimes(1);
  });

  test('it should NOT call onChangePage with correct args when current page is the last page', () => {
    const onChangePageMock = jest.fn();

    const { container } = render(
      <Pagination
        currentPage={4}
        rowsPerPage={10}
        rowCount={40}
        onPageChange={onChangePageMock}
        onChangeRowsPerPage={jest.fn()}
      />
    );

    userEvent.click(container.querySelector('button#pagination-last-page') as HTMLButtonElement);

    expect(onChangePageMock).toHaveBeenCalledTimes(0);
  });

  describe('when clicking the next page button', () => {
    test('it should call onChangePage with correct args, when current page is not the last page', () => {
      const onChangePageMock = jest.fn();
      const { container } = render(
        <Pagination
          currentPage={1}
          rowsPerPage={10}
          rowCount={40}
          onPageChange={onChangePageMock}
          onChangeRowsPerPage={jest.fn()}
        />
      );
      userEvent.click(container.querySelector('button#pagination-next-page') as HTMLButtonElement);

      expect(onChangePageMock).toHaveBeenCalledTimes(1);
    });

    test('it should call onChangePage with correct args, when current page is the last page', () => {
      const onChangePageMock = jest.fn();
      const { container } = render(
        <Pagination
          currentPage={4}
          rowsPerPage={10}
          rowCount={40}
          onPageChange={onChangePageMock}
          onChangeRowsPerPage={jest.fn()}
        />
      );
      userEvent.click(container.querySelector('button#pagination-next-page') as HTMLButtonElement);

      expect(onChangePageMock).toHaveBeenCalledTimes(0);
    });
  });
});
