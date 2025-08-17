import React, { useEffect, useState } from "react";
import { Usuario } from "../types";
import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Field from "./components/Field/Field";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./api/fetchData";

export default function Main() {
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

  if (isLoading || isFetching) {
    return (
      <View style={styles.fetchIndicator}>
        <Text style={styles.fetchIndicatorText}>Carregando dados...</Text>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  if (isError)
    return (
      <Text style={styles.fetchIndicatorText}>ERRO AO CARREGAR OS DADOS</Text>
    );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titleText}>Dados dos usuários</Text>
      {usuarios?.map((usuario: Usuario) => (
        <View style={styles.userContainer} key={usuario.id}>
          <View style={styles.userCard}>
            <Field label="Nome" value={usuario.name} />
            <Field label="Email" value={usuario.email} />
            <Field label="Cidade" value={usuario.address.city} />
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
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 14,
  },
  userContainer: {
    alignSelf: "flex-start",
  },
  userCard: {
    textAlign: "left",
    marginLeft: 18,
    paddingLeft: 10,
    marginBottom: 14,
    borderLeftWidth: 1,
    borderBottomWidth: 2,
  },
  fetchIndicator: {
    textAlign: "center",
    margin: "auto",
    gap: 20,
  },
  fetchIndicatorText: {
    fontSize: 28,
    fontWeight: "bold",
  },
});
