import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store";

import App from './App';

const AppRedux = () => {
    return (
        <Provider store={store} >
            <App />
        </Provider >
    )
}

ReactDOM.render(
    React.createElement(AppRedux),
    document.getElementById('root')
);