import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import middleware from "./store/middlewares";
import reducer from "./store/reducers/customerInfo";
import Login from './components/Login'

const store = createStore(reducer, middleware);

const App = ({onLoginSuccess, manageGlobalStore}) => (
  <Provider store={store}>
    <Login
      onLoginSuccess={onLoginSuccess}
      manageGlobalStore={manageGlobalStore}
    />
  </Provider>
);

export default App;