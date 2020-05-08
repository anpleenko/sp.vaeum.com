import React from 'react';
import { hydrate, render } from 'react-dom';

const rootElement = document.getElementById('root');

if (rootElement) {
  if (rootElement.hasChildNodes()) {
    hydrate(<div />, rootElement);
  } else {
    render(<div />, rootElement);
  }
}

