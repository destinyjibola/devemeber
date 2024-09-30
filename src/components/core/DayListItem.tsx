import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface DayProps {
  day: number;
}

export const DayListItem = ({ day }: DayProps) => {
  return (
    <Link href={`/(days)/day${day}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{day}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
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
    fontFamily: "Poppins",
  },
});
