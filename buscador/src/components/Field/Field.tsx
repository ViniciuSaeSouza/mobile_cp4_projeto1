import React from "react";
import { FieldType } from "../../../types";
import { Text } from "react-native";

export default function Field({ label, value }: FieldType) {
  return (
    <Text>
      <Text style={{ fontWeight: "bold" }}>{label}: </Text>
      <Text>{value}</Text>
    </Text>
  );
}
