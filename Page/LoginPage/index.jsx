import React from 'react'
import { View, StyleSheet } from 'react-native'
import styled from "styled-components/native";

import Button from '../../Components/Button'
import Input from '../../Components/Input'
import Logo from '../../Components/Logo';

const LoginPage = () => {
  const FormWrapper = styled.View`
  background-color: #e9e9e9;
  width: 80%;
  height: 500px;
  margin-top: 10%;
  padding: 2%;
  border-radius: 5px;
  justify-content:space-around;
  align-items: center;
  `;

  return (
    <View style={styles.screen}>

      <FormWrapper>
        <Logo />
        <Input
          placeholder="Email"
        />
        <Input
          placeholder="Password"
        />
        <Button
          type={"Login"}
        />
        <Button
          type={"Register"}
        />
      </FormWrapper>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  container: {
    height: '60%',
    widdth: '100%',
    backgroundColor: 'red'
  }
})
export default LoginPage