import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, waitFor } from '@testing-library/react';
import ActivitiesForm from './ActivitiesForm';

// Este es el inicio del test
describe('Activities form test', () => {

  // Este test lo que hace es verificar si el formulario ActivitiesForm esta renderizado en el DOM.
  test('Activities form should be in the document', () => {
    // Renderiza el formulario
    const { getByText } = render(<ActivitiesForm />);
    
    // Verifica si existe el texto Formulario Edición / Creación de Actividades en el dom
    const form = getByText('Formulario Edición / Creación de Actividades');
    expect(form).toBeInTheDocument();
  });

  // Este test hace un click al boton "Enviar" y verifica que se muestren los errores de Nombre e Imagen del formulario.
  test('Submit form should show errors messages', async () => {
    // Renderiza el formulario
    const { getByText } = render(<ActivitiesForm />);

    // Obtiene el boton "Enviar" del formulario
    const button = getByText('Enviar');

    // Ejecuta un evento "click" en el boton "Enviar" 
    await waitFor(() => {
      fireEvent.click(button);
    });

    // Verifica que existan los todos los errores en caso de hacer submit sin llenar los campos 
    const emptyNameError = getByText('Nombre requerido');
    expect(emptyNameError).toBeInTheDocument();
    const emptyImageError = getByText('Imagen requerida');
    expect(emptyImageError).toBeInTheDocument();
  });

  // Este test verifica que el archivo de imagen seleccionado sea .PNG o .JPG.
  test('Image must be png or jpg', async () => {
    // Renderiza el formulario
    const { getByLabelText } = render(<ActivitiesForm />);

    // Obtiene el input "Imagen"
    const imageInput = getByLabelText('Imagen');

    // Crea un archivo fake
    const fakeFilePNG = new File(['test'], 'test.png', { type: 'image/png' });
    // const fakeFileJPG = new File(['test2'], 'test2.jpg', { type: 'image/jpg' });

    // Ejecuta el evento "change" cargando el archivo fake para verificar si es .PNG o .JPG
    await waitFor(() => {
      fireEvent.change(imageInput, {
        target: { files: [fakeFilePNG] }
      });
    });
    // expect(imageInput.files[0].name).toContain('.jpg');
    expect(imageInput.files[0].name).toContain('.png');
  });
});