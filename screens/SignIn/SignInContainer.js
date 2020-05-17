import React from 'react';
import styled from 'styled-components/native'
import PropTypes from 'prop-types';
import SignInPresenter from "./SignInPresenter";
import DismissButton from '../../components/DismissButton'

const Container = styled.View``

const SignInContainer = ({navigation}) => {

    navigation.setOptions({
        headerLeft : () => (<DismissButton />),
        title : '로그인'
    })


    return (
        <SignInPresenter />
    )

}


export default SignInContainer;
