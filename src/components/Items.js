import React from "react";
import styled from "styled-components";

const ImgBtn = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
`;

const ImgDescription = styled.span`
  font-size: 20px;
`;

export default function Items({ getItems }) {
  return (
    <ul>
      {getItems.map((value) => {
        return (
          <div key={value.id}>
            <li>
              <ImgBtn src={value.image} alt={value.type} />
              <ImgDescription>
                {value.gender}, {value.size} size
              </ImgDescription>
            </li>
          </div>
        );
      })}
    </ul>
  );
}
