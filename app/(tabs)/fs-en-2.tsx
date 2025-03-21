import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const LoginScreen = () => {
  const handleLogin = () => {
    // Handle login logic
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://via.placeholder.com/150" }} // Replace with your image URL
        alt="Company Logo"
        style={styles.logo}
      />

      <Text nativeID="usernameLabel" style={styles.label}>
        Username/Email
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
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        accessible={true}
        accessibilityLabel="Log In"
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.forgotPasswordButton}
        onPress={handleForgotPassword}
        accessible={true}
        accessibilityLabel="Forgot Password"
      >
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

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
    marginBottom: 5,
    color: "#333333", // Dark text for good contrast
  },
  input: {
    height: 48, // Minimum touch target size
    borderColor: "#CCCCCC",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    color: "#000000", // Black text for good contrast
  },
  button: {
    backgroundColor: "#007AFF", // Blue button for good contrast
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
    minWidth: 48,
    minHeight: 48,
    margin: 8,
  },
  buttonText: {
    color: "#FFFFFF", // White text for good contrast
    fontSize: 16,
  },
  forgotPasswordButton: {
    marginTop: 10,
    alignSelf: "center",
    minWidth: 48,
    minHeight: 48,
    margin: 8,
  },
  forgotPasswordText: {
    color: "#007AFF", // Blue text for good contrast
  },
});

export default LoginScreen;
