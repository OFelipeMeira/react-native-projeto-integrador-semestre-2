import styled from 'styled-components/native'

const Logo = () => {

    const Image = styled.View`
        width:200px;
        height:200px;
        background-color:red;
    `

    const Text = styled.Text`
    margin: auto;
    font-weight:700;
    font-size:20px;
    `



    return (
        <Image>
            <Text>LOGO DO BANCO</Text>
        </Image>
    );
}

export default Logo;