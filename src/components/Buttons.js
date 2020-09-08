import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
`;

const ImgButton = styled.img`
  width: 60px;
  height: 60px;
`;

const ColorButton = styled.button`
  background-color: ${(props) => {
    if (props.blue) return "blue";
    else if (props.yellow) return "yellow";
    else return "pink";
  }};
  font-size: 15px;
  padding: 13px;
  border-radius: 5px;
`;
export default function Buttons({
  selectSkirt,
  selectTshirt,
  selectPants,
  selectBlue,
  selectYellow,
  selectPink,
}) {
  return (
    <ButtonContainer>
      <button>
        <ImgButton
          src="../imgs/blue_s.png"
          alt="skirt"
          onClick={() => {
            selectSkirt();
          }}
        />
      </button>
      <button>
        <ImgButton
          src="../imgs/blue_t.png"
          alt="tshirt"
          onClick={() => {
            selectTshirt();
          }}
        />
      </button>
      <button>
        <ImgButton
          src="../imgs/blue_p.png"
          alt="pants"
          onClick={() => {
            selectPants();
          }}
        />
      </button>
      <ColorButton
        blue
        onClick={() => {
          selectBlue();
        }}
      >
        Blue
      </ColorButton>
      <ColorButton
        yellow
        onClick={() => {
          selectYellow();
        }}
      >
        Yellow
      </ColorButton>
      <ColorButton
        pink
        onClick={() => {
          selectPink();
        }}
      >
        Pink
      </ColorButton>
    </ButtonContainer>
  );
}
