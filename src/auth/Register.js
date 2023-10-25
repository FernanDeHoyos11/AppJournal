import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../store/auth/thunks';
import { TextInput } from '@react-native-material/core';

export  const RegisterScreen = ({navigation}) => {

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()

  const handleRegister = () => {
    dispatch(startCreatingUserWithEmailPassword({displayName, email, password}))
  };

  const handleNavigateToRegister = () => {
    navigation.navigate('login');
  };

  return (
   <View style={styles.container}>
     <View style={styles.con}>
      <Text style={styles.title}>Login</Text>
      
      <TextInput
        style={styles.input}
        label='Nombre'
        color='#052659'
        onChangeText={(text) => setDisplayName(text)}
        value={displayName}
      />

      <TextInput
        style={styles.input}
        label='Usuario'
        color='#052659'
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        label='Contraseña'
        color='#052659'
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.PressText} onPress={handleNavigateToRegister}>
        <Text style={styles.Text}>Ir a login</Text>
      </TouchableOpacity>

    </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#052659'
  },
  con:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    margin: 60,
    width: '80%',
    backgroundColor: '#FDFDF5'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#052659',
    padding: 5,
    margin: 5,
    borderRadius: 5,
    width: '90%'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  PressText: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  Text:{
    color: '#000000',
    marginRight: 10,
    marginTop: 10,
    marginBottom: 20
  }

});
