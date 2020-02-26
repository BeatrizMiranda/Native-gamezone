import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import ReviewDetails from "../Screens/ReviewDetails";
import Header from "../Shared/Header";
const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={({ navigation }) => ({
                headerTintColor: "#333",
                headerStyle: { backgroundColor: "pink", height: 80 }
            })}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={({ navigation, route }) => ({
                    headerTitle: () => (
                        <Header navigation={navigation} route={route} />
                    )
                })}
            />
            <Stack.Screen
                name="ReviewDetails"
                component={ReviewDetails}
                options={{ title: "ReviewApp" }}
            />
        </Stack.Navigator>
    );
}

export default HomeStack;
