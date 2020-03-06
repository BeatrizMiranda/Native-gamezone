import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import globalStyles from "../Styles/global.js";
import Card from "../Shared/Card.js";

export default function ReviewDetails({ route, navigation }) {
    // const goBack = () => {
    //     navigation.goBack();
    // };
    const rating = route.params.item.rating;
    console.log("route", route);
    console.log("route stars", route.params.item.rating);
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{route.params.item.title}</Text>
                <Text>{route.params.item.body}</Text>
                <View style={styles.rating}>
                    <Text>Gamezone Rating: </Text>
                    {/* <Image source={require(images.ratings[rating])} /> */}
                </View>
                {/* <Button title="Home" onPress={goBack} /> */}
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    rating: {}
});
