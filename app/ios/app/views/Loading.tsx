import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default class Loading extends React.Component{
    render() {
        return (
                <View style={styles.view}>
                    <Text>Loading...</Text>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});