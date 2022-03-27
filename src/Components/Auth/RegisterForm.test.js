/* eslint-disable no-trailing-spaces */
/* eslint-disable import/no-duplicates */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import RegisterForm from './RegisterForm';

describe('<Register/>', () => {
  it('there are inputs & submit', () => {
    render(<RegisterForm/>);
    expect(screen.getByRole('textbox', { name: /nombre completo/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/ingrese su contraseña/i)).toBeInTheDocument();
    expect(screen.getByText(/repetir contraseña/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /registrarme/i })).toBeInTheDocument();
  });

  it('Empty fields show error', async () => {
    render(<RegisterForm />);
    fireEvent.click(screen.getByRole('button', { name: /registrarme/i }));
    await waitFor(() => {
      expect(screen.getByText(/por favor ingrese un nombre/i));
      expect(screen.getByText(/por favor ingrese un email/i));
      expect(screen.getByText(/por favor ingrese una contraseña/i));
      expect(screen.getByText(/por favor repita su contraseña/i));
    });
  });

  it('the inputs are changed and the passwords are different', async () => {
    const onSubmit = jest.fn();
    render(<RegisterForm onSubmit={onSubmit} />);
    const nameInput = screen.getByRole('textbox', { name: /nombre completo/i });
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const pass1 = screen.getByPlaceholderText(/ingrese su contraseña/i);
    const pass2 = screen.getByPlaceholderText(/repita su contraseña/i); 
    user.type(nameInput, 'David');
    user.type(emailInput, 'david@gmail.com');
    user.type(pass1, '123456_');
    user.type(pass2, '12346_');
    expect(nameInput.value).toMatch('David');
    await waitFor(() => {
      fireEvent.change(nameInput, { target: { value: 'nombre' } });
      fireEvent.change(emailInput, { target: { value: 'email@.com' } });
      fireEvent.change(pass1, { target: { value: '12346_' } });
      fireEvent.change(pass2, { target: { value: '16_' } });
    });
    expect(nameInput.value).toMatch('nombre');
    expect(screen.getByText(/la contraseña debe coincidir/i)).toBeInTheDocument();
  });

  it('submit button disappears when user managed to register', async () => {
    const onSubmit = jest.fn();
    render(<RegisterForm onSubmit={onSubmit} />);
    const nameInput = screen.getByRole('textbox', { name: /nombre completo/i });
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const pass1 = screen.getByPlaceholderText(/ingrese su contraseña/i);
    const pass2 = screen.getByPlaceholderText(/repita su contraseña/i); 
    const submit = screen.getByRole('button', { name: /registrarme/i });
    user.type(nameInput, 'David');
    user.type(emailInput, 'david@gmail.com');
    user.type(pass1, '123456_');
    user.type(pass2, '12346_');
    expect(nameInput.value).toMatch('David');
    await waitFor(() => {
      fireEvent.change(nameInput, { target: { value: 'nombre' } });
      fireEvent.change(emailInput, { target: { value: 'email@.com' } });
      fireEvent.change(pass1, { target: { value: '12346_' } });
      fireEvent.change(pass2, { target: { value: '16_' } });
      fireEvent.click(submit);
    });
    expect(submit).not.toBeDisabled();
  });
});
