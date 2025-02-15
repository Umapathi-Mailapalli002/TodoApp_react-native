import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todo from './Todo.jsx';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Form from './Form.jsx';
import { deleteTodo, getAllTodos, toggleComplete } from './features/todoSlice.js';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  const { data } = useSelector(state => state.todos.todos);
  console.log(data);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Todo App</Text>
      <Form />
      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Todo
            todo={item}
            toggleToComplete={() =>
              dispatch(
                toggleComplete({
                  id: item._id,
                  isCompleted: !item.isCompleted,
                })
              )
            }
            onClick={() => dispatch(deleteTodo({ id: item._id }))}
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }} // Ensure bottom padding
        showsVerticalScrollIndicator={false} // Hide scrollbar for cleaner UI
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
