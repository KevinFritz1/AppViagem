import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeView from "../../view/HomeView/HomeView";
import CadastroView from "../../view/CadastroView/CadastroView";
import LoginView from "../../view/LoginView/LoginView";
import DashboardView from "../../view/DashboardView/DashboardView";
import ViagemDetalhe from "../../view/ViagemView/VigemDetalhe";

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRoutName="TelaHome">
                <Stack.Screen
                    name="TelaHome"
                    component={HomeView}
                    options={{ headerShown: false }} // Oculta o cabeçalho para a tela Home
                />
                <Stack.Screen
                    name="TelaLogin"
                    component={LoginView}
                    options={{ headerShown: false }} // Oculta o cabeçalho para a tela de Login
                />
                <Stack.Screen
                    name="TelaCadastro"
                    component={CadastroView}
                    options={{ headerShown: false }} // Oculta o cabeçalho para a tela de Cadastro
                />
                <Stack.Screen
                    name="TelaDash"
                    component={DashboardView}
                    options={{ headerShown: false }} // Oculta o cabeçalho para a tela do Dashboard
                />
                <Stack.Screen
                    name="TelaViagemDetalhe"
                    component={ViagemDetalhe}
                    options={{ headerShown: false }} // Oculta o cabeçalho para a tela do Dashboard
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;
