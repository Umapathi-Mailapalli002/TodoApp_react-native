import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo;
import BouncyCheckbox from 'react-native-bouncy-checkbox';
const Todo = () => {
  const [isChecked, setIsChecked] = useState(false);
console.log(isChecked);
  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>03/02/2025 11:30</Text>
      <View>
        <View>
          
          <Text style={styles.title}>title</Text>
          <Text style={styles.description}>description</Text>
        </View>
        <View>
          <BouncyCheckbox
            size={25}
            fillColor="red"
            unFillColor="#FFFFFF"
            text=""
            iconStyle={{borderColor: 'red'}}
            innerIconStyle={{borderWidth: 2}}
            textStyle={{fontFamily: 'JosefinSans-Regular'}}
            onPress={(checked) => setIsChecked(!isChecked)}
          />
          <Icons.Entypo name="camera" size={30} color="red" />
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
});

export default Todo;
