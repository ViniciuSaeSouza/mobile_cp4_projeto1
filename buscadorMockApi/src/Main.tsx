import React, { useEffect, useState } from "react";
import { Usuario } from "../types";
import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
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
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>Dados dos usuários</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {usuarios?.map((usuario: Usuario) => (
          <View style={styles.userContainer} key={usuario.id}>
            <View style={styles.userCard}>
              <Field label="Nome" value={usuario.name} />
              <Field label="Email" value={usuario.email} />
              <Field label="Cidade" value={usuario.address.city} />
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.refetchButton}
          onPress={() => refetch()}
        >
          <Text style={styles.refetchButtonColor}>Refetch</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
  },
  topContainer: {
    backgroundColor: "#2968bbff",
    width: "100%",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 8,
    textAlign: "center",
    color: "#fff",
  },
  scrollContainer: {
    paddingVertical: 10,
    width: "90%",
    margin: "auto",
  },
  userContainer: {
    alignSelf: "flex-start",
    width: "100%",
  },
  userCard: {
    textAlign: "left",
    paddingLeft: 8,
    paddingVertical: 10,
    marginBottom: 0,
    borderLeftWidth: 1,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    width: "100%",
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
  bottomContainer: {
    padding: 12,
    width: "100%",
    backgroundColor: "#302f2fff",
    alignItems: "center",
  },
  refetchButton: {
    backgroundColor: "#388effff",
    borderRadius: 5,
    padding: 10,
    minWidth: "50%",
  },
  refetchButtonColor: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
