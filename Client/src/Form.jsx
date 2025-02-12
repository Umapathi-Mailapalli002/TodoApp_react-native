import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Form = () => {
  const addTodo = () => {};
  return (
    <View>
      <Text style={styles.label}>Title</Text>
      <TextInput style={styles.input} placeholder="Enter todo title" />
      <Text style={styles.label}>Description</Text>
      <TextInput style={styles.input} placeholder="Enter todo description" />
      <TouchableOpacity style={styles.button} onPress={addTodo}>
        <Text style={styles.buttonText}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  label: {fontSize: 24, marginBottom: 5, fontWeight: 600},
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#007BFF', // Button color
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
