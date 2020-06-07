import React from 'react';
import styled from 'styled-components/native'
import PropTypes from 'prop-types';
import {Provider, useSelector, useDispatch} from "react-redux"
import {NavigationContainer} from "@react-navigation/native";
import Main from './Main'
import Stack from "./Stack";

const Container = styled.View``

const Gate = () => {

    const {isLoggedIn} = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

    return (
        <NavigationContainer>
            {isLoggedIn ? <Main /> : <Stack />}
        </NavigationContainer>
    )

}



Gate.propTypes = {

};

export default Gate;
