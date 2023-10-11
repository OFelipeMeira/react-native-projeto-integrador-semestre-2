import React, { useState } from "react";
import styled from "styled-components/native";

const FormWrapper = (props) => {
   const { type, children } = props;

   const FormWrapper = styled.View`
      background-color: #2890ff;
      width: 80%;
      height: 50px;
      padding: 2%;
      border-radius: 5px;
   `;

   return(
    <FormWrapper>{children}</FormWrapper>
   )

};

export default FormWrapper;
