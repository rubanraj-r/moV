/* global window, ADRUM */
import React from 'react';
import { 
  Route,
  HashRouter
} from 'react-router-dom';
// import { createHashHistory } from 'history';
import {
  Home
} from './screen/index.js';

// const browserHistory = useRouterHistory(createHashHistory)({
//   basename: window.basePath,
//   queryKey: false,
// });

export default function () {
  return (
    <HashRouter>
      <Route exact path="/" component={Home} />
    </HashRouter>
  );
}
