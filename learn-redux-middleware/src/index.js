import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { createStore, applyMiddleware} from "redux";
import rootReducer from "./modules";
import logger from "redux-logger"
import ReduxThunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import {BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk, logger)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter history={customHistory}>
		<Provider store={store}>
			<App />
		</Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
