import React from 'react';
import SignUpPresenter from "./SignUpPresenter";
import DismissButton from '../../components/DismissButton'

const SignUpContainer = ({navigation}) => {

    navigation.setOptions({
        headerLeft : () => (<DismissButton />),
        title : '회원가입'
    })


    return (
        <SignUpPresenter />
    )
}

export default SignUpContainer;
