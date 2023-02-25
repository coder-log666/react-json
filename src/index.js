import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App'
import {render} from './reactJson/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
import RenderContext from './context'

root.render(
  <React.StrictMode>
    <RenderContext.Provider value={render}>
        <App />
    </RenderContext.Provider>
  </React.StrictMode>
);


