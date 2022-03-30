import { fireEvent, render, waitFor } from '@testing-library/react';
// Se debe importar el componente a ser testeado
import LoginForm from './LoginForm';

// ESTE TEST DEBE USARSE ÚNICAMENTE COMO REFERENCIA DEBIDO A QUE FUE CREADO CON UN COMPONENTE QUE INICIALMENTE FUNCIONABA DE UNA MANERA Y LUEGO TUVO CAMBIOS QUE HICIERON CAMBIAR EL COMPORTAMIENTO DEL MISMO

// 'describe(nombre, función)' crea un bloque que agrupa varios tests relacionadas.

describe('Login describe statement', () => {
  // Se testea principalmente que el componente <LoginForm/> se este rendirando en la pantalla. Con "render()" se redenriza el componente y luego se comprueba que realmente este en la pantalla con: "toBeInTheDocumente()"
  test('Login form should be in the document', () => {
    const component = render(<LoginForm/>);
    const loginForm = component.container.querySelector('form');
    expect(loginForm).toBeInTheDocument();
  });

  // En este test se comprueba que el componente este mostrando los errores adecuadamente al ejecutar el evento "fireEvent.submit()" sin haber completado ningún campo de los inputs
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

    // Una vez comprobado de que muestra los errores de inicio, se procede a modificar los valores de campos de los inputs con el evento "fireEvent.change()" y se ejecuta un submit al final
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

    // En este punto se comprueba de que los errores del formulario aparezcan si los valores de los inputs no fueron completados correctamente (como lo es en este caso), comparando si los textos de mensaje de error aparecen en el pantalla
    const emailErrorMessage = getByText('Debe contener solo letras, números, guiones o puntos.');
    expect(emailErrorMessage).toBeInTheDocument();
    const passwordErrorMessage = getByText('Debe contener una longitud mínima de 6 caracteres, y al menos un número, una letra y un símbolo (por ejemplo @#$%).');
    expect(passwordErrorMessage).toBeInTheDocument();
  });
});

// Para ejecutar este test y validarlo por favor escriba en su consola:
// npm run test
