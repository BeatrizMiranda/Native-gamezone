import { StyleSheet } from "react-native";

const globalStyles = {
    styles: StyleSheet.create({
        container: {
            paddingHorizontal: 20,
            paddingVertical: 30,
            flex: 1,
            position: "relative"
        },
        paragraph: {
            marginVertical: 8,
            lineHeight: 20
        },
        titleText: {
            fontFamily: "Montserrat",
            fontSize: 18,
            color: "#333"
        }
    }),
    ratings: {
        "1": require("../assets/img/rating-1.png"),
        "2": require("../assets/img/rating-2.png"),
        "3": require("../assets/img/rating-3.png"),
        "4": require("../assets/img/rating-4.png"),
        "5": require("../assets/img/rating-5.png")
    }
};

export default globalStyles;
