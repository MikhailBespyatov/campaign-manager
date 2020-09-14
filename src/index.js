import App from 'App';
import config from 'constants/config';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, ReactReduxContext } from 'react-redux';
import * as serviceWorker from 'serviceWorker/serviceWorker';
import store from 'store/store';
import 'styles/index.scss';

ReactDOM.render(
    <Provider store={store} context={ReactReduxContext}>
        {/* <ConnectedRouter history={history} context={ReactReduxContext}>

            <Sprite /> */}

        <App />

        {/* </ConnectedRouter> */}
    </Provider>,

    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change

// unregister() to register() below. Note this comes with some pitfalls.

// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();

if (config.isDev && module.hot) {
    module.hot.accept();
}
