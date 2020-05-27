import React from 'react';
import styled from 'styled-components/native'
import PropTypes from 'prop-types';

const Container = styled.View`
  width: 100%;  
`
const Input = styled.TextInput`
  background-color: white;
  height: 55px;
  border-radius: 20px;
  border-width: 2px;
  border-color: lightgray;  
  padding-left: 20px;
`

const CustomInput = ({placeholder, onChange, value, autoCapitalize, isPassword, onChangeText}) => (
    <Container>
        <Input
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            autoCapitalize={autoCapitalize}
            isPassword={isPassword}
        />
    </Container>
)



export default CustomInput;
