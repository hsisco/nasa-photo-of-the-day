import React from "react";
import styled from 'styled-components';
import Header from './Header';
import Card from './Card';

const Container = styled.div`
  display: flex;
  background: black;
  flex-direction: column;
  align-items: center;
`;

function Page(props){
  return (
    <Container>
      <Header />
      <Card
        title = {props.title}
        hdurl = {props.hdurl}
        date = {props.date}
        explanation = {props.explanation}
        copyright = {props.copyright}
        cardURL = {props.url}/>
    </Container>
  );
}

export default Page;