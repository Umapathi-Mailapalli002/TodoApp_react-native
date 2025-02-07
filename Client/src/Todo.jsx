import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const Todo = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>03/02/2025 11:30</Text>

      {/* Content Section */}
      <View style={styles.innerContainer}>
        {/* Text Section */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Title</Text>
          <Text style={styles.description}>Description</Text>
        </View>

        {/* Icons Section */}
        <View style={styles.iconsContainer}>
          <BouncyCheckbox
            size={25}
            fillColor="red"
            unFillColor="#FFFFFF"
            iconStyle={{ borderColor: 'red' }}
            innerIconStyle={{ borderWidth: 2 }}
            onPress={() => setIsChecked(!isChecked)}
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
    padding: 10,
  },
  timeText: {
    textAlign: 'right',
    fontSize: 14,
    marginBottom: 5,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1, // Allows text to take up remaining space
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
  },
  description: {
    fontSize: 18,
    color: '#555',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10, // Adds spacing between checkbox and delete icon
  },
});

export default Todo;
