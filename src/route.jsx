import React from 'react';
import { 
  Route,
  HashRouter
} from 'react-router-dom';
import {
  Home
} from './screen/index.js';

export default function () {
  return (
    <HashRouter>
      <Route exact path="/" component={Home} />
    </HashRouter>
  );
}
