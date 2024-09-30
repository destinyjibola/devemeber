import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import Fontisto from "@expo/vector-icons/Fontisto";
import NewTaskInput from "@/components/day1/NewTaskInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export type Task = {
  title: string;
  isFinished: boolean;
};

const dummyTasks: Task[] = [
  { title: "Set up task", isFinished: true },
  { title: "Render list", isFinished: true },
  { title: "Go to field", isFinished: false },
  { title: "Kill some dinosaur", isFinished: true },
  { title: "Flip the coins", isFinished: false },
];

const DayDetailsScreen = () => {
  const [tasks, setTasks] = useState<Task[]>(dummyTasks);

  const onItemPressed = (index: number) => {
    setTasks((currentTasks) => {
      const updatedTasks = [...currentTasks];
      updatedTasks[index] = {
        ...updatedTasks[index],
        isFinished: !updatedTasks[index].isFinished,
      };
      return updatedTasks;
    });
  };

  const onAddTask = (newTask: string) => {
    setTasks([...tasks, { title: newTask, isFinished: false }]);
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.page}>
        <Stack.Screen options={{ title: "TODO LIST" }} />
        <FlatList
          data={tasks}
          contentContainerStyle={{ gap: 10 }}
          renderItem={({ item, index }) => (
            <Pressable
              onPress={() => onItemPressed(index)}
              style={styles.taskContainer}
            >
              <Fontisto
                name={item.isFinished ? "checkbox-active" : "checkbox-passive"}
                size={20}
                color="black"
              />
              <Text
                style={[
                  styles.taskTitle,
                  {
                    textDecorationLine: item.isFinished
                      ? "line-through"
                      : "none",
                  },
                ]}
              >
                {item.title}
              </Text>
            </Pressable>
          )}
          ListFooterComponent={() => <NewTaskInput onAdd={onAddTask} />} // Pass onAddTask
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 15,
    backgroundColor: "white",
    flex: 1,
  },
  taskContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  taskTitle: {
    fontSize: 15,
    fontFamily: "Poppins",
    flex: 1,
  },
});

export default DayDetailsScreen;
