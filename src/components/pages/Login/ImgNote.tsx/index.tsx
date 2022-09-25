import React from "react";
import styled from "styled-components";
import logoNote from "../../../../assets/notebook.png";
import logoC from "../../../../assets/logo-compasso.png";

export const LogoContainer = styled.div`
    width: 50vw;
    height: 100vh;
    background-image: url(${logoNote});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const LogoCompass = styled.img`
    margin: 3.2vh 17vw;
    width: 15.9vw;
    image: url(${logoC});
    z-index: 3;
`;

const LogoImg = () => {
  return (
      <LogoContainer>
          <LogoCompass src={logoC} alt="Logo Compass.Oul"/>
      </LogoContainer>
  );
};

export default LogoImg;