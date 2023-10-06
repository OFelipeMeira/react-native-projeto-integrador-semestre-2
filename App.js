import { StyleSheet, Text, View } from "react-native";

import MyButton from "./Components/Button";
import Input from "./Components/Input";

export default function App() {
   return (
      <View
         style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
         }}
      >
        <Input></Input>
        <MyButton type="Login" />
      </View>
   );
}
