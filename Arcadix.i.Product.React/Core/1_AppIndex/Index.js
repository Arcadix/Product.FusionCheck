//React related imports
import React, { useEffect } from "react";
import ReactDOM, { hydrate, render } from "react-dom";

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
let AppComponent = App;

loadableReady(() => {
  const RenderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate;
  RenderMethod(
    <AppComponent />,
    document.getElementById("divRootClient"),
    function () {}
  );
});