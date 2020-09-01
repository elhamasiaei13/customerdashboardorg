import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import fa from 'react-intl/locale-data/fa';
import en from 'react-intl/locale-data/en';
import persian from './language/persian';
// import english from './language/english';
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
import Reducer from "./store/Reducer";
import { Provider } from 'react-redux';
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import { PersistGate } from 'redux-persist/integration/react'
import thunk from 'redux-thunk';
import * as actionCreator from './store/Action'
import LoginForm from './componenets/container/LoginForm';
addLocaleData([...fa, ...en]);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Rootreducer = combineReducers({
    Reducer: Reducer,
})


export const store = createStore(Rootreducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store} >
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <IntlProvider locale={'fa'} messages={persian}>
            <BrowserRouter>
                <App store={store} />
            </BrowserRouter>
        </IntlProvider>
        {/* </PersistGate> */}
    </Provider>

    ,
    document.getElementById('root'));

serviceWorker.unregister();
