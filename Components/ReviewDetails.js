import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import globalStyle from "../Styles/global.js";

export default function ReviewDetails({ route, navigation }) {
    // const goBack = () => {
    //     navigation.goBack();
    // };
    console.log("route", route);
    return (
        <View style={globalStyle.container}>
            <Text>{route.params.item.title}</Text>
            <Text>{route.params.item.body}</Text>
            <Text>{route.params.item.rating}</Text>
            {/* <Button title="Home" onPress={goBack} /> */}
        </View>
    );
}

const styles = StyleSheet.create({});
