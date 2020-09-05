import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const ImgBtn = styled.img`
  width: 60px;
  height: 60px;
`;
const ColorBtn = styled.button`
  background-color: ${(props) => {
    if (props.blue) return "blue";
    else if (props.yellow) return "yellow";
    else return "pink";
  }};
  font-size: 20px;
  padding: 10px;
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
    <Container>
      <button>
        <ImgBtn
          src="../imgs/blue_s.png"
          alt="skirt"
          onClick={() => {
            selectSkirt();
          }}
        />
      </button>
      <button>
        <ImgBtn
          src="../imgs/blue_t.png"
          alt="tshirt"
          onClick={() => {
            selectTshirt();
          }}
        />
      </button>
      <button>
        <ImgBtn
          src="../imgs/blue_p.png"
          alt="pants"
          onClick={() => {
            selectPants();
          }}
        />
      </button>
      <ColorBtn
        blue
        onClick={() => {
          selectBlue();
        }}
      >
        Blue
      </ColorBtn>
      <ColorBtn
        yellow
        onClick={() => {
          selectYellow();
        }}
      >
        Yellow
      </ColorBtn>
      <ColorBtn
        pink
        onClick={() => {
          selectPink();
        }}
      >
        Pink
      </ColorBtn>
    </Container>
  );
}
