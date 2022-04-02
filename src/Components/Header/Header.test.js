import {
  render,
  screen
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WithSubnavigation from './index';
import { MemoryRouter } from 'react-router-dom';

describe('Items de navegación <WithSubNavigation/> sin logeo', () => {
  sessionStorage.clear();

  it('Verifica botón de login se visualice si no se está logueado', () => {
    render(
        <MemoryRouter>
          <WithSubnavigation />
        </MemoryRouter>
    );
    screen.logTestingPlaygroundURL();
    expect(screen.getByRole('button', {
      name: /ingresar/i
    })).toBeInTheDocument();
  }
  );

  it('Verifica link de Inicio se visualice si no se está logueado', () => {
    render(
        <MemoryRouter>
          <WithSubnavigation />
        </MemoryRouter>
    );

    expect(screen.getByRole('link', {
      name: /inicio/i
    })).toBeInTheDocument();
  }
  );

  it('Verifica link de Nosotros se visualice si no se está logueado', () => {
    render(
        <MemoryRouter>
          <WithSubnavigation />
        </MemoryRouter>
    );
    expect(screen.getByRole('link', {
      name: /nosotros/i
    })).toBeInTheDocument();
  }
  );

  it('Verifica link de Actividades se visualice si no se está logueado', () => {
    render(
        <MemoryRouter>
          <WithSubnavigation />
        </MemoryRouter>
    );
    expect(screen.getByRole('link', {
      name: /actividades/i
    })).toBeInTheDocument();
  }
  );

  it('Verifica link de Contacto se visualice si no se está logueado', () => {
    render(
        <MemoryRouter>
          <WithSubnavigation />
        </MemoryRouter>
    );
    expect(screen.getByRole('link', {
      name: /contacto/i
    })).toBeInTheDocument();
  }
  );

  it('Verifica link de Campañas se visualice si no se está logueado', () => {
    render(
        <MemoryRouter>
          <WithSubnavigation />
        </MemoryRouter>
    );
    expect(screen.getByRole('link', {
      name: /campañas/i
    })).toBeInTheDocument();
  }
  );
});

describe('Items de navegacion <WithSubNavigation/> con logeo', () => {
  it('Verifica que el boton ingresar no se visualice si está logueado y no es admin', () => {
    sessionStorage.setItem('login-token', 'true');
    sessionStorage.setItem('login-role', '0');
    render(
        <MemoryRouter>
          <WithSubnavigation />
        </MemoryRouter>
    );
    expect(screen.queryByText('Ingresar')).not.toBeInTheDocument();
    sessionStorage.clear();
  }
  );

  it('Verifica que el boton ingresar no se visualice si está logueado', () => {
    sessionStorage.setItem('login-token', 'true');
    sessionStorage.setItem('login-role', '0');
    render(
        <MemoryRouter>
          <WithSubnavigation />
        </MemoryRouter>
    );

    expect(screen.queryByText('Ingresar')).not.toBeInTheDocument();
    sessionStorage.clear();
  }
  );
});

describe('Items de navegacion <WithSubNavigation/> con logeo y admin', () => {
  sessionStorage.setItem('login-token', 'true');
  sessionStorage.setItem('login-role', '1');
  it('Verifica que el boton  contacto  no se visualice si está logueado y es admin', () => {
    expect(screen.queryByText('Contacto')).not.toBeInTheDocument();
  }
  );
  sessionStorage.clear();
});
