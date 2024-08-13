import React from 'react';
import ReactDOM from 'react-dom/client';
//위 react기본 모듈은 /를 안써도 된다.
import App from './App';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render( <App /> );