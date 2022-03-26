import { Route, MemoryRouter } from 'react-router-dom';
import { render, waitFor, fireEvent } from '@testing-library/react';
import NewsForm from './NewsForm';
import '@testing-library/jest-dom/extend-expect';

describe('News form test', () => {
  const renderComponentEdit = ({ id }) => render(
    <MemoryRouter initialEntries={[`/backoffice/news/create/${id}`]}>
      <Route path="/backoffice/news/create/:id">
        <NewsForm />
      </Route>
    </MemoryRouter>
  );

  const renderComponentCreate = () => render(
    <MemoryRouter initialEntries={['/backoffice/news/create']}>
      <Route path="/backoffice/news/create">
        <NewsForm />
      </Route>
    </MemoryRouter>
  );

  test('News create form should be in the document', () => {
    const { getByText } = renderComponentCreate();
    const title = getByText('Crear novedad');
    expect(title).toBeInTheDocument();
  });

  test('News edit form should be in the document', () => {
    const { getByText } = renderComponentEdit({ id: 1942 });
    const titleEdit = getByText('Editar novedad');
    expect(titleEdit).toBeInTheDocument();
  });

  test('Submit form should show errors messages', async () => {
    const wrapper = renderComponentCreate();
    const button = wrapper.getByText('Crear');

    await waitFor(() => {
      fireEvent.click(button);
    });

    const emptyTitleError = wrapper.getByLabelText('Título de la novedad');
    expect(emptyTitleError).toBeInTheDocument();
  });

  // test('Submit form POST', async () => {
  //   const wrapper = renderComponentCreate();
  //   const button = wrapper.getByText('Crear');

  //   const titleInput = wrapper.getByLabelText('Título de la novedad');
  //   // const descriptionInput = wrapper.getByLabelText('Título de la novedad');
  //   const category = wrapper.getByLabelText('Categoría');
  //   // const imageInput = wrapper.getByLabelText('Imagen');

  //   await waitFor(() => {
  //     fireEvent.change(titleInput, { target: { value: 'Nueva novedad por Test' } });
  //     // fireEvent.change(descriptionInput, { target: { value: 'Nueva novedad por Test' } });
  //     fireEvent.change(category, { target: { value: 'categoría por Test' } });
  //   });

  //   await waitFor(() => {
  //     fireEvent.click(button);
  //   });
  // });
});
