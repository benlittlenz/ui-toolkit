import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as z from 'zod';

import { Button } from '../../Button/Button';
import { Field } from '../Fields/Field';
import { Form } from '../Form';

const testData = {
  title: 'Hello World',
  body: 'Test body',
};

const schema = z.object({
  title: z.string().min(1, 'Required'),
  body: z.string().min(1, 'Required'),
});

test('it should render and submit a basic form', async () => {
  const handleSubmit = jest.fn();
  render(
    <Form<typeof testData, typeof schema> id="test-form" onSubmit={handleSubmit} schema={schema}>
      {({ register, formState }) => (
        <>
          <Field>
            <Field.Label>Title</Field.Label>
            <Field.Input
              placeholder="Title"
              error={formState.errors['title']}
              registration={register('title')}
            />
          </Field>
          <Field>
            <Field.Label>Body</Field.Label>
            <Field.Input
              placeholder="Body"
              error={formState.errors['body']}
              registration={register('body')}
            />
          </Field>
          <Button name="Submit" type="submit">
            Submit
          </Button>
        </>
      )}
    </Form>
  );
  userEvent.type(screen.getByLabelText(/title/i), testData.title);
  userEvent.type(screen.getByLabelText(/body/i), testData.body);
  userEvent.click(screen.getByRole('button', { name: 'Submit' }));

  await waitFor(() => expect(handleSubmit).toHaveBeenCalledWith(testData, expect.anything()));
});

test('it should fail submission if validation fails', async () => {
  const handleSubmit = jest.fn();
  render(
    <Form<typeof testData, typeof schema> id="test-form" onSubmit={handleSubmit} schema={schema}>
      {({ register, formState }) => (
        <>
          <Field>
            <Field.Label>Title</Field.Label>
            <Field.Input
              placeholder="Title"
              error={formState.errors['title']}
              registration={register('title')}
            />
          </Field>
          <Field>
            <Field.Label>Body</Field.Label>
            <Field.Input
              placeholder="Body"
              error={formState.errors['body']}
              registration={register('body')}
            />
          </Field>
          <Button name="Submit" type="submit">
            Submit
          </Button>
        </>
      )}
    </Form>
  );
  userEvent.click(screen.getByRole('button', { name: 'Submit' }));

  await screen.findAllByRole(/alert/i, { name: /required/i });

  expect(handleSubmit).toHaveBeenCalledTimes(0);
});
