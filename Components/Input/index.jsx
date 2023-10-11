import React from "react";
import styled from "styled-components/native";

const Input = (props) => {

   const { placeholder, keyboardType } = props

   const TextInput = styled.TextInput`
      background-color: transparent;
      width: 100%;
      height: 100%;
      padding: 2%;

      border-bottom: 1px solid blue;
      &:focus{
         background-color:red;
      }
   `;

   const Wrapper = styled.View`
      background-color: transparent;
      width: 80%;
      height: 50px;
      border-bottom-color: #2890ff;
      border-bottom-width: 2px;     
   `;

   return (
      <Wrapper>
         <TextInput placeholder={placeholder} keyboardType='number-pad' />
      </Wrapper>
   );
};

export default Input;
