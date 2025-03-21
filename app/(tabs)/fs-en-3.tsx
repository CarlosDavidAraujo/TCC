import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }} // Replace with your image URL
          alt="App Logo"
          style={styles.logo}
          accessibilityLabel="App Logo"
        />

        <Text nativeID="usernameLabel" style={styles.label}>
          Username or Email
        </Text>
        <TextInput
          style={styles.input}
          accessibilityLabelledBy="usernameLabel"
          autoComplete="username"
          textContentType="username"
          placeholder="Enter username or email"
        />

        <Text nativeID="passwordLabel" style={styles.label}>
          Password
        </Text>
        <TextInput
          style={styles.input}
          accessibilityLabelledBy="passwordLabel"
          secureTextEntry={true}
          placeholder="Enter password"
          textContentType="password"
        />

        <TouchableOpacity style={styles.button} accessibilityLabel="Log In">
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.forgotPassword}
          accessibilityLabel="Forgot Password"
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", // Light background for good contrast
    justifyContent: "center",
  },
  content: {
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333333", // Dark text for good contrast
  },
  input: {
    height: 48, // Minimum touch target size
    borderColor: "#CCCCCC",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 16,
    color: "#333333", // Dark text for good contrast
  },
  button: {
    backgroundColor: "#007AFF", // Blue button for good contrast
    padding: 15,
    alignItems: "center",
    borderRadius: 8,
    marginTop: 20,
    minWidth: 48,
    minHeight: 48,
    margin: 8,
  },
  buttonText: {
    color: "#FFFFFF", // White text on blue for good contrast
    fontSize: 18,
  },
  forgotPassword: {
    marginTop: 10,
    alignItems: "center",
    minWidth: 48,
    minHeight: 48,
    margin: 8,
  },
  forgotPasswordText: {
    color: "#007AFF",
    fontSize: 16,
  },
});
