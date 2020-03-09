import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, route }) {
    const openMenu = () => {
        navigation.openDrawer();
    };
    return (
        <ImageBackground
            source={require("../assets/img/game_bg.png")}
            style={styles.header}
        >
            <MaterialIcons
                name="menu"
                size={28}
                onPress={openMenu}
                style={styles.hamburguer}
            />
            <View style={styles.headerTitle}>
                <Image
                    source={require("../assets/img/heart_logo.png")}
                    style={styles.headerImage}
                />
                <Text style={styles.headerText}>{route.name}</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    headerTitle: {
        flexDirection: "row"
    },
    headerImage: {
        width: 36,
        height: 36,
        marginRight: 10
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#333",
        letterSpacing: 1,
        marginRight: "35%"
    },
    hamburguer: {
        marginHorizontal: 30,
        marginLeft: 20,
        marginRight: 70
    }
});
