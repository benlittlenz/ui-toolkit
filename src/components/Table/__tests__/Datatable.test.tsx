import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DataTable } from '../Datatable';

const dataMock = () => {
  return {
    columns: [{ name: 'Name', selector: (row: { name: string }) => row.name }],
    data: [
      {
        id: 1,
        name: 'Apple',
      },
      {
        id: 2,
        name: 'Zuchinni',
      },
    ],
  };
};

test('it should render an empty table', () => {
  const { container } = render(<DataTable data={[]} columns={[]} />);

  expect(container.firstChild).toMatchSnapshot();
});

test('it should render correctly with the selector function', () => {
  type TestData = {
    id: number;
    name: string;
  };
  const data: TestData[] = [{ id: 1, name: 'Joe Doe ' }];
  const columns = [{ name: 'Name', selector: (row: TestData) => row.name }];

  const { container } = render(<DataTable data={data} columns={columns} />);
  expect(container.firstChild).toMatchSnapshot();
});

describe('onSelectedRowsChange method', () => {
  test('it should call onSelectedRowsChange with correct values when select all has been selected', () => {
    const mock = dataMock();
    const updatedMock = jest.fn();

    render(
      <DataTable
        data={mock.data}
        columns={mock.columns}
        selectableRows
        onSelectedRowsChange={updatedMock}
      />
    );

    userEvent.click(screen.getByRole('checkbox', { name: 'select-all-rows' }));

    expect(updatedMock).toBeCalledWith({
      allSelected: true,
      selectedCount: 2,
      selectedRows: mock.data,
    });
  });
  test('it should call onSelectedRowsChange with correct values when all rows have been selected', () => {
    const mock = dataMock();
    const onSelectedRowsChange = jest.fn();

    render(
      <DataTable
        data={mock.data}
        columns={mock.columns}
        selectableRows
        onSelectedRowsChange={onSelectedRowsChange}
      />
    );

    userEvent.click(screen.getByRole('checkbox', { name: 'select-row-1' }));

    expect(onSelectedRowsChange).toBeCalledWith({
      allSelected: false,
      selectedCount: 1,
      selectedRows: [
        {
          id: 1,
          name: 'Apple',
        },
      ],
    });
    userEvent.click(screen.getByRole('checkbox', { name: 'select-row-2' }));

    expect(onSelectedRowsChange).toBeCalledWith({
      allSelected: true,
      selectedCount: 2,
      selectedRows: [
        {
          id: 2,
          name: 'Zuchinni',
        },
        {
          id: 1,
          name: 'Apple',
        },
      ],
    });
  });
});

test('it should update state when props change', () => {
  const mock = dataMock();
  const { container, rerender } = render(<DataTable data={mock.data} columns={mock.columns} />);

  rerender(<DataTable data={[{ id: 3, name: 'Something else' }]} columns={mock.columns} />);

  expect(container.firstChild).toMatchSnapshot();
});

describe('Datatable columns', () => {
  test('it renders correctly with columns/data', () => {
    const mock = dataMock();
    const { container } = render(<DataTable data={mock.data} columns={mock.columns} />);

    expect(container).toMatchSnapshot();
  });
});
