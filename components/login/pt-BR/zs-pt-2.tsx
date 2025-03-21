import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Lógica de login aqui
    if (username === "" && password === "") {
      Alert.alert("Erro", "Preencha os campos de usuário e senha.");
    } else {
      Alert.alert("Sucesso", "Login realizado com sucesso!");
    }
  };

  const handleForgotPassword = () => {
    // Lógica para recuperação de senha aqui
    Alert.alert("Esqueci a Senha", "Recuperação de senha em desenvolvimento.");
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Nome de Usuário / E-mail"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        accessibilityLabel="Nome de usuário ou e-mail"
        accessibilityHint="Digite seu nome de usuário ou e-mail"
      />
      <TextInput
        label="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        accessibilityLabel="Senha"
        accessibilityHint="Digite sua senha"
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Entrar
      </Button>
      <Button
        onPress={handleForgotPassword}
        style={styles.forgotPasswordButton}
      >
        Esqueci a Senha
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
  forgotPasswordButton: {
    marginTop: 8,
    alignSelf: "center",
  },
});
