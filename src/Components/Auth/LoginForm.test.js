import { fireEvent, render, waitFor } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('Login describe statement', () => {
  test('Login form should be in the document', () => {
    const component = render(<LoginForm/>);
    const loginForm = component.container.querySelector('form');
    expect(loginForm).toBeInTheDocument();
  });

  test('Submit form should show errors messages', async () => {
    const { getByText, getByLabelText } = render(<LoginForm/>);
    const passwordInput = getByLabelText('Contraseña');
    const emailInput = getByLabelText('Email');
    const loginButton = getByText('Login');
    await waitFor(() => {
      fireEvent.submit(loginButton);
    });
    const emptyEmailErrorMessage = getByText('Por favor, ingresá tu correo electrónico.');
    expect(emptyEmailErrorMessage).toBeInTheDocument();
    const emptyPasswordErrorMessage = getByText('Por favor, ingresá tu contraseña.');
    expect(emptyPasswordErrorMessage).toBeInTheDocument();

    expect(passwordInput.value).toMatch('');
    await waitFor(() => {
      fireEvent.change(passwordInput, { target: { value: 'passwordTesting' } });
    });
    expect(passwordInput.value).toMatch('passwordTesting');

    expect(emailInput.value).toMatch('');
    await waitFor(() => {
      fireEvent.change(emailInput, { target: { value: 'emailTesting' } });
    });
    expect(emailInput.value).toMatch('emailTesting');
    await waitFor(() => {
      fireEvent.submit(loginButton);
    });
    const emailErrorMessage = getByText('Debe contener solo letras, números, guiones o puntos.');
    expect(emailErrorMessage).toBeInTheDocument();
    const passwordErrorMessage = getByText('Debe contener una longitud mínima de 6 caracteres, y al menos un número, una letra y un símbolo (por ejemplo @#$%).');
    expect(passwordErrorMessage).toBeInTheDocument();
  });
});
