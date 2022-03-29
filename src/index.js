import React from 'react';
import ReactDOM from 'react-dom';
import App from './NextApp';
import {BrowserRouter} from 'react-router-dom'

import 'antd/dist/antd.css';
// import './index.css';
// import './css-reset.css';

ReactDOM.render(
  <BrowserRouter>
      <App/>
  </BrowserRouter>,
  document.getElementById('root')
);

