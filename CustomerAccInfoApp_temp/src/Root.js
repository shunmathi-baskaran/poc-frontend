import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import middleware from "./store/middlewares";
import reducer from "./store/reducers";
import App from "./App";

const Root = (props) => {
  const store = createStore(reducer, middleware);
  return (
    <Provider store={store}>
      <App {...props} />
    </Provider>
  );
};

export default Root;
