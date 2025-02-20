import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {createTodo, getAllTodos, updateTodo} from './features/todoSlice';

const Form = ({toEditData, clearEditData}) => {
  const dispatch = useDispatch();
  const [isTodoAdded, setIsTodoAdded] = useState(false);
  const [isTodoEdited, setIsTodoEdited] = useState(false);
  const [title, setTitle] = useState('');
  const [des, setDes] = useState('');
  const inputRef = useRef(null);
  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch, isTodoAdded, isTodoEdited]);

  useEffect(() => {
    if (toEditData) {
      setTitle(toEditData?.title);
    setDes(toEditData?.description);
    inputFocus();
    }
  }, [toEditData]);

  console.log(toEditData?.title, toEditData?.description);
  const handleTitleChange = text => {
    setTitle(text);
    setIsTodoAdded(false)
    setIsTodoEdited(false)
  };

  const handleDesChange = text => {
    setDes(text);
    setIsTodoAdded(false)
    setIsTodoEdited(false)
  };

  const addTodo = () => {
    if (toEditData) {
      dispatch(
        updateTodo({id: toEditData._id, title: title, description: des}),
      );
      setIsTodoEdited(true);
      clearEditData();
      inputBlur();
    } else {
      dispatch(createTodo({title: title, description: des}));
      inputBlur();
      setIsTodoAdded(true);
    }
    setDes('');
    setTitle('');
  };

const inputFocus = () => {
  if (inputRef.current) {
    inputRef.current.focus();
  }
}
const inputBlur = () => {
  if (inputRef.current) {
    inputRef.current.blur();
  }
}

  return (
    <View>
      <Text style={styles.label}>Title</Text>
      <TextInput ref={inputRef}
        style={styles.input}
        onChangeText={handleTitleChange}
        value={title}
        placeholder="Enter todo title"
      />
      <Text style={styles.label}>Description</Text>
      <TextInput ref={inputRef}
        style={styles.input}
        onChangeText={handleDesChange}
        value={des}
        placeholder="Enter todo description"
      />
      <TouchableOpacity style={styles.button} onPress={addTodo}>
        <Text style={styles.buttonText}>
          {!toEditData ? 'Add Todo' : 'Update Todo'}
        </Text>
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
    marginVertical: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
