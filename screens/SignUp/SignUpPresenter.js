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


const SignUpPresenter = ({firstName,
                             lastName,
                             email,
                             password,
                             loading,
                             submit,
                             setFirstName,
                             setLastName,
                             setEmail,
                             setPassword
                         }) => (
    <Container>
        <FormContainer>
            <CustomInput placeholder="First Name" value={firstName} autoCapitalize={'words'} onChangeText={setFirstName} />
            <CustomInput placeholder="Last Name" value={lastName} autoCapitalize={'words'} onChangeText={setLastName} />
            <CustomInput placeholder="Email"  value={email}  autoCapitalize={'none'} onChangeText={setEmail} />
            <CustomInput placeholder="Password"  value={password} isPassword={true} onChangeText={setPassword} />
            <ButtonContainer>
                <CustomButton text={'Sign Up'} command={submit} loading={loading} />
            </ButtonContainer>
        </FormContainer>
    </Container>
)

export default SignUpPresenter;
