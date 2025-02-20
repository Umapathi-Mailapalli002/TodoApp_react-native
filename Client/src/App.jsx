import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todo from './Todo.jsx';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Form from './Form.jsx';
import { deleteTodo, getAllTodos } from './features/todoSlice.js';

const App = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.todos.todos);
  const [todos, setTodos] = useState(null);
  const [editData, setEditData] = useState(null)

  const handleDelete = (item) => {
    const newTodos = data.filter((todo) => todo._id !== item._id);
    setTodos(newTodos);
    dispatch(deleteTodo({ id: item._id }));
  }
  // Memoized handleEdit function
  const handleEdit = useCallback((item) => {
    setEditData(item);
  }, [editData]);

  const clearEditData = () => {
    setEditData(null);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Todo App</Text>
      <Form toEditData={editData} clearEditData={clearEditData}/>
      <FlatList
        data={!todos ? data : todos}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Todo
            todo={item}
            handleDelete={() => handleDelete(item)}
            handleEdit={() => handleEdit(item)}
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,  // Ensure it takes the full height
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 30,
    color: '#0000ff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 30,
  },
});

export default App;
