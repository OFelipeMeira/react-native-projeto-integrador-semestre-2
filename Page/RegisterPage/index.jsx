import { View, StyleSheet } from 'react-native'
import styled from "styled-components/native";

import Button from '../../Components/Button'
import Input from '../../Components/Input'
import Logo from '../../Components/Logo';

/*
Nome
Senha
CPF
email
CEP
Tel
*/

const RegisterPage = () => {
    const FormWrapper = styled.View`
    background-color: #e9e9e9;
    width: 80%;
    height: 700px;
    margin-top: 10%;
    padding: 2%;
    border-radius: 5px;
    justify-content:space-around;
    align-items: center;
    `;
    return (
        <View style={styles.screen}>

            <FormWrapper>
                <Input
                    placeholder="Name"
                    // keyboardType="Number"
                />
                <Input
                    placeholder="CPF"
                />
                <Input
                    placeholder="Email"
                />
                <Input
                    placeholder="CEP"
                />
                <Input
                    placeholder="Phone"
                />
                <Input
                    placeholder="Password"
                />
                <Input
                    placeholder="Confirm Password"
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
export default RegisterPage