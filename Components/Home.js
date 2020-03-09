import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Modal,
    Keyboard
} from "react-native";
import globalStyles from "../Styles/global.js";
import Card from "../Shared/Card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "../Components/reviewForm";

export default function Home({ navigation }) {
    // const pressHalddler = () => {
    //     navigation.navigate("ReviewDetails");
    // };
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { title: "Mario Kart", rating: 5, body: "Lorem ipsum", key: "1" },
        { title: "Bross wii", rating: 4, body: "Lorem ipsum", key: "2" },
        { title: "Something", rating: 2, body: "Lorem ipsum", key: "3" }
    ]);

    const addReview = review => {
        review.key = Math.random().toString();
        setReviews(currentReview => {
            return [review, ...currentReview];
        });
        setModalOpen(false);
    };
    return (
        <View style={globalStyles.styles.container}>
            {/* <Button title="Review Details" onPress={pressHalddler} /> */}
            <Modal visible={modalOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name="close"
                            size={30}
                            style={styles.closeModal}
                            onPress={() => setModalOpen(false)}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                name="add"
                size={30}
                style={styles.openModal}
                onPress={() => setModalOpen(true)}
            />

            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("ReviewDetails", { item })
                        }
                    >
                        <Card>
                            <Text style={styles.text}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "MontserratBold",
        fontSize: 16,
        marginVertical: 5
    },
    openModal: {
        zIndex: 1,
        position: "absolute",
        bottom: 20,
        right: 20,
        borderRadius: 50,
        backgroundColor: "pink",
        padding: 10,
        width: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4
    },
    closeModal: {
        alignSelf: "flex-end",
        padding: 10
    },
    modalContent: {
        flex: 1,
        padding: 10
    }
});
