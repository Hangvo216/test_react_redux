// import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
import {render} from "react-dom";
import React from "react";
import {Provider} from "react-redux";

// import App from "./containers/App";
import store from "./store";

render(
    <Provider store={store}>
        <App />
    </Provider>,
    window.document.getElementById('root'));