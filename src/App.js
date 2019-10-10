import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import styled from 'styled-components';
import Header from './Header';
import Card from './Card';

const Container = styled.div`
  display: flex;
  background: black;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=r5sUbJ04T0QQB9ePgcmclsEuaScYcf7Ovny30X0n')
    .then(response => {
      console.log('Huzzah! card data returned', response.data);
      setCard(response.data);
    })
    .catch(error => {
      console.log('NASA data not returned', error)
    })
  },[]);

  return (
    <>
      <Container>
        <Header />
        <Card 
          title = {card.title}
          hdurl = {card.hdurl}
          date = {card.date}
          explanation = {card.explanation}
          copyright = {card.copyright} />
      </Container>  
    </>
  )}

export default App;
