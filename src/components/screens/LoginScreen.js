import { View } from "react-native";
import React from "react";
import LoginForm from "../forms/LoginForm";

export default function LoginScreen(props) {
  const handleLogin = () => {
    
    console.log("Login function triggered");
    
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
      }}
    >
      <LoginForm {...props} handleLogin={handleLogin} />
    </View>
  );
}
