import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
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
});

export default globalStyles;

// export const images = {
//     ratings: {
//         "1": require("../assets/img/rating-1.png"),
//         "2": require("../assets/img/rating-2.png"),
//         "3": require("../assets/img/rating-3.png"),
//         "4": require("../assets/img/rating-4.png"),
//         "5": require("../assets/img/rating-5.png")
//     }
// };
