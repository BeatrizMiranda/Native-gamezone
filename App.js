import React, { useState } from "react";
import Home from "./Components/Home";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import Navigator from "./Routes/Drawer";

const getFonts = () => {
    return Font.loadAsync({
        Montserrat: require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
        MontserratBold: require("./assets/fonts/Montserrat/Montserrat-Bold.ttf"),
        MontserratLight: require("./assets/fonts/Montserrat/Montserrat-Light.ttf"),
        MontserratThin: require("./assets/fonts/Montserrat/Montserrat-Thin.ttf")
    });
};

export default function App() {
    const [fontsLoaded, setfontsLoaded] = useState(false);

    if (fontsLoaded) {
        return <Navigator />;
    } else {
        return (
            <AppLoading
                startAsync={getFonts}
                onFinish={() => setfontsLoaded(true)}
            />
        );
    }
}
