import swal from 'sweetalert2';

export const showAlertOkey = (props = {}) => {
  swal.fire({
    icon: 'success',
    title: props.title ? props.title : 'Tarea realizada con éxito',
    text: props.text ? props.text : 'Felicitaciones',
    showConfirmButton: true,
    confirmButtonColor: '#EF3D3D',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    cancelButtonAriaLabel: 'Cancelar',
    showCloseButton: true,
    closeButtonAriaLabel: 'Cerrar alerta',
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
    footer: props.footer ? props.footer : 'Importante!!'
  });
};

export const showAlertErr = (props = {}) => {
  swal.fire({
    icon: 'error',
    title: 'Error',
    text: props.text ? props.text : 'Upssss...!! ha sucedido un error',
    showConfirmButton: true
    // timer: 3000
    // footer: props.footer ? props.footer : 'Comience de nuevo!!'
  });
  // eslint-disable-next-line no-debugger
  debugger;
};

export const AlertOkeyInfo = (props = {}) => {
  swal.fire({
    icon: 'success',
    title: props.title ? props.title : 'Tarea realizada con éxito',
    text: props.text ? props.text : 'Felicitaciones',
    showConfirmButton: true,
    confirmButtonColor: '#EF3D3D',
    showCancelButton: false,
    cancelButtonText: 'Cancelar',
    cancelButtonAriaLabel: 'Cancelar',
    showCloseButton: true,
    closeButtonAriaLabel: 'Cerrar alerta',
    timer: props.timer ? props.timer : 5000,
    timerProgressBar: true,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    stopKeydownPropagation: false
  });
};

const allFuntionAlert = {
  showAlertOkey,
  showAlertInfo,
  showAlertErr,
  AlertOkeyInfo
};

export default allFuntionAlert;
