import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './App.css';
import './index.css';
import './default.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './component/MainComponent';

function App() {
  return (
    <BrowserRouter>
        <Main />
    </BrowserRouter>
  );
}

export default App;
