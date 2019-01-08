import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import { LocalizeProvider } from "react-localize-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./redux/reducers/userReducer";
const store = createStore(
  rootReducer,
  (intialstate = {}),
  composeWithDevTools(applyMiddleware(thunk))
);
const rootReducer = combineReducers({
  localize: localizeReducer,
  user: userReducer
});
ReactDOM.render(
  <Provider store={store}>
    <LocalizeProvider store={store}>
      <Router>
        <App />
      </Router>
    </LocalizeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
