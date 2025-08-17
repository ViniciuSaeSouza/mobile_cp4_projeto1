import React, { useEffect, useState } from "react";
import { Usuario } from "../types";
import {
  ActivityIndicator,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Field from "./components/Field/Field";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchData } from "./api/fetchData";

export default function Main() {
  const queryClient = useQueryClient();
  const {
    data: usuarios,
    isLoading,
    isError,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchData,
  });

  //   const [dados, setDados] = useState<Usuario[]>([]);
  //   useEffect(() => {
  //     buscarDados();
  //     // console.log(dados);
  //   }, []);
  //
  //   const buscarDados = async () => {
  //     let response = await fetch(apiUrl);
  //     let json = await response.json();
  //     setDados(json);
  //   };

  if (isLoading || isFetching) {
    return (
      <View style={styles.fetchIndicator}>
        <Text>Carregando dados...</Text>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  if (isError)
    return <Text style={styles.fetchIndicator}>ERRO AO CARREGAR OS DADOS</Text>;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{ marginBottom: 14 }}>Dados dos usuários</Text>
      {usuarios?.map((usuario: Usuario) => (
        <View style={styles.userContainer} key={usuario.id}>
          <View style={styles.userCard}>
            <Field label="Nome" value={usuario.name} />
            <Field label="Email" value={usuario.email} />
            <Field label="City" value={usuario.address.city} />
          </View>
        </View>
      ))}
      <Button
        title="🔃Refetch"
        onPress={() => {
          //   console.log("Refetch button pressed");
          //   queryClient.invalidateQueries({ queryKey: ["users"] });
          refetch();
        }}
      ></Button>
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
  fetchIndicator: {
    textAlign: "center",
    margin: "auto",
  },
});
