import React from "react";
import styled from "styled-components";
import { PatterHeader } from "./Header";

 export const Conteiner = styled.section`
  display: flex;
  max-width: 50%;
`;
 
const Home = () => {
  return (
    <Conteiner>
      <PatterHeader/>
    </Conteiner>
  );
};

export default Home;