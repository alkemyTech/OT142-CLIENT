import React from 'react';
import { Route } from 'react-router-dom';
import { backRoutes } from './backRoutes';

export const BackofficeSwitch = () => {
  return (
    <>
      {
        backRoutes.map(({ component: Component, path }, i) => {
          return (
            <Route key={i} path={path} exact={true}>
                <Component />
            </Route>
          );
        })
      };
    </>
  );
};
