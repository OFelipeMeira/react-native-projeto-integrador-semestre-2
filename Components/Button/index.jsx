import React, { useState } from "react";
import styled from "styled-components/native";

const MyButton = (props) => {
   const { type } = props;

   const Button = styled.TouchableOpacity`
      background-color: #2890ff;
      width: 80%;
      height: 50px;
      padding: 2%;
      border-radius: 5px;
   `;

   const Text = styled.Text`
      color: #ffffff;
      font-size: 25px;
      margin: auto;
   `;

   switch (type) {
      case "Login":
         return (
            <Button>
               <Text>Login</Text>
            </Button>
         );
      case "Register":
         return (
            <Button>
               <Text>Register</Text>
            </Button>
         );

      default:
         return (
            <Button>
               <Text>Errou ai irmão</Text>
            </Button>
         );
   }
};

export default MyButton;
