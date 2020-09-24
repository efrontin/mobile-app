import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

interface HomeProps {
    logout: () => void
}

export default class Home extends React.Component<HomeProps> {

    logout = () => {
        this.props.logout();
    }

    render() {
        return (
            <View style={styles.view}>
                <Text>Welcome!</Text>
                <Button
                    onPress={this.logout}
                    title="Déconnexion"
                />
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