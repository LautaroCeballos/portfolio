// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText('Lautaro Ceballos');
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import App from './App'


test('renders content', () => {
  const component = render(<App />)
  component.getAllByText('Lautaro Ceballos')
  component.getByText('FrontEnd Developer')
})

test('renders title', () => {
  const component = render(<App />)
  expect(component.container).toHaveTextContent('Lautaro Ceballos')
})

