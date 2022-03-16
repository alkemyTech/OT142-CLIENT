import swal from 'sweetalert2';

export const showAlertOkey = (props = {}) => {
  swal.fire({
    icon: 'success',
    title: props.title ? props.title : 'Tarea realizada con exito',
    text: props.text ? props.text : 'Felicitaciones',
    showConfirmButton: true,
    confirmButtonColor: '#EF3D3D',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    cancelButtonAriaLabel: 'Cancelar',
    showCloseButton: true,
    closeButtonAriaLabel: 'cerrar alerta',
    footer: props.footer ? props.footer : 'Pasas a la siguiente tarea!',
    timer: props.timer ? props.timer : 5000,
    timerProgressBar: true,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    stopKeydownPropagation: false
  });
};

export const showAlertInfo = (props = {}) => {
  swal.fire({
    icon: 'info',
    title: props.title ? props.title : 'Debes completar la tarea para avanzar',
    timer: props.timer ? props.timer : 5000,
    timerProgressBar: true,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    stopKeydownPropagation: false,
    footer: props.footer ? props.footer : 'importante!!'
  });
};

export const showAlertErr = (props = {}) => {
  swal.fire({
    icon: 'error',
    title: 'Error',
    text: props.text ? props.text : 'Upssss...!! no has completado la tarea',
    showConfirmButton: true,
    timer: 3000,
    footer: props.footer ? props.footer : 'Comience de nuevo!!'

  });
};

const allFuntionAlert = {
  showAlertOkey,
  showAlertInfo,
  showAlertErr
};

export default allFuntionAlert;
