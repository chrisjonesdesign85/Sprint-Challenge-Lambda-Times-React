import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardsContainer = styled.div`
display: flex;
justify-content: space-evenly;
align-items: none;
flex-direction: row;
width: 100%;
margin-top: 16px;
flex-wrap: wrap;
@media (min-width: 1200px) {
  .cards-container {
    width: 1200px;
  }

  .card {
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: space-between;
    align-items: none;
    flex-direction: column;
    background-color: #fff;
    width: 380px;
    margin-bottom: 16px;
    padding: 24px;
  }

`;

const Cards = props => {
  return (
    <CardsContainer>
      {props.cards.map((card, index) => {
        return <Card key={index} card={card} />
      })}
    </CardsContainer>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
}

export default Cards;