import React from "react";
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native";
import Restaurantdetail from "./screens/Restaurantdetail";
import Home from "./screens/Home"
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
import Ordercomplet from "./screens/Ordercomplet";
const store = configureStore();

export default function RootNavigation() {
    const Stack = createStackNavigator()
    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Restaurantdetail" component={Restaurantdetail} />
                    <Stack.Screen name="OrderCompleted" component={Ordercomplet} />
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>

    )
}