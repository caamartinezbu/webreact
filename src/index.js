import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import './index.css';


// NOTA:

/* utilizamos el método createRoot de ReactDom, en el que le pasamos 
el contenedor, guardamos  este contenedor en una variable y luego ejecutamos 
el método render con el componente que queremos renderizar. */

  const root = ReactDOM.createRoot(document.getElementById('root'));  
  root.render( <App /> );


