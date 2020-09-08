import React from "react";
import LogoContainer from "./containers/LogoContainer";
import ButtonsContainer from "./containers/ButtonsContainer";
import ItemsContainer from "./containers/ItemsContainer";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  background-color:#3f454d;
}
button{
  background-color:transparent;
  border:none;
  outline:none;
  transition: transform 300ms ease;
  margin-right:20px;
  cursor:pointer;
}
button:hover{
  transform: scale(1.1);
}
ul{
  list-style:none;
}
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Container>
        <LogoContainer></LogoContainer>
        <ButtonsContainer></ButtonsContainer>
        <ItemsContainer></ItemsContainer>
      </Container>
    </div>
  );
}
