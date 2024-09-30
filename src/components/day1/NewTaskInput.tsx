import { View, TextInput, StyleSheet } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useState } from "react";
interface NewTaskInputProps {
  onAdd: (task: string) => void; // Pass task as parameter
}

const NewTaskInput = ({ onAdd }: NewTaskInputProps) => {
  const [task, setTask] = useState(""); // Manage input value with state

  const handleAddTask = () => {
    if (task.trim()) {
      onAdd(task); // Call onAdd with the current task
      setTask(""); // Clear input after adding
    }
  };

  return (
    
    <View style={styles.taskContainer}>
      <Fontisto name="checkbox-passive" size={20} color="black" />
      <TextInput
        style={styles.input}
        placeholder="Add new task"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddTask} // Add task on pressing "Enter"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  input: {
    fontSize: 15,
    fontFamily: "Poppins",
    flex: 1,
    textAlignVertical: "center",
    paddingTop: 8,
  },
});

export default NewTaskInput;
