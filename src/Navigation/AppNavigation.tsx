import React from "react";
import {
    createAppContainer,
    // createDrawerNavigator,
    // createStackNavigator,
    createSwitchNavigator
} from "react-navigation";

import Home from "../Screens/Home";



const AppContainer = createAppContainer(
    createSwitchNavigator({
        Home: {
            screen: Home
        }
    })


)

export default AppContainer