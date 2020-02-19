import React, { useState } from "react";
import Home from "./Screens/Home";
import { AppLoading } from "expo";
import * as Font from "expo-font";

const getFonts = () => {
    return Font.loadAsync({
        Montserrat: require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
        "Montserrat-bold": require("./assets/fonts/Montserrat/Montserrat-Bold.ttf"),
        "Montserrat-light": require("./assets/fonts/Montserrat/Montserrat-Light.ttf"),
        "Montserrat-thin": require("./assets/fonts/Montserrat/Montserrat-Thin.ttf")
    });
};

export default function App() {
    const [fontsLoaded, setfontsLoaded] = useState(false);

    if (fontsLoaded) {
        return <Home />;
    } else {
        return (
            <AppLoading
                startAsync={getFonts}
                onFinish={() => setfontsLoaded(true)}
            />
        );
    }
}
