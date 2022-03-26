/* eslint-disable import/no-duplicates */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import { fireEvent, render, screen, wait, waitFor, click, getByLabelText, getByText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import LoginForm from './LoginForm';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import RegisterForm from './RegisterForm';

describe('<Register/>', () => {
  it('existen inputs & submit', () => {
    render(<RegisterForm/>);
    expect(screen.getByRole('textbox', { name: /nombre completo/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/ingrese su contraseña/i)).toBeInTheDocument();
    expect(screen.getByText(/repetir/i)).toBeInTheDocument();
    expect(screen.getByText(/he leído y acepto\./i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /registrarme/i })).toBeInTheDocument();
  });
  it('Campos vacíos largan error', async () => {
    const onSubmit = jest.fn();
    render(<RegisterForm onSubmit={onSubmit} />);
    fireEvent.click(screen.getByRole('button', { name: /registrarme/i }));
    await waitFor(() => {
      expect(screen.getByText(/por favor ingrese un nombre/i));
      expect(screen.getByText(/por favor ingrese un email/i));
      expect(screen.getByText(/por favor ingrese una contraseña/i));
      expect(screen.getByText(/por favor repita su contraseña/i));
    });
  });
  it('Comprobar que funcione check', async () => {
    const onSubmit = jest.fn();
    render(<RegisterForm onSubmit={onSubmit} />);
    const radio = screen.getByText(/he leído y acepto\./i);
    userEvent.click(radio);
    await waitFor(() => {
      // expect(radio).toBeChecked();
    });
  });
});
