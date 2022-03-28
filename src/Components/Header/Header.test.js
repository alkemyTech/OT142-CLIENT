import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, waitFor, mount, screen } from '@testing-library/react';
import WithSubnavigation from './index';
import { MemoryRouter } from 'react-router-dom';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';

describe('Items de navegación', () => {
  it('verificar si existe boton de ingresar', () => {
    render(
      <MemoryRouter>
        <WithSubnavigation />
      </MemoryRouter>
    );

    expect(screen.getByText('Ingresar')).toBeInTheDocument();
  });

  it('verificar si no existe boton de backoffice', () => {
    render(
      <MemoryRouter>
        <WithSubnavigation />
      </MemoryRouter>
    );

    expect(screen.queryByText('Backoffice')).not.toBeInTheDocument();
  });
});
