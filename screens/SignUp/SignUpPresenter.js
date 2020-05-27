import React from 'react';
import styled from 'styled-components/native'
import PropTypes from 'prop-types';
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";

const Container = styled.View`
  flex :1;
  align-items: center;
  justify-content: center;
`

const FormContainer = styled.View`
  align-items: center;
  width: 80%;
  height: 50%;
  justify-content: space-around;  
`

const ButtonContainer = styled.View`
  margin-top: 25px;
  width: 100%;  
  margin-bottom: 80px;
`


const SignUpPresenter = ({onChange}) => (
    <Container>
        <FormContainer>
            <CustomInput placeholder="First Name" onChange={onChange} />
            <CustomInput placeholder="Last Name" onChange={onChange} />
            <CustomInput placeholder="Email" onChange={onChange} />
            <CustomInput placeholder="Password" onChange={onChange} />
            <ButtonContainer>
                <CustomButton text={'Sign Up'} command={() => console.log('Sign')} />
            </ButtonContainer>
        </FormContainer>
    </Container>
)


SignUpPresenter.propTypes = {
    
};

export default SignUpPresenter;
