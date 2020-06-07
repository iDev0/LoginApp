import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import styled from 'styled-components/native'
import {Ionicons} from '@expo/vector-icons'
import utils from '../utils'
import colors from "../colors";

import Explore from '../screens/Main/Explore'
import Map from '../screens/Main/Map'
import Profile from '../screens/Main/Profile'
import Saved from '../screens/Main/Saved'


const Container = styled.View``

const Tabs = createBottomTabNavigator()


const Main = () => (
    <Tabs.Navigator
        tabBarOptions={{
            activeTintColor : colors.red,
            tabStyle : {
                paddingTop: 10
            },
            labelStyle : {
                textTransform : 'uppercase',
                fontWeight : '600'
            }
        }}
        screenOptions={({route}) => ({
            tabBarIcon : ({foucsed}) => {
                const isAndroid = utils.isAndroid()

                let iconName = isAndroid ? 'md-' : 'ios-'

                if (route.name === 'Explore') {
                    iconName += 'search'
                } else if (route.name === 'Map') {
                    iconName += 'heart'
                } else if (route.name === 'Profile') {
                    iconName += 'map'
                } else if (route.name === 'Saved') {
                    iconName += 'person'
                }

                return (
                    <Ionicons
                        name={iconName}
                        size={24}
                        color={foucsed ? colors.red : 'gray'}
                    />
                )

            }
        })}

    >
        <Tabs.Screen name={'Explore'} component={Explore} />
        <Tabs.Screen name={'Map'} component={Map} />
        <Tabs.Screen name={'Profile'} component={Profile} />
        <Tabs.Screen name={'Saved'} component={Saved} />
    </Tabs.Navigator>
)


Main.propTypes = {

};

export default Main;
