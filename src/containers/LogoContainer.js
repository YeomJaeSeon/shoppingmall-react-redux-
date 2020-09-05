import React from "react";
import Logo from "../components/Logo";
import { useDispatch } from "react-redux";
import { selectAllAction } from "../module/item";

export default function LogoContainer() {
  const dispatch = useDispatch();
  const selectAll = () => {
    dispatch(selectAllAction());
  };
  return <Logo selectAll={selectAll}></Logo>;
}
