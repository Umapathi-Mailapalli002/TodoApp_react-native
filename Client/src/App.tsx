import { store } from "../store/index";
import { Provider } from "react-redux";
import Todo from "./Todo";

const App = () => {
  return (<Provider store={store}>
    <Todo />
  </Provider>)
}

export default App;