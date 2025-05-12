import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";

interface Props {
  label: string;
  position?: "left" | "right";
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function FAB({
  onPress,
  onLongPress,
  label,
  position = "right",
}: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.floatingBotton,
        position === "right" ? styles.positionRight : styles.positionLeft,
        pressed ? { opacity: 0.7 } : { opacity: 1 },
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={{ color: "white", fontSize: 20 }}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingBotton: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "#65558F",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 3,
    shadowRadius: 5,
  },
  positionRight: {
    right: 20,
  },
  positionLeft: {
    left: 20,
  },
});
