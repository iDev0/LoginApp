import React from 'react';
import {TouchableOpacity} from "react-native";
import styled from 'styled-components/native'
import CustomButton from '../../components/CustomButton'
import PropTypes from 'prop-types';

const Container = styled.View`
  flex : 1;
  background-color: white;
`
const BackGround = styled.Image`
  width: 100%;  
  height: 100%;
  position: absolute;
`

const LogoContainer = styled.View`
  flex : 1;
`

const CommandContainer = styled.View`
  flex : 1;
`

const CommandButtonContainer = styled.View`
  width: 100%;
  align-items: center;
`

const ButtonContainer = styled.View`
  margin-bottom: 30px;
  width: 80%;
  height: 20%;
`


const LoginPresenter = ({bg, register, login}) => (
    <Container>
        <BackGround source={bg}/>
        <LogoContainer></LogoContainer>
        <CommandContainer>
            <CommandButtonContainer>
                <ButtonContainer>
                    <CustomButton
                        text={'Register'}
                        command={register}
                    />
                </ButtonContainer>
                <ButtonContainer>
                    <CustomButton
                        text={'Log In'}
                        backColor={'transparent'}
                        fontColor={'black'}
                        borderColor={'black'}
                        command={login}
                    />
                </ButtonContainer>
            </CommandButtonContainer>
        </CommandContainer>

    </Container>
)

export default LoginPresenter;
