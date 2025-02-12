import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const Todo = ({todo, onClick}) => {
  const {title, description, isCompleted, createdAt} = todo || {};
  const [isChecked, setIsChecked] = useState(isCompleted);

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>{createdAt}</Text>

      {/* Content Section */}
      <View style={styles.innerContainer}>
        {/* Text Section */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>

        {/* Icons Section */}
        <View style={styles.iconsContainer}>
          <View>
          <BouncyCheckbox 
            size={25}
            fillColor="red"
            unFillColor="#FFFFFF"
            iconStyle={{borderColor: 'red'}}
            innerIconStyle={{borderWidth: 2}}
            onPress={() => setIsChecked(!isChecked)}
          />
          </View>
          <View>
          <Icon onPress={onClick} name="delete-outline" size={30} color="red" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    backgroundColor: '#FAF3E0',
    padding: 10,
  },
  timeText: {
    textAlign: 'right',
    fontSize: 14,
    marginBottom: 5,
  },
  innerContainer: {
    flex: 0,
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default Todo;
