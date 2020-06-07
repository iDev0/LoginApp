import React from 'react';
import {ActivityIndicator, ScrollView} from 'react-native';
import styled from 'styled-components/native'
import PropTypes from 'prop-types';
import RoomCard from "../../../components/RoomCard";


const Container = styled.View``
const Text = styled.Text``




const ExplorePresenter = ({rooms}) => (
    <Container>

        {rooms.length === 0
            ? (<ActivityIndicator color="black" size={'large'} />)
            : (
                <ScrollView
                    style={{width : '100%', marginTop : 120}}
                    contentContainerStyle={{paddingHorizontal : 15}}
                >
                    {rooms.map((room) => (
                    <RoomCard
                        key={room.id}
                        title={room.title}
                        body={room.body}
                        id={room.id}
                        userId={room.userId}
                    />
                    ))}
                </ScrollView>
            )
        }
    </Container>
)


ExplorePresenter.propTypes = {
    
};

export default ExplorePresenter;
