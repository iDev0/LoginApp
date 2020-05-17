import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

import Login from '../screens/Login'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'


const Stack = createStackNavigator();
export default () => (
    <Stack.Navigator mode={'modal'}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
)



