import { store } from "../store";
import { Provider } from "react-redux";
import Todo from "./Todo";

const App = () => {
  return (<Provider store={store}>
    <Todo />
  </Provider>)
}

export default App;