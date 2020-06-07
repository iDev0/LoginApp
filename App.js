import React, {useState} from 'react';
import Stack from './navigations/Stack'
import {Provider, useSelector, useDispatch} from "react-redux"
import {PersistGate} from "redux-persist/integration/react";
import store, {persistor} from './store';
import Gate from "./navigations/Gate";


const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Gate/>
            </PersistGate>
        </Provider>
    )
}


export default App;
