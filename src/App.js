import React, { Suspense } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './App.css';
import './index.css';
import './default.css';
import { BrowserRouter } from 'react-router-dom';
const Main = React.lazy(() => import('./component/MainComponent.js'));

function App() {
  return (
    <BrowserRouter>
      <div>
        <Suspense fallback={<div></div>}>
          {' '}
          <Main />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
