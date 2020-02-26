import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default Card = props => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>{props.children}</View>
        </View>
    );
};

const style = StyleSheet.create({
    card: {},
    cardContent: {}
});
