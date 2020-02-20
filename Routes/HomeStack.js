import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import ReviewDetails from "../Screens/ReviewDetails";

const Stack = createStackNavigator();

export default Navigator = () => {
    return (
        <NavigationContainer initialRouteName="Home">
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "Home",
                        headerStyle: {
                            backgroundColor: "pink",
                            height: 60,
                            headerTintColor: "#444"
                        }
                    }}
                />
                <Stack.Screen
                    name="ReviewDetails"
                    component={ReviewDetails}
                    options={{
                        title: "ReviewDetails"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
