import { store } from "../store/index";
import { Provider } from "react-redux";
import Todo from "./Todo";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const App = () => {
  return (<Provider store={store}>
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>Todo App</Text>
      <Todo />
      </View>
    </SafeAreaView>
  </Provider>)
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15
  },
  heading: {
    fontSize: 30,
    color: "#0000ff",
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 30
  }
})
export default App;