import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
<<<<<<< HEAD

=======
>>>>>>> ded95278c04ccaec74854e318d3fa8350c16eb95
import './index.css';
import App from './App';

import store from './redux/store';
<<<<<<< HEAD
=======


>>>>>>> ded95278c04ccaec74854e318d3fa8350c16eb95


<<<<<<< HEAD
ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>
  
     
  
  
  ,document.getElementById('root')
=======
  <Provider store={store}>

  <BrowserRouter>
    <App />
  </BrowserRouter>

  </Provider>,
  document.getElementById('root')

>>>>>>> ded95278c04ccaec74854e318d3fa8350c16eb95
);



