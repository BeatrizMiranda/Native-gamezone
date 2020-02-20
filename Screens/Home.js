import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from "react-native";
import globalStyle from "../Styles/global.js";

export default function Home({ navigation }) {
    // const pressHalddler = () => {
    //     navigation.navigate("ReviewDetails");
    // };
    const [reviews, setreviews] = useState([
        { title: "Mario Kart", rating: 5, body: "Lorem ipsum", key: "1" },
        { title: "Bross wii", rating: 4, body: "Lorem ipsum", key: "2" },
        { title: "Something", rating: 2, body: "Lorem ipsum", key: "3" }
    ]);
    return (
        <View style={globalStyle.container}>
            {/* <Button title="Review Details" onPress={pressHalddler} /> */}
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("ReviewDetails", item)
                        }
                    >
                        <Text style={globalStyle.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Montserrat-Bold",
        fontSize: 20
    }
});
