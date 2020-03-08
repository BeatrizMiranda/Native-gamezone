import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const Card = props => {
    return (
        <View style={style.card}>
            <View style={style.cardContent}>{props.children}</View>
        </View>
    );
};

const style = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: "#fff",
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        margin: 5,
        shadowRadius: 2
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10
    }
});

export default Card;
