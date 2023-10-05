import { StyleSheet, Text, View } from 'react-native';

import MyButton from './Components/Button';


export default function App() {
  return (
    <View style={styles.container}>

      <MyButton
      text="A"
      color="#f0f"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
