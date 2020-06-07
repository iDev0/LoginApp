import React from 'react';
import Stack from './navigations/Stack'
import {NavigationContainer} from "@react-navigation/native";
import {Provider} from "react-redux"
import {PersistGate} from "redux-persist/integration/react";
import store, {persistor} from './store';



const App = () => (
    <Provider store={store}>
        <NavigationContainer>
            <Stack/>
        </NavigationContainer>
    </Provider>
)

export default App;
