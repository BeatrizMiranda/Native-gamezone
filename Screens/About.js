import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function About() {
    return (
        <View style={styles.container}>
            <Text>About Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
});
