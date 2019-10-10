import React from "react";
import Header from './Header';
import Card from './Card';

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