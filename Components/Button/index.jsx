import React, { useState } from "react";
import { Pressable, Text } from "react-native";
import styled from "styled-components";

import style from "./style.css";

const MyButton = (props) => {
  const { text, color } = props;
  const click = () => {
    console.log(style.buttonTxt);
  };

  const Button = styled.button`
    color: ${color};
  `;

  return <Button>{text}</Button>;
};

export default MyButton;



Compnente(
    Style(
        dsad,
        dsadm,
        dsad.,
        m
    )

)