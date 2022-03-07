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

Modified by Pablo

### `Loaders`

The implementation of the loader should be the following :

-Import Loader from Components/Loader

- Add a conditional rendering with a ternary or an OR operator on the component with the data obtained from HTTP request as the first option.

      - apiData ? Loader : apiData
      - apiData || Loader

- Loader has a prop named type : if u want to display a spinner pass the type prop as 'spinner', otherwise, if you dont pass a prop to the Loader component, it will display a progress bar as the default option.

Modified by Maximiliano Rama

Otra modificacion por parte de Pablo
