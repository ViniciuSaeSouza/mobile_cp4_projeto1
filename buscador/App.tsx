import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Usuario } from "./types";
import Field from "./src/components/Field/Field";

export default function App() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const [dados, setDados] = useState<Usuario[]>([]);

  useEffect(() => {
    buscarDados();
    // console.log(dados);
  }, []);

  const buscarDados = async () => {
    let response = await fetch(apiUrl);
    let json = await response.json();
    setDados(json);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Dados dos usuários</Text>
      {dados.map((usuario) => (
        <View style={styles.userContainer} key={usuario.id}>
          <View style={styles.userCard}>
            <Field label="Nome" value={usuario.name}/>
            <Field label="Email" value={usuario.email}/>
            <Field label="City" value={usuario.address.city}/>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  userContainer: {
    alignSelf: "flex-start",
  },
  userCard: {
    textAlign: "left",
    marginLeft: 18,
    paddingLeft: 10,
    marginBottom: 10,
    borderLeftWidth: 1,
  },
});
