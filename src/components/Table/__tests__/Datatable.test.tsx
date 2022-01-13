import { render } from '@testing-library/react';

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
