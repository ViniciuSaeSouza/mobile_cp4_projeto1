import React from "react";
import { FieldType } from "../../../types";
import { StyleSheet, Text } from "react-native";

export default function Field({ label, value }: FieldType) {
  return (
    <Text>
      <Text style={styles.textLabel}>{label}: </Text>
      <Text>{value}</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  textLabel: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
