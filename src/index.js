import React from 'react';
import ReactDOM from 'react-dom';

import App from 'containers/App';
import Map from 'containers/Map';

const Root = () => (
  <App>
    <Map />
  </App>
);

ReactDOM.render(<Root />, document.getElementById('root'));
