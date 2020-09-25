import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import R from "../../res/R";

interface ButtonProps {
    text: string;
    onPress: () => void;
}
export default class Button extends React.Component<ButtonProps> {
    render() {
        const {text, onPress} = this.props;
        return (
            <TouchableOpacity onPress={onPress} style={styles.view}>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    view: {
        borderRadius: 12,
        width: 252,
        backgroundColor: R.colors.gold,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: R.colors.blue,
        padding: 20,
        fontSize: 24
    },
});