import { View, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function RegisterForm({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleRegistration = () => {
   
    if (password !== rePassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    
    Alert.alert("Success", "Registration Successful!");
    
  };

  return (
    <View style={styles.container}>
      <Text variant="displayMedium" style={styles.header}>
        Register
      </Text>
      {}
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
        secureTextEntry={true}
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        mode="outlined"
        placeholder="Re-type Password"
        label="Re-type Password"
        secureTextEntry={true}
        style={styles.input}
        value={rePassword}
        onChangeText={(text) => setRePassword(text)}
      />
      <Button
        icon="account-plus"
        mode="contained"
        style={[styles.button, { backgroundColor: 'blue' }]}
        onPress={handleRegistration}
      >
        Register
      </Button>
      <Button
        onPress={() => navigation.pop()}
        icon="arrow-left"
        mode="contained"
        style={[styles.button, { backgroundColor: 'blue' }]}
      >
        Go Back
      </Button>
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
});
