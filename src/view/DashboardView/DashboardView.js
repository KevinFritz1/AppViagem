import { View, StyleSheet, Text } from "react-native"


const DashboardView = ( navigation )=>{


    return(
        <View>
            <Text style={Style.texto}> TELA DE DASHBOARD </Text>
        </View>
    )
}

const Style = StyleSheet.create({
    texto:{
        // flex: 1,
        fontSize: 28,
        alignSelf: "center",
        marginTop: 80,
    }
})

export default DashboardView