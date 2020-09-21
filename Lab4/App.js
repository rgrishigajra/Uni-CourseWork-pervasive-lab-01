import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyApp from './MyApp';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import loggedReducer from './reducersFile'

const store = createStore(loggedReducer);

export default function App() {
  return (
    <Provider store={store}>
      <MyApp />
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
