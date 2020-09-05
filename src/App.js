import React from "react";
import LogoContainer from "./containers/LogoContainer";
import ButtonsContainer from "./containers/ButtonsContainer";
import ItemsContainer from "./containers/ItemsContainer";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    background-color: #3f454d;
  }
  button{
    background-color:transparent;
    border:none;
    outline:none;
    margin:10px 10px;
    transition : transform 300ms ease;
  }
  button:hover{
    transform: scale(1.1);
  }
  ul{
    list-style:none;
    padding-left:0px;
    width:60%;
    height:60%;
    overflow-y:scroll;
  }
  li{
    background-color:white;
    margin-bottom:15px;
    padding:10px;
    display:flex;
    align-items:center;
  }
`;
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <Container>
      <GlobalStyle />
      <LogoContainer></LogoContainer>
      <ButtonsContainer></ButtonsContainer>
      <ItemsContainer></ItemsContainer>
    </Container>
  );
}
