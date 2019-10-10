import React from "react";
import styled from 'styled-components';

const CardContainer = styled.div`
width: 100vw;  
display:flex;
margin-bottom: 100px;
`;

const Image = styled.img`
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

const Text = styled.div`
  width: 20vw;
  height: 50vw;
  overflow: scroll;
  margin: 100px 0;
  padding: 0 50px 20px;
  background-color: rgba(0,0,0,0.12);
  position: absolute;
  float: left;
  right: 2%;
  text-shadow: 2px 2px rgb(0,0,0);
  color: rgb(255,255,255,0.8);
  z-index: 1;
`;

const Title = styled.h2`
font-family: 'Montserrat', sans-serif;
font-weight: 500;
`;

const Date = styled.span`
font-family: 'Lora', serif;
`;

const Explanation = styled.p`
  text-align: left;
  font-family: 'Lora', serif;
  line-height: 1.6em
  font-spacing: 2em;
  `;

const Copyright = styled.p`
text-align: left;
font-family: 'Lora', serif;
font-style: italic
`;


const Card = props => {
  return (
    <CardContainer>
      <Image src = {props.hdurl} alt = 'NASA Astronomy of the Day' />
      <Text>
        <Title> {props.title}</Title>
        <Date>{props.date}</Date>
        <Explanation>{props.explanation}</Explanation>
        <Copyright>© {props.copyright}</Copyright>
      </Text>
    </CardContainer>
  );
};

export default Card;