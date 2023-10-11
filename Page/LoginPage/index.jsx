import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import styled from 'styled-components/native';

const LoginPage = () => {
  return (
    <View style={styles.screen}>
      <Text>Image</Text>
      <Text>Input 1</Text>
      <Text>Input 2</Text>
      <Text>Buton</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }

  
})


export default LoginPage