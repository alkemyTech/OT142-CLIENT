/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('<ContactForm/> tests', () => {
  test('ContactForm should be in the document', () => {
    const component = render(<ContactForm />);
    const contactForm = component.container.querySelector('form');
    expect(contactForm).toBeInTheDocument();
  });

  test('inputs and button exist', () => {
    render(<ContactForm />);
    expect(screen.getByRole('textbox', { name: /nombre/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /teléfono/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Mensaje')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument();
  });

  test('empty fields show error', async () => {
    render(<ContactForm />);
    fireEvent.click(screen.getByRole('button', { name: /enviar/i }));
    await waitFor(() => {
      expect(screen.getByText(/por favor ingrese un nombre/i));
      expect(screen.getByText(/por favor ingrese un email/i));
      expect(screen.getByText(/debe contener al menos 8 caracteres/i));
      expect(screen.getByText(/por favor ingrese un mensaje/i));
    });
  });
});
