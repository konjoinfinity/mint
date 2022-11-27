import React, { Suspense } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";
import Index from "views/Index.js";
import * as buffer from "buffer";
import { Provider } from "react-redux";
import store from "./components/PageHeader/redux/store";

window.Buffer = buffer.Buffer;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
  <BrowserRouter>
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route path="/" render={(props) => <Index {...props} />} />
    </Switch>
    </Suspense>
  </BrowserRouter>
  </Provider>
);
