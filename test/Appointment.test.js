import React from 'react';
import ReactDOM from 'react-dom';

import { Appointment } from '../src/Appointment';

describe('Appointment', () => {
  let container;
  let customer;
  const render = component => ReactDOM.render(component, container);
  beforeEach(() => {
    container = document.createElement('div');
  });
  it('renders the customer first name', () => {
    customer = { firstName: 'Ashley' };
    document.body.appendChild(container);
    render(<Appointment customer={customer} />);

    expect(container.textContent).toMatch('Ashley');
  }); 
  it('renders another customer first name', () => {
    customer = { firstName: 'Jordan' };
    document.body.appendChild(container);
    render(<Appointment customer={customer} />);

    expect(container.textContent).toMatch('Jordan');
  });
});

  