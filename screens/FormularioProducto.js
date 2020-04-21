import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
export class FormularioProducto extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>FORMULARIO DE PROUDCTO</Text>
        <Button
          title="Detalle Compra"
          onPress={() => { this.props.navigation.navigate("DetalleCompra") }} />
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
