import React from "react";
import styled from "styled-components/native";

const Input = () => {
   const TextInput = styled.TextInput`
      background-color: transparent;
      width: 100%;
      height: 100%;
      padding: 2%;

	border: 1px solid blue;
   `;

   const Wrapper = styled.View`
      background-color: transparent;
      width: 80%;
      height: 50px;

      /* border: 1px solid red; */
	  border-bottom: 2px solid green;
      
   `;

   return (
      <Wrapper>
         <TextInput placeholder="Email" />
      </Wrapper>
   );
};

export default Input;
