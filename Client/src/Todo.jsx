import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { indianFormatTime } from '../utils/indianFormatTime';
import { useDispatch } from 'react-redux';
import { toggleComplete } from './features/todoSlice';

const Todo = ({todo, handleDelete, handleEdit}) => {
  const {_id, title, description, isCompleted, createdAt} = todo || {};
  const [isChecked, setIsChecked] = useState(isCompleted);
  const dispatch = useDispatch();

  const toggleToComplete = () => {
    dispatch(toggleComplete({ id: _id, isCompleted: !isChecked }));
    setIsChecked(!isChecked);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>{indianFormatTime(createdAt)}</Text>

      {/* Content Section */}
      <View style={styles.innerContainer}>
        {/* Text Section */}
        <View style={styles.textContainer}>
          <Text style={[ isChecked ? styles.titleCompleted : styles.title]}>{title}</Text>
          <Text style={[ isChecked ? styles.descriptionCompleted : styles.description]}>{description}</Text>
        </View>

        {/* Icons Section */}
        <View style={styles.iconsContainer}>
          <View>
            <BouncyCheckbox
              isChecked={isChecked}
              disableText={true}
              size={25}
              fillColor="red"
              unFillColor="#FFFFFF"
              iconStyle={{borderColor: 'red'}}
              innerIconStyle={{borderWidth: 2}}
              onPress={toggleToComplete}
            />
          </View>
          <View>
            {!isCompleted && <Icon
              onPress={handleEdit}
              name="clipboard-edit-outline"
              size={30}
              color="green"
              style={{marginLeft: 5}}
            />}
          </View>
          <View>
            <Icon
              onPress={handleDelete}
              name="delete-outline"
              size={30}
              color="red"
            />
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
  titleCompleted: {
    fontSize: 22,
    fontWeight: '600',
    textDecorationLine: 'line-through',
  },
  descriptionCompleted: {
    fontSize: 18,
    color: '#555',
    textDecorationLine: 'line-through',
  },
  iconsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 3
  },
});

export default Todo;
