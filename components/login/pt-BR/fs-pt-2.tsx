import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useTheme, Provider as PaperProvider } from "react-native-paper";

const TelaLogin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.label} nativeID="email">
        Email ou Nome de Usuário
      </Text>
      <TextInput
        style={styles.input}
        accessibilityLabelledBy="email"
        autoComplete="email"
        textContentType="emailAddress"
        onChangeText={setEmail}
        value={email}
      />

      <Text style={styles.label} nativeID="senha">
        Senha
      </Text>
      <TextInput
        style={styles.input}
        accessibilityLabelledBy="senha"
        secureTextEntry
        onChangeText={setSenha}
        value={senha}
      />

      <TouchableOpacity
        style={styles.button}
        accessible={true}
        accessibilityLabel="Entrar"
        onPress={() => console.log("Entrar pressionado")}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        accessible={true}
        accessibilityLabel="Esqueci a senha"
        onPress={() => console.log("Esqueci a senha pressionado")}
      >
        <Text style={styles.buttonText}>Esqueci a Senha</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#000",
  },
  input: {
    height: 48,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 8,
    color: "#000",
  },
  button: {
    backgroundColor: "#6200ee",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 8,
    minWidth: 48,
    minHeight: 48,
    margin: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default function App() {
  return (
    <PaperProvider>
      <TelaLogin />
    </PaperProvider>
  );
}
