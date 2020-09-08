import React from "react";
import styled from "styled-components";

const ImgLogo = styled.img`
  &:hover {
    transform: scale(1.1);
  }
  transition: transform 300ms ease;
  cursor: pointer;
`;

export default function Logo({ showAll }) {
  return (
    <ImgLogo
      src="../imgs/logo.png"
      alt="logo"
      onClick={() => {
        showAll();
      }}
    />
  );
}
