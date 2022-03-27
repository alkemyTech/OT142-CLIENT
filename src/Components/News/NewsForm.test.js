// import { Route, MemoryRouter } from 'react-router-dom';
// import { render, waitFor, fireEvent } from '@testing-library/react';
// import { render } from '@testing-library/react';
// import NewsForm from './NewsForm';
import '@testing-library/jest-dom/extend-expect';

// **** INICIAMOS LOS TESTEOS
describe('News form test', () => {
  // Para que el test funcione tenemos que comentar el CKEditor de NewsForm

  // **** RENDER DEL COMPONENTE SI LLEGA UN ID PARA EDITAR
  // const renderComponentEdit = ({ id }) => render(
  //   <MemoryRouter initialEntries={[`/backoffice/news/create/${id}`]}>
  //     <Route path="/backoffice/news/create/:id">
  //       <NewsForm />
  //     </Route>
  //   </MemoryRouter>
  // );

  // **** RENDER DEL COMPONENTE SIN ID PARA CREAR
  // const renderComponentCreate = () => render(
  //   <MemoryRouter initialEntries={['/backoffice/news/create']}>
  //     <Route path="/backoffice/news/create">
  //       <NewsForm />
  //     </Route>
  //   </MemoryRouter>
  // );

  // **** TEST DEL COMPONENTE, SI EL TITULO ES CREAR NOVEDAD, ES UN COMPONENTE PARA CREAR
  // test('News create form should be in the document', () => {
  //   const { getByText } = renderComponentCreate();
  //   const title = getByText('Crear novedad');
  //   expect(title).toBeInTheDocument();
  // });

  // **** TEST DEL COMPONENTE, SI EL TITULO ES EDITAR NOVEDAD, ES UN COMPONENTE PARA EDITAR
  // test('News edit form should be in the document', () => {
  //   const { getByText } = renderComponentEdit({ id: 1942 });
  //   const titleEdit = getByText('Editar novedad');
  //   expect(titleEdit).toBeInTheDocument();
  // });

  // **** TEST DEL COMPONENTE CUANDO HACEN CLICK PARA VER QUE LOS CAMPOS VACIOS TIREN EL ERROR.
  // test('Submit form should show errors messages', async () => {
  //   const wrapper = renderComponentCreate();
  //   const button = wrapper.getByText('Crear');

  //   await waitFor(() => {
  //     fireEvent.click(button);
  //   });

  //   const emptyTitle = wrapper.getByText('Por favor ingrese un título');
  //   expect(emptyTitle).toBeInTheDocument();

  //   const emptyCategory = wrapper.getByText('Por favor ingrese una categoría');
  //   expect(emptyCategory).toBeInTheDocument();

  //   const emptyContent = wrapper.getByText('Por favor ingrese una descripción corta');
  //   expect(emptyContent).toBeInTheDocument();

  //   const emptyImage = wrapper.getByText('Por favor cargue un logo o imagen');
  //   expect(emptyImage).toBeInTheDocument();
  // });
});
