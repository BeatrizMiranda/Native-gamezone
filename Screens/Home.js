import React from "react";
import { Text, View, StyleSheet } from "react-native";
import globalStyle from "../Styles/global.js";

export default function Home() {
    return (
        <View style={globalStyle.container}>
            <Text style={styles.text}>Home Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Montserrat-Bold",
        fontSize: 20
    }
});
