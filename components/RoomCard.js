import React from 'react';
import styled from 'styled-components/native'
import PropTypes from 'prop-types';

const Container = styled.View`
  width: 100%;
  margin-bottom: 50px;
  align-items: flex-start;
`

const Title = styled.Text`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 7px;
`

const Description = styled.Text`
  font-weight: 400;
  font-size: 10px;
`


const RoomCard = ({userId, id, title, body}) => (
    <Container>
        <Title>{title}</Title>
        <Description>{body}</Description>
    </Container>
)


RoomCard.propTypes = {
    userId: PropTypes.number.isRequired,
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    body : PropTypes.string.isRequired
};

export default RoomCard;
