//import { createApp } from 'vue';
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//const loginContext = React.createContext();

//import 'bootstrap/dist/css/bootstrap.min.css'

// // Mount function to start up the app
// const mount = (el /*, onLogin */) => {
//   const app= createApp(Login)
//   // const app = createApp({
//   //   methods: {
//   //     onLogin: ()=> console.log('logged in')
//   //   },
//   //   render: h => h(Login)
//   // })
//   app.mount(el);
// };

const mount = (el, onLoginSuccess, manageGlobalStore) => {
  ReactDOM.render(
    <App
      onLoginSuccess={onLoginSuccess}
      manageGlobalStore={manageGlobalStore}
    />,
    el
  );
};
// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_login-dev-root");

  if (devRoot) {
    mount(
      devRoot,
      (customerDetails) => {
        console.log("onLoginSuccess", customerDetails);
      },
      (appState, appName) => {
        console.log(appName, appState);
      }
    );
  }
}

// We are running through container
// and we should export the mount function
export { mount };
