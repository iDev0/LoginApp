import React from 'react';
import {useNavigation} from '@react-navigation/native'
import styled from 'styled-components/native'
import {Ionicons} from '@expo/vector-icons';
import {TouchableOpacity} from "react-native-gesture-handler";
import PropTypes from 'prop-types';

const Container = styled.View`
 flex : 1;
 align-items: center;
 justify-content: center;
 align-self: center;
 margin-left: 20px;
`

const DismissButton = () => {

    const navigation = useNavigation()

    return (
        <Container>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="ios-arrow-down" size={30} />
            </TouchableOpacity>
        </Container>
    )
}


DismissButton.propTypes = {

};

export default DismissButton;
