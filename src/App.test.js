import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from "react-dom/client";
import SamuraiJSApp from "./App";
import React from "react";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// не работает((
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SamuraiJSApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});