import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, waitFor } from '@testing-library/react';
import ActivitiesForm from './ActivitiesForm';

describe('Activities form test', () => {
  test('Activities form should be in the document', () => {
    const { getByText } = render(<ActivitiesForm />);
    const form = getByText('Formulario Edición / Creación de Actividades');
    expect(form).toBeInTheDocument();
  });

  test('Submit form should show errors messages', async () => {
    const { getByText } = render(<ActivitiesForm />);

    const button = getByText('Enviar');

    await waitFor(() => {
      fireEvent.click(button);
    });

    const emptyNameError = getByText('Nombre requerido');
    expect(emptyNameError).toBeInTheDocument();

    const emptyImageError = getByText('Imagen requerida');
    expect(emptyImageError).toBeInTheDocument();
  });

  test('Image must be png or jpg', async () => {
    const { getByLabelText } = render(<ActivitiesForm />);

    const imageInput = getByLabelText('Imagen');

    const fakeFilePNG = new File(['test'], 'test.png', { type: 'image/png' });
    // const fakeFileJPG = new File(['test2'], 'test2.jpg', { type: 'image/jpg' });

    await waitFor(() => {
      fireEvent.change(imageInput, {
        target: { files: [fakeFilePNG] }
      });
    });
    // expect(imageInput.files[0].name).toContain('.jpg');
    expect(imageInput.files[0].name).toContain('.png');
  });
});
