import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo, getAllTodos } from './features/todoSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [isTodoAdded, setIsTodoAdded] = useState(false);
  const [title, setTitle] = useState('')
  const [des, setDes] = useState('')
 useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch, isTodoAdded]);
  const handleTitleChange = (text) => {
    setTitle(text);
    setIsTodoAdded(false);

  };
  const handleDesChange = (text) => {
    setDes(text);
    setIsTodoAdded(false);

  };
  const addTodo = () => {
    dispatch(createTodo({title: title, description: des}));
    setIsTodoAdded(true);
    setDes('')
    setTitle('')
  };

  return (
    <View>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleTitleChange}
        value={title}
        placeholder="Enter todo title"
      />
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleDesChange}
        value={des}
        placeholder="Enter todo description"
      />
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
    marginVertical: 8
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
