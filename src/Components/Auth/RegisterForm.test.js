import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import LoginForm from './LoginForm';
// import user from '@testing-library/user-event';

describe('pruebas en render APP', () => {
  beforeEach(() => {
    render(<LoginForm/>);
  });
  it('existen inputs', () => {
    expect(screen.getByPlaceholderText(/ingrese su contraseña/i)).toBeInTheDocument();
    // expect(screen.getByPlaceholderText(/somosmas@example\.com/i)).toBeInTheDocument();
    // expect(screen.getByPlaceholderText(/contraseña/i)).toBeInTheDocument();
    // expect(screen.getByPlaceholderText(/repita/i)).toBeInTheDocument();
  });
  // it('existe submit', () => {
  // expect(screen.getByRole('button', { name: /crear cuenta/i })).toBeInTheDocument();
  // });
});
