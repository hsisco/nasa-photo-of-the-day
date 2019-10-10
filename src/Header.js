import React from 'react';

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