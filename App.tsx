import React, { Component } from "react";
import { SafeAreaView } from "react-navigation";
import { Provider } from "react-redux";
import AppContainer from "./src/Navigation/AppNavigation";
import store from "./src/Redux/store";

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Provider store={store}>
            <AppContainer />
        </Provider>
      </SafeAreaView>
    );
  }
}
