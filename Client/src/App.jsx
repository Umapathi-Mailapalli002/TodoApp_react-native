import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Todo from './Todo.jsx';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Form from './Form.jsx';
import {getAllTodos} from './features/todoSlice.js';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);
  const data = useSelector(state => state.todos);
  console.log(data);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>Todo App</Text>
        <Form />
        <Todo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
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
