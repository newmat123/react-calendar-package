import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Calender } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Calender />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
