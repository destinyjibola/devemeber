import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { DayListItem } from "@components/core/DayListItem";

const days = [...Array(24)].map((val, index) => index + 1);

export default function HomeScreen() {
 
  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({ item }) => <DayListItem day={item} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    // gap: 10,
    padding: 20,
  },

  box: {
    backgroundColor: "white",
    // width: 150,
    // height: 150,
    aspectRatio: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1.5,
    borderRadius: 20,
  },

  text: {
    fontSize: 35,
  },
  content: {
    gap: 10,
  },
  column: {
    gap: 10,
    // padding: 20
  },
});
