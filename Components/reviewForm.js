import React from "react";
import {
    StyleSheet,
    Button,
    TextInput,
    View,
    Text,
    ViewPropTypes
} from "react-native";
import globalStyles from "../Styles/global.js";
import { Formik } from "react-native-formik";

export default ReviewForm = () => {
    return (
        <View style={globalStyles.styles.container}>
            <Formik
                initialValues={{
                    title: "",
                    body: "",
                    rating: ""
                }}
                onSubmit={values => {}}
            >
                {formikProps => (
                    <View>
                        <TextInput
                            style={globalStyles.styles.input}
                            placeholder="Review Title"
                            onChangeText={formikProps.handdleChange("title")}
                            value={props.value.title}
                        />
                        <TextInput
                            multiline
                            style={globalStyles.styles.input}
                            placeholder="Review Body"
                            onChangeText={formikProps.handdleChange("body")}
                            value={props.value.body}
                        />
                        <TextInput
                            style={globalStyles.styles.input}
                            placeholder="Rating (1-5)"
                            onChangeText={formikProps.handdleChange("rating")}
                            value={props.value.rating}
                        />
                    </View>
                )}
            </Formik>
        </View>
    );
};
