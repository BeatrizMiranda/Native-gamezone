import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import globalStyles from "../Styles/global.js";
import { Formik } from "formik";

export default function ReviewForm({ addReview }) {
    return (
        <View style={globalStyles.styles.container}>
            <Formik
                initialValues={{ title: "", body: "", rating: "" }}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values);
                }}
            >
                {props => (
                    <View>
                        <TextInput
                            style={globalStyles.styles.input}
                            placeholder="Review title"
                            onChangeText={props.handleChange("title")}
                            value={props.values.title}
                        />

                        <TextInput
                            style={globalStyles.styles.input}
                            multiline
                            placeholder="Review details"
                            onChangeText={props.handleChange("body")}
                            value={props.values.body}
                        />

                        <TextInput
                            style={globalStyles.styles.input}
                            placeholder="Rating (1 - 5)"
                            onChangeText={props.handleChange("rating")}
                            value={props.values.rating}
                            keyboardType="numeric"
                        />

                        <Button
                            color="maroon"
                            title="Submit"
                            onPress={props.handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        </View>
    );
}
