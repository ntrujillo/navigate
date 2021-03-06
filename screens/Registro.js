import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { Input } from "react-native-elements"
import { userRegister } from "../services/servicios.login"


export class Registrarse extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    toLogin = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Register</Text>
                <Input
                    placeholder="Email"
                    value={this.state.email}
                    onChangeText={(email) => { this.setState({ email: email }) }} />
                <Input
                    placeholder="Password"
                    value={this.state.password}
                    onChangeText={(password) => { this.setState({ password: password }) }}
                    secureTextEntry={true}
                />
                <Button
                    title="Registrar"
                    onPress={() => {
                        userRegister(this.state.email, this.state.password, this.toLogin);
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
