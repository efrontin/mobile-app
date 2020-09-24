import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import Logo from "../components/Logo";
import R from "../../../res/R";

interface LoginProps {
    login: () => void
}

export default class Login extends React.Component<LoginProps> {

    login = () => {
        this.props.login();
    }

    render() {
        return (
            <View style={styles.view}>
                <Logo size={200}/>
                <Text style={styles.text}>
                    {R.i18n.t('login.welcome')}
                </Text>
                <Button
                    onPress={this.login}
                    text={R.i18n.t('login.button')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1f325c'
    },
    text: {
        color: '#ffffff',
        fontSize: 24,
        margin: 20
    }
});