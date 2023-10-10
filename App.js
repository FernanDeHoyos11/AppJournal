
import { store } from './src/store/store';
import { Provider } from 'react-redux';
import { AppMain } from './src/AppMain';
import { StatusBar } from 'react-native';
import { AppBar } from '@react-native-material/core';
import { IconButton } from 'react-native-paper';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";



export default function App() {
  

  return (
    <Provider store={store}>
    <StatusBar backgroundColor='#052659'/>
    <AppMain/>
    </Provider>
  );
}


