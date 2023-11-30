import { View, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function ForgotPasswordScreen() {
  const handlePasswordRecovery = () => {
    Alert.prompt(
      "Password Recovery",
      "Please enter your email address to recover your password.",
      (text) => {
        
        Alert.alert(
          "Password Recovery",
          `Password recovery instructions sent to ${text}`
        );
      }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Forgot Password Screen</Text>
      { }
      <Button
        mode="contained"
        onPress={handlePasswordRecovery}
        style={styles.button}
      >
        Recover Password
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: "blue",
  },
});
