import React from "react";
import Items from "../components/Items";
import { useSelector } from "react-redux";

export default function ItemsContainer() {
  const getItems = useSelector((state) => state.itemReducer.display);

  return <Items getItems={getItems}></Items>;
}
