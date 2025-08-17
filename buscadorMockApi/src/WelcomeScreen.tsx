import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

interface WelcomeScreenProps {
  onNavigateToMain: () => void;
}

export default function WelcomeScreen({
  onNavigateToMain,
}: WelcomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text>Olá meu querido Fernando Pinéo!</Text>
      <Button title="Buscar os dados da API" onPress={onNavigateToMain} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: "auto",
  },
});
