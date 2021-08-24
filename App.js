import React  from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import Main from './components/Main.js';



export default function App({navigation}) {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
