import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

export default function AccessibleLoginScreen() {
  const handleLogin = () => {
    // Login logic here
    console.log("Login pressed");
  };

  const handleForgotPassword = () => {
    // Forgot password logic here
    console.log("Forgot password pressed");
  };

  return (
    <View style={styles.container}>
      {/* Example Logo with alt text */}
      <Image
        source={{ uri: "https://via.placeholder.com/150" }} // Replace with your logo URL
        alt="Company Logo"
        style={styles.logo}
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
        textContentType="password"
        placeholder="Enter password"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        accessible={true}
        accessibilityLabel="Log in"
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.forgotPasswordButton}
        onPress={handleForgotPassword}
        accessible={true}
        accessibilityLabel="Forgot password"
      >
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#FFFFFF", // White background for good contrast
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
    height: 48,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 16,
    color: "#333333",
  },
  button: {
    backgroundColor: "#007AFF", // Blue button for good contrast
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
    minWidth: 48,
    minHeight: 48,
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF", // White text on blue button for good contrast
    fontSize: 18,
  },
  forgotPasswordButton: {
    marginTop: 10,
    alignSelf: "center",
    minWidth: 48,
    minHeight: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  forgotPasswordText: {
    color: "#007AFF",
    fontSize: 16,
  },
});
