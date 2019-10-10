import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 90vw;  
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  border-radius: 500rem;
  height: 100px;
  width: 100px
  margin: 20px;
  animation: App-logo-spin infinite 20s linear;
  pointer-events: none;

  @keyframes {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const APoD = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: white;
`;

const Heading = styled.h1`
  text-align: left;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  letter-spacing: 2px;
`;  
  
const Subheading = styled.h3`
  text-align: left;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  letter-spacing: 1.8px;
`;
  
const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="https://www.tomhazledine.com/images/showcases/nasa.gif" alt="Generic placeholder image" />
      <APoD>
        <Heading>APOD</Heading>
        <Subheading>Astronomy Picture of the Day</Subheading>
      </APoD>
    </HeaderContainer>
  );
};

export default Header;