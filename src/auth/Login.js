import { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../store/auth/thunks';
import { Box, TextInput } from '@react-native-material/core';

export  const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {status, errorMessage,  } = useSelector(state => state.auth)
  const isAuthenticated = useMemo(() => status === 'checking', [status]);

  const dispatch = useDispatch()

  
  const handleLoginWithGoogle = () => {
    dispatch(startGoogleSignIn())
  };

  const handleLogin = () => {
    dispatch(startLoginWithEmailPassword({email, password}))
  };

  const handleNavigateToRegister = () => {
    navigation.navigate('register');
  };


  return (
   <View style={styles.container}>
     <View style={styles.con}>
      <Text style={styles.title}>Login</Text>
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

      <Box
       style={{ 
        display: errorMessage ? '' : 'none',
        marginRight: 15,
        marginLeft: 15, }}>
         <Text style={styles.error} >{errorMessage}</Text>
      </Box>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLoginWithGoogle}>
        <Text style={styles.buttonText}>Con Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.PressText} onPress={handleNavigateToRegister}>
        <Text style={styles.Text}>Crear una cuenta</Text>
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
    backgroundColor: '#FDFDF5'
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
  },
  error:{
    color: 'red'
  }

});
