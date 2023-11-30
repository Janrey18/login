import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { PaperProvider, MD3LightTheme as DefaultTheme } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./src/components/screens/LoginScreen";
import RegisterScreen from "./src/components/screens/RegisterScreen";
import ForgotPasswordScreen from "./src/components/screens/ForgotPasswordScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  const theme = {
    ...DefaultTheme,
    
  };

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={LoginScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Register"
              component={RegisterScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="ForgotPassword"
              component={ForgotPasswordScreen} 
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}

