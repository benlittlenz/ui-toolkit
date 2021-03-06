import React from 'react';
import * as z from 'zod';

import { Button } from './components/Button/Button';
import { Field } from './components/Form/Fields/Field';
import { Form } from './components/Form/Form';

type TestData = {
  title: string;
  body: string;
};

const schema = z.object({
  title: z.string().min(1, 'Required'),
  body: z.string().min(1, 'Required'),
});

function App() {
  return (
    <div className="App">
      <Form<TestData, typeof schema>
        id="test-form"
        onSubmit={(vals) => console.log('SUBMITTED', vals)}
        schema={schema}
      >
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
          </>
        )}
      </Form>
      <Button form="test-form" type="submit">
        Submit
      </Button>
    </div>
  );
}

export default App;
