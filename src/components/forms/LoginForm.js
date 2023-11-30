import { View, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function LoginForm({ navigation, handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLoginPress = () => {
    // Simulated login logic, replace with your actual authentication process
    if (email === "user@example.com" && password === "password") {
      setIsLoggedIn(true);
      handleLogin(); // Trigger the handleLogin function passed from LoginScreen
    } else {
      Alert.alert("Success", "Login successfull");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    Alert.alert("Success", "Logged out successfully!");
  };

  const handleForgotPassword = () => {
    Alert.prompt(
      "Forgot Password",
      "Please enter your email address to reset your password.",
      (text) => {
        if (text === email) {
          Alert.alert(
            "Password Reset",
            `Password reset instructions sent to ${text}`
          );
        } else {
          Alert.alert(
            "Error",
            "The entered email does not match the registered email."
          );
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <Text variant="displayMedium" style={styles.header}>
        Login
      </Text>
      <TextInput
        mode="outlined"
        placeholder="Email"
        label="Email"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        mode="outlined"
        placeholder="Password"
        label="Password"
        secureTextEntry={showPass}
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        right={
          <TextInput.Icon
            icon={!showPass ? "eye" : "eye-off"}
            onPress={() => setShowPass(!showPass)}
          />
        }
      />
      <Button
        icon="login"
        mode="contained"
        style={[styles.button, { backgroundColor: "blue" }]}
        onPress={onLoginPress} // Trigger login action
      >
        Login
      </Button>
      <Button
        onPress={() => navigation.navigate("Register")}
        icon="account-plus"
        mode="contained"
        style={[styles.button, { backgroundColor: "blue" }]}
      >
        Register
      </Button>
      <Button
        onPress={handleForgotPassword}
        mode="text"
        style={[styles.forgotPasswordButton, { color: "black" }]}
      >
        Forgot Password?
      </Button>
      {isLoggedIn && (
        <Text style={styles.successMessage}>Login Successful!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    marginTop: 10,
  },
  button: {
    marginTop: 10,
    width: "100%",
  },
  forgotPasswordButton: {
    marginTop: 15,
    color: "black",
  },
  successMessage: {
    marginTop: 10,
    color: "green",
  },
});
