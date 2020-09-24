import React from 'react';
import { StyleSheet } from 'react-native';
import Login from "./ios/app/views/Login";
import Home from "./ios/app/views/Home";
import Loading from "./ios/app/views/Loading";
import  AsyncStorage  from '@react-native-community/async-storage';

const IS_CONNECTED_KEY = '@connected';

// Après chaque installation via npm faire un npx pod-install pour
// l'enregistrer dans le POD pour iOs
export default class App extends React.Component {

  state = {
    user: null,
    isConnected: null
  }

  async componentDidMount() {
      const isConnected = (await AsyncStorage.getItem(IS_CONNECTED_KEY)) === "true";
      console.log(isConnected);
      this.setState({ isConnected: isConnected })
  }

  loginUser = () => {
      AsyncStorage.setItem(IS_CONNECTED_KEY, 'true');

    this.setState({ isConnected: true });
  }

  logoutUser = () => {
      AsyncStorage.setItem(IS_CONNECTED_KEY, 'false');

      this.setState({ isConnected: false });
  }
  render() {
      if (this.state.isConnected === null)
          return <Loading />
    return (
        <>
          {!this.state.isConnected && <Login login={this.loginUser}/>}
          {this.state.isConnected && <Home logout={this.logoutUser}/>}
        </>
    );
  }
};

const styles = StyleSheet.create({
  view: {

  },
});
