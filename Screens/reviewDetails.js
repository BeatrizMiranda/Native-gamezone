import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import globalStyle from "../Styles/global.js";

export default function reviewDetails({ navigation }) {
    // const goBack = () => {
    //     navigation.goBack();
    // };
    return (
        <View style={globalStyle.container}>
            <Text>Review Details Screen</Text>
            {/* <Button title="Home" onPress={goBack} /> */}
        </View>
    );
}

const styles = StyleSheet.create({});
