import React, {useLayoutEffect} from 'react';
import LoginPresenter from "./LoginPresenter";

const LoginContainer = ({navigation}) => {

    navigation.setOptions({
        title : 'welcome',
        headerShown : false
    })

    const getBackgroundImage = require("../../assets/beach.jpg")

    const register = () => {
        navigation.navigate('SignUp')
    }

    const login = () => {
        navigation.navigate('SignIn')
    }

    return (
        <LoginPresenter
            bg={getBackgroundImage}
            register={register}
            login={login}
        />
    )
}



export default LoginContainer;
