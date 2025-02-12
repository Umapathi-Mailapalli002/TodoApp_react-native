import { View, Text } from 'react-native'
import React from 'react'
import { store } from "../store/index";
import { Provider } from 'react-redux';
import App from './App';
const Index = () => {
  return (
    <Provider store={store}>
        <App />
    </Provider>
  )
}

export default Index