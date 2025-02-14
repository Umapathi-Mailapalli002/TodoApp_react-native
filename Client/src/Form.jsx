import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from './features/todoSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [des, setDes] = useState('');
  const handleTitleChange = (title) => {
    setTitle(title);
  }
  const handleDesChange = (des) => {
    setDes(des);
  }
  const addTodo = () => {
    console.log(title, des)
    dispatch(createTodo({
      title: title,
      description: des
    }))
  };
  return (
    <View>
      <Text style={styles.label}>Title</Text>
      <TextInput style={styles.input} onChange={handleTitleChange} value={title} placeholder="Enter todo title" />
      <Text style={styles.label}>Description</Text>
      <TextInput style={styles.input} value={des} onChange={handleDesChange} placeholder="Enter todo description" />
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
