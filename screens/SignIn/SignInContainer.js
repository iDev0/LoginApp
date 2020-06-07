import React, {useState} from 'react';
import {KeyboardAvoidingView, StatusBar} from 'react-native';
import styled from 'styled-components/native'
import PropTypes from 'prop-types';
import SignInPresenter from "./SignInPresenter";
import {useDispatch} from "react-redux";
import DismissButton from '../../components/DismissButton'
import api from '../../api';
import {userLogin} from '../../userReducer'
import Input from '../../components/Input'
import Btn from '../../components/Btn'
import utils from "../../utils";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 30px;
`;




const SignInContainer = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    navigation.setOptions({
        headerLeft : () => (<DismissButton />),
        title : '로그인'
    })

    const handleSubmit = async() => {

        setLoading(true)

        if (!utils.isEmail(email)) {
            alert('올바른 이메일을 넣어주세요.')
            return false
        }

        try {
            dispatch(userLogin({
                email : email,
                password : password
            }))
        } catch (e) {
            alert(e.message)
        } finally {
            setLoading(false)
        }
    }


    return (
        // <SignInPresenter
        //     submit={handleSubmit}
        //     email={email}
        //     password={password}
        //     loading={loading}
        //     setEmail={setEmail}
        //     setPassword={setPassword}
        // />
        <Container>
            <StatusBar barStyle={'dark-content'} />
            <KeyboardAvoidingView
                behavior={'position'}
            >
                <InputContainer>
                    <Input
                        value={email}
                        placeholder={'email'}
                        keyboardType={'email-address'}
                        autoCapitalize={'none'}
                        stateFn={setEmail}
                    />

                    <Input
                        value={password}
                        placeholder={'password'}
                        isPassword={true}
                        stateFn={setPassword}
                    />
                </InputContainer>
                <Btn
                    text={'sign in'}
                    accent
                    onPress={handleSubmit}
                />
            </KeyboardAvoidingView>
        </Container>
    )

}


export default SignInContainer;
