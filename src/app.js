import './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import StockPageComponent from './components/StockPageComponent';

const renderApplication = () => {
  ReactDOM.render(
    <StockPageComponent /> ,
    document.querySelector('#root')
  );
}

renderApplication();


