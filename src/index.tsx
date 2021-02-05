import { render } from 'react-dom';

import { App } from 'components/App';

import * as serviceWorker from './serviceWorker';

const rootNode = document.getElementById('root');

if (rootNode) {
  render(<App />, rootNode);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
