import 'react-app-polyfill/ie11';
import * as React from 'react';
//import * as ReactDOM from 'react-dom';
import Calender from '../src/index';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const App = () => {
  return (
    <div>
      <Calender />
    </div>
  );
};
root.render(<App tab="home" />);
