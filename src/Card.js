import React from "react";

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