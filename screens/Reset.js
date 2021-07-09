import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {resetPassword} from '../API/firebaseMethods';

export default function Reset({navigation}) {
  const [email, setEmail] = useState('');

  const handlePress = () => {
    if (!email) {
      Alert.alert('Email field is required.');
    }
    resetPassword(email)
    navigation.navigate('Loading');
  };

  return (
    <View >
      <Text style={styles.formInput}>Enter E-mail ID:</Text>

      <TextInput
        style={styles.formInput}
        placeholder="Enter your email"
        value={email}
        onChangeText={(email) => setEmail(email)}
        autoCapitalize="none"
      />
    
      <TouchableOpacity style={styles.formInput} onPress={handlePress}>
        <Text >Sumbit</Text>
      </TouchableOpacity>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea"
  },

  formInput: {
    flex: 1,
    padding: 10,
    backgroundColor: "#eaeaea"
  }
});