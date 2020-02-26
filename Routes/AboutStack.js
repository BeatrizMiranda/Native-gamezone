import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../Screens/About";
import Header from "../Shared/Header";

const Stack = createStackNavigator();

function AboutStack() {
    return (
        <Stack.Navigator
            screenOptions={({ navigation, route }) => ({
                headerTitle: () => (
                    <Header navigation={navigation} route={route} />
                )
            })}
        >
            <Stack.Screen
                name="About"
                component={About}
                options={{
                    title: "About",
                    headerStyle: {
                        backgroundColor: "pink"
                    },
                    headerTintColor: "#333"
                }}
            />
        </Stack.Navigator>
    );
}

export default AboutStack;