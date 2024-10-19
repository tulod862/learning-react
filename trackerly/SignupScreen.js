// SignupScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { firebase } from './firebaseConfig';

const SignupScreen = () => {
  const [username, setUsername] = useState('tulod862@gmail.com');
  const [password, setPassword] = useState('rhea122497');

  const handleSignup = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(username, password);
      Alert.alert('Signup successful!');
      // Optionally navigate to login after signup
    } catch (error) {
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
        placeholder="Enter your assword"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
};

export default SignupScreen;
