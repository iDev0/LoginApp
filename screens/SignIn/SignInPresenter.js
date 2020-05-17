import React from 'react';
import styled from 'styled-components/native'
import PropTypes from 'prop-types';
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";


const Container = styled.View`
  flex :1;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`

const FormContainer = styled.View`
  align-items: center;
  width: 80%;
  height: 35%;
  justify-content: space-around;  
`

const ButtonContainer = styled.View`
  margin-top: 25px;
  width: 100%;  
  margin-bottom: 80px;
`

const SignInPresenter = () => (
    <Container>
        <FormContainer>
            <CustomInput placeholder="Email" />
            <CustomInput placeholder="Password" />
            <ButtonContainer>
                <CustomButton text={'Sign In'} command={() => console.log('Login')} />
            </ButtonContainer>
        </FormContainer>
    </Container>
)


SignInPresenter.propTypes = {
    
};

export default SignInPresenter;
