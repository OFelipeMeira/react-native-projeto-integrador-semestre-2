import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import LoginPage from './Page/LoginPage'
import RegisterPage from './Page/RegisterPage';

export default function App() {
  return (

//    <LoginPage />
   <RegisterPage />
  );
}

const styles = StyleSheet.create({
   view:{
      flex:1,
      alignContent:'center',
      justifyContent:'center',

   }
})
