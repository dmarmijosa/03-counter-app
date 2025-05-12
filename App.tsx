import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FAB from "./components/FAB";

export default function App() {
  const [count, setCount] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>
      <FAB
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        label="+1"
        position="right"
      />
      <FAB
        onPress={() => setCount(0)}
        onLongPress={() => setCount(0)}
        label="Reset"
        position="left"
      />
      {/* <TouchableOpacity>
        <Text>-1</Text>
      </TouchableOpacity> */}
      <StatusBar style="auto" />
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

  textHuge: {
    fontSize: 120,
    fontWeight: "100",
  },
});
