
import { store } from './src/store/store';
import { Provider } from 'react-redux';
import { AppMain } from './src/AppMain';
import { StatusBar } from 'react-native';



export default function App() {

  return (
    <Provider store={store}>
    <StatusBar backgroundColor='#052659'/>
    <AppMain/>
    </Provider>
  );
}


