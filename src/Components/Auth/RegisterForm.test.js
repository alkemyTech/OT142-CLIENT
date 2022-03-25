/* eslint-disable no-trailing-spaces */
/* eslint-disable no-undef */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-vars */

import React, { lazy } from 'react';
import { fireEvent, getAllByLabelText, render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import RegisterForm from './RegisterForm';




describe('Se esta viendo el submit register', () => {
  const onSubmit = jest.fn();
  beforeEach(() => {
    onSubmit.mockClear();
    render(<RegisterForm onSubmit={onSubmit} />);
  });
  it('inputs', async () => {
    user.type(getName, 'David');
    user.type(getEmail, 'david@gmail.com');
    user.type(getPass, '123456_');
    user.type(getPass2, '123456_');
    const checkbox = screen.getByText(/he leído y acepto\./i);
    user.click(checkbox);

    user.click(screen.getByRole('button', { name: /registrarme/i }));    
    await waitFor(() => {    
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
    // expect(onSubmit).toHaveBeenCalledWith({ lazy: true });
  });
});

function getName () {
  return screen.getByRole('textbox', { name: /nombre completo/i });  
}
function getEmail () {
  return screen.getByRole('textbox', { name: /email/i });
}
function getPass () {
  return screen.getByLabelText(/contraseña/i);
}
function getPass2 () {
  return screen.getByLabelText(/repetir contraseña/i);
}









// describe('Pruebas en <RegisterForm/> ', () => {
//   it('Muestra mensaje de error si campos vacíos', async () => {
//     const handleSubmit = jest.fn();
//     render(<RegisterForm onSubmit={handleSubmit}/>);
//     userEvent.click(screen.getByTestId('registerButton'));
    
//     await waitFor(() => {
//       expect(screen.getByText('Por favor ingrese un nombre')).toBeInTheDocument();
//       expect(screen.getByText('Por favor ingrese un email')).toBeInTheDocument();
//       expect(screen.getByText('Por favor ingrese una contraseña')).toBeInTheDocument();
//       expect(screen.getByText('Por favor repita su contraseña')).toBeInTheDocument();
//     });
//   });
// });

// describe('pruebas de errores 2', () => {
//   it('muestra', async () => {
//     const { getByText, getByLabelText } = render(<RegisterForm/>);
//     const emailInput = getByLabelText('Email');
//     const registerButton = getByText('Registrarme');
    
//     // await waitFor(() => {
//     //   fireEvent.submit(registerButton);
//     // });
//     // expect(emailInput.value).toMatch('');

//     await waitFor(() => {
//       fireEvent.change(emailInput, { target: { value: '' } });
//     });
//     await waitFor(() => {
//       fireEvent.submit(registerButton);
//     });
//     expect(screen.getByText('Por favor ingrese un email')).toBeInTheDocument();
//     // await waitFor(() => {
//     //   fireEvent.change(emailInput, { target: { value: 'email@Testing.com' } });
//     // });
//     // expect(emailInput.value).toMatch('email@Testing.com');
//     // await waitFor(() => {
//     //   fireEvent.submit(registerButton);
//     //   expect(screen.getByText('Formato de email inválido')).toBeInTheDocument();
//     // });
//   });
// });




// describe('pruebas de errores 4', () => {
//   it('If required fields are valid, should dispatch onSubmit', async () => {
//     const { getByText, getByLabelText } = render(<RegisterForm/>);
//     const leido = getByText('He leído y acepto.');
//     console.log(leido);
//   });
// });















//  await waitFor(() => {
//       fireEvent.submit(registerButton);
//       expect(screen.getByText('Formato de email inválido')).toBeInTheDocument();
//     });

// eslint-disable-next-line no-undef
// describe('Pruebas en <RegisterForm/> ', () => {
// it('Muestra mensaje de error si campos vacíos', async () => {
//   const handleSubmit = jest.fn();
//   render(<RegisterForm onSubmit={handleSubmit}/>);
//   userEvent.click(screen.getByTestId('registerButton'));
    
//   await waitFor(() => {
//     expect(screen.getByText('Por favor ingrese un nombre')).toBeInTheDocument();
//     expect(screen.getByText('Por favor ingrese un apellido')).toBeInTheDocument();
//     expect(screen.getByText('Por favor ingrese un email')).toBeInTheDocument();
//     expect(screen.getByText('Por favor ingrese una contraseña')).toBeInTheDocument();
//     expect(screen.getByText('Por favor ingrese una contraseña')).toBeInTheDocument();
//   });
// });
// it('prevenir submit si no estan validados', async () => {
//   const handleSubmit = jest.fn();
//   render(<RegisterForm onSubmit={handleSubmit}/>);
//   userEvent.click(screen.getByTestId('registerButton'));
//   await waitFor(() => {
//     expect(handleSubmit).not.toHaveBeenCalled();
//   });
// });
// it('campos validados hacer submit', async () => {
//   const handleSubmit = jest.fn();
//   render(<RegisterForm onSubmit={handleSubmit}/>);

//   fireEvent.input(screen.getByTestId('nameTest'), { target: { value: 'joel' } });
//   fireEvent.input(screen.getByTestId('lastNameTest'), { target: { value: 'porpatto' } });
//   fireEvent.input(screen.getByTestId('emailTest'), { target: { value: 'joel@gmail.com' } });
//   fireEvent.input(screen.getByTestId('pasTest'), { target: { value: 'asdasd@34534' } });
//   fireEvent.input(screen.getByTestId('pas2Test'), { target: { value: 'asdasd@34534' } });
//   fireEvent.click(screen.getByTestId('registerButton'));
//   await waitFor(() => {
//     expect(handleSubmit).toHaveBeenCalled();
//   });
// });
// it('should input', () => {
//   render(<RegisterForm/>);
//   expect(screen.getByLabelText(/name-input/i));
// });
// it('should submit', () => {
//   render(<RegisterForm/>);
//   const submitBtn = screen.getByRole('button', { name: /Registrar/i });
//   expect(submitBtn).toBeInTheDocument();
// });
// });

// describe('ewfwerw', () => {
//   it('show', () => {
//     render(<RegisterForm/>);
//     const submitBtn = screen.getByRole('button', { name: /Registrar/i });
//     expect(submitBtn).not.toBeDisabled();    
//   });
// });
