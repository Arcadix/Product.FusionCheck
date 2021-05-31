//React related imports
import React, { useEffect } from "react";
import ReactDOM, { hydrate, render } from "react-dom";

//Polyfill imports
import "isomorphic-fetch";

//Loadable import
import { loadableReady } from '@loadable/component';

import AppMain from "@root/AppMain"
/**
 * @name App
 * @summary Returns the Main Component to be rendered.
 * @returns {JSX} the Component to be rendered Editor or Main.
 */
const App = () => {
  return (
    <AppMain/>
  );
};

//To Hydrate the App to DOM
// let AppComponent = App;

// loadableReady(() => {
//   const RenderMethod = ReactDOM.render;
//   RenderMethod(
//     <AppComponent />,
//     document.getElementById("divRootClient"),
//     function () {}
//   );
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('divRootClient')
);