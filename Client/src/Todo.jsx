import { View, Text, StyleSheet } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react' // Import useState

const Todo = () => {
  const [isChecked, setIsChecked] = useState(false); 

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>03/02/2025 11:30</Text>
      <View>
        <View>
          <Text style={styles.title}>title</Text>
          <Text style={styles.description}>description</Text>
        </View>
        <View>
        <CheckBox
          value={isChecked} // Current state
          onValueChange={setIsChecked} 
          tintColors={{ true: '#2196F3', false: '#ccc' }} 
        />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAF3E0",
    padding: 7
  },
  timeText: {
    textAlign: 'right',
    fontSize: 14,
  },
  title: {
    fontSize: 22,
    fontWeight: '600'
  },
  description: {
    fontSize: 18,
  }
})

export default Todo;
