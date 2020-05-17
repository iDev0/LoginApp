import React from 'react';
import styled from 'styled-components/native'
import {TouchableOpacity} from "react-native";
import PropTypes from 'prop-types';

const Container = styled.View`
  flex : 1;
`

const Button = styled.View`
  background-color: ${prop => prop.color ? prop.color : 'tomato'};
  width: 100%;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  border-width: 3px;
  border-color: ${prop => prop.borderColor ? prop.borderColor : 'tomato'};;
  
`
const ButtonText = styled.Text`
  color : ${prop => prop.color ? prop.color : 'white'};
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 3px;
`

const CustomButton = ({backColor, fontColor, text, borderColor, command}) => (
    <Container>
        <TouchableOpacity onPress={command}>
            <Button color={backColor} borderColor={borderColor}>
                <ButtonText color={fontColor}>{text}</ButtonText>
            </Button>
        </TouchableOpacity>
    </Container>
)


CustomButton.propTypes = {
    backColor : PropTypes.string,
    fontColor : PropTypes.string,
    text : PropTypes.string.isRequired,
    borderColor : PropTypes.string,
    command : PropTypes.func.isRequired
};

export default CustomButton;
