import React from "react";
import styled from "styled-components";

const LogoImg = styled.img`
  &:hover {
    transform: scale(1.1);
  }
  transition: transform 300ms ease;
  margin-bottom: 20px;
`;

export default function Logo({ selectAll }) {
  return (
    <LogoImg
      src="../imgs/logo.png"
      alt=""
      onClick={() => {
        selectAll();
      }}
    />
  );
}
