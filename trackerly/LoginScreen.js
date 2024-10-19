import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { firebase } from './firebaseConfig';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('tulod862@gmail.com');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(username, password);
      Alert.alert('Login successful!');

    } 
    catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter your email"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Log In" onPress={handleLogin} />
      <Button
        title="Don't have an account? Sign Up"
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
};

export default LoginScreen;
