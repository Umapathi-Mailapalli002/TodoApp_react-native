import { store } from "../store/index";
import { Provider } from "react-redux";
import Todo from "./Todo";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const App = () => {
  return (<Provider store={store}>
    <SafeAreaView>
      <View>
        <Text style={styles.heading}>Todo App</Text>
      <Todo />
      </View>
    </SafeAreaView>
  </Provider>)
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    color: "#fff",
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10
  }
})
export default App;