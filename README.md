# Ong Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Setup Progress
Componente de barra de progreso linear
```js
import { Progress } from '@chakra-ui/react'

const ProgressLinear = ({value}) => {
  return (
    <Progress value={value} />
  )
}

export default ProgressLinear
```

Implementacion del componente progreso linear
```js
import ProgressLinear from "../Progress/ProgressLinear";
import { useEffect, useState } from "react";


const Example = () => {

    const [value, setValue] = useState(0);

    useEffect(() => {

    const updateValue = () => {
        setValue(val => val + 1)
    }

    if(value < 100){
        setTimeout(updateValue, 10)
    }else{
        clearTimeout(updateValue)
    }

    }, [value])


    return (
    <>
        {
            value < 100 ?
                <ProgressLinear value={value} />
            :
                <h1>Cargado</h1>
        }
    </>
}
```

Modified by Pablo


Otra modificacion por parte de Pablo


# Como utilizar el spinner
El spinner fué hecho para mostrar el estado de carga de la pantalla.

## Acepta las siguientes propiedades:
**isLoading**: recibe un booleano. En truen se mostrará, mientras que en false no.

**color**:  acepta un hash de color en el formato de #XXXXXX o #XXX. También acepta los colores básicos que se enumeran a continuación:

```
granate, rojo, naranja, amarillo, aceituna, verde, morado, blanco, fucsia, lima, verde azulado, agua, azul, armada, negro, gris, plata
```


**size**:
La entrada puede ser un número o una string.

Si el valor es un número, el cargador se establecerá de forma predeterminada en px.

Si el valor es una cadena, el cargador verificará la unidad con las unidades css válidas.


