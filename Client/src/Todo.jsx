import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const Todo = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>03/02/2025 11:30</Text>
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.title}>Title</Text>
          <Text style={styles.description}>Description</Text>
        </View>
        <View style={styles.iconsContainer}>
          <BouncyCheckbox
            size={25}
            fillColor="red"
            unFillColor="#FFFFFF"
            iconStyle={{ borderColor: 'red' }}
            innerIconStyle={{ borderWidth: 2 }}
            onPress={(checked) => setIsChecked(!isChecked)}
          />
          <Icon name="delete-outline" size={30} color="red" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAF3E0',
    padding: 7,
  },
  timeText: {
    textAlign: 'right',
    fontSize: 14,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
  },
  description: {
    fontSize: 18,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconsContainer: {
    flex: 1,
  },
});

export default Todo;
