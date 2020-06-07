import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import styled from 'styled-components/native'
import PropTypes from 'prop-types';
import Explore from '../screens/Main/Explore'
import Map from '../screens/Main/Map'
import Profile from '../screens/Main/Profile'
import Saved from '../screens/Main/Saved'


const Container = styled.View``

const Tabs = createBottomTabNavigator()


const Main = () => (
    <Tabs.Navigator>
        <Tabs.Screen name={'Explore'} component={Explore} />
        <Tabs.Screen name={'Map'} component={Map} />
        <Tabs.Screen name={'Profile'} component={Profile} />
        <Tabs.Screen name={'Saved'} component={Saved} />
    </Tabs.Navigator>
)


Main.propTypes = {

};

export default Main;
