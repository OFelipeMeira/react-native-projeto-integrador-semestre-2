import React, { useState } from "react";
import styled from "styled-components/native";

const MyButton = (props) => {
   const { type } = props;

   const Login = styled.TouchableOpacity`
      background-color: #2890ff;
      width: 80%;
      height: 50px;
      padding: 2%;
      border-radius: 5px;
   `;

   const LoginText = styled.Text`
      color: #ffffff;
      font-size: 25px;
      margin: auto;
   `;

   const Register = styled.TouchableOpacity`
      width: 30%;
      height: 30px;
      border-radius: 5px;
   `;
   const RegisterText = styled.Text`
      color: #2890ff;
      font-size: 17px;
      margin: auto;
   `;

   switch (type) {
      case "Login":
         return (
            <Login>
               <LoginText>Login</LoginText>
            </Login>
         );
      case "Register":
         return (
            <Register>
               <RegisterText>Register</RegisterText>
            </Register>
         );

      default:
         return (
            <Login>
               <Text>Errou ai irmão</Text>
            </Login>
         );
   }
};

export default MyButton;
