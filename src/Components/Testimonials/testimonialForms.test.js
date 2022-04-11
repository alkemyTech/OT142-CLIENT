import { render, waitFor, fireEvent } from '@testing-library/react';
import TestimonialForm from './TestimonialsForm';
import '@testing-library/jest-dom/extend-expect';
import { Route, MemoryRouter } from 'react-router-dom';

describe('Testimonial form test', () => {
  // Para que el test funcione tenemos que comentar el CKEditor de NewsForm
  const renderComponentCreate = () => render(
    <MemoryRouter initialEntries={['/testimonialsForms']}>
      <Route path="/testimonialsForms">
        <TestimonialForm />
      </Route>
    </MemoryRouter>
  );
  const renderComponentEdit = () => render(
    <MemoryRouter initialEntries={['/testimonialsForms']}>
      <Route path="/testimonialsForms">
        <TestimonialForm testimonialData={ { name: 'testing', description: 'testing', image: '' } } />
      </Route>
    </MemoryRouter>
  );
  test('Testimonial create form should be in the document', () => {
    const { getByText } = renderComponentCreate();
    const title = getByText('Crear testimonial');
    expect(title).toBeInTheDocument();
  });

  test('Testimonials edit form should be in the document', () => {
    const { getByText } = renderComponentEdit();
    const titleEdit = getByText('Editar testimonial');
    expect(titleEdit).toBeInTheDocument();
  });

  test('Submit form should show errors messages', async () => {
    const wrapper = renderComponentCreate();
    const button = wrapper.getByText('Enviar');

    await waitFor(() => {
      fireEvent.click(button);
    });

    const emptyTitle = wrapper.getByText('Nombre requerido');
    expect(emptyTitle).toBeInTheDocument();

    const emptyContent = wrapper.getByText('Descripción requerida');
    expect(emptyContent).toBeInTheDocument();

    const emptyImage = wrapper.getByText('Imagen requerida');
    expect(emptyImage).toBeInTheDocument();
  });
});
