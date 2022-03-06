import React, { useState } from "react";
import SweetAlert from "sweetalert2-react";
import swal from "sweetalert2";
import { Button, Box } from "@chakra-ui/react";

export default function AlertServicie() {
  const [state, setState] = useState();

  const showBox = () => {
    const { value: x } = swal.fire({
      title: "Seleccione una opcion y precione el boton Ok para continuar",
      input: "select",
      icon: "warning",
      inputOptions: {
        Opciones: {
          Confirmar: "Confirmar",
          Informacion: "Informacion",
        },
      },
      inputPlaceholder: "Selecciona una opcion",
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === "Confirmar") {
            showAlertOkey();
          }
          if (value === "Informacion") {
            showAlertInfo();
          }
          if (value === "") {
            showAlertErr();
          }
        });
      },
    });

    if (x) {
      swal.fire(`Seleccionaste: ${x}`);
    }
  };

  const showAlertOkey = () => {
    swal.fire({
      position: "center",
      icon: "success",
      title: "Tarea Exitosa",
      text: "Pasas a la siguiente tarea",
      showConfirmButton: true,
      timer: 3000,
    });
  };

  const showAlertInfo = () => {
    swal.fire({
      position: "center",
      icon: "info",
      title: "Debes confirmar para pasar a la siguiente tarea",
      showConfirmButton: true,
      timer: 3000,
    });
  };

  const showAlertErr = () => {
    swal.fire({
      position: "center",
      icon: "error",
      title: "Error",
      text: "Upssss...!! Debes elejir una opcion",
      showConfirmButton: true,
      timer: 3000,
    });
  };

  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: " column",
          alignContent: "space-around",
          flexWrap: " wrap",
          marginTop:"20px"
        }}
      >
        <Button
          colorScheme="teal"
          variant="ghost"
          onClick={() => setState(showBox())}
        >
          Siguiente tarea
        </Button>
      </Box>
    </>
  );
}

//   const validate=()=>{
//       if(state){
//        setState(showAlertOkey())
//       }else{
//         setState(showAlertErr())
//     }
//   }

//   const showBox = () => {
//     swal
//       .fire({
//         title: "Deseas continuar con la tarea",
//         buttons: ["si", "no"]
//       })
//       .then((res) => {
//         if (res) {
//           swal.fire({
//             position: "center",
//             icon: "success",
//             title: "Tarea Exitosa",
//             text: "Pasas a la siguiente tarea",
//             showConfirmButton: true,
//             timer: 3000,
//           });
//         } else {
//           swal.fire({
//             position: "center",
//             icon: "error",
//             title: "Error",
//             text: "Upssss...!!",
//             showConfirmButton: true,
//             timer: 3000,
//           });
//         }
//       });
//   };

// import React, { useState } from "react";
// import SweetAlert from "sweetalert2-react";
// import swal from "sweetalert2";
// import { Button } from "@chakra-ui/react";

// export default function AlertServicie() {
//   const [state, setState] = useState(true);

//   //   const validate=()=>{
//   //       if(state){
//   //        setState(showAlertOkey())
//   //       }else{
//   //         setState(showAlertErr())
//   //     }
//   //   }
//   const showAlertOkey = () => {
//     swal.fire({
//       position: "center",
//       icon: "success",
//       title: "Tarea Exitosa",
//       text: "Pasas a la siguiente tarea",
//       showConfirmButton: true,
//       timer: 3000,
//     });
//   };

//   const showAlertInfo = () => {
//     swal.fire({
//       position: "center",
//       icon: "info",
//       title: "Debes completar todos los datos para pasar a la siguiente tarea",
//       showConfirmButton: true,
//       timer: 3000,
//     });
//   };

//   const showAlertErr = () => {
//     swal.fire({
//       position: "center",
//       icon: "error",
//       title: "Error",
//       text: "Upssss...!!",
//       showConfirmButton: true,
//       timer: 3000,
//     });
//   };

//   return (
//     <>
//       <div>
//         {state ? (
//           <Button
//             colorScheme="teal"
//             variant="ghost"
//             onClick={() => setState(showAlertOkey())}
//           >
//             Confirmar
//           </Button>
//         ) : (
//           <Button
//             colorScheme="teal"
//             variant="ghost"
//             onClick={() => setState(showAlertErr())}
//           >
//             Error
//           </Button>
//         )}

//         <Button
//           colorScheme="teal"
//           variant="ghost"
//           onClick={() => setState(showAlertInfo())}
//         >
//           Informacion
//         </Button>
//       </div>
//     </>
//   );
// }
