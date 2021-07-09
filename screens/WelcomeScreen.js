import {ImageBackground, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function WelcomeScreen ({navigation}) {
  

  return (
     <ImageBackground
      style = {
        styles.container}>
      <View >
        <Text>UserName/Password Authentication</Text>
      </View><br/>
      <TouchableOpacity  onPress={() => navigation.navigate('Sign Up')} >
        <Text >Sign Up</Text>
       </TouchableOpacity><br/>
      <Text >Already have an account?</Text>
      <TouchableOpacity  onPress={() => navigation.navigate('Sign In')}>
        <Text>Sign In</Text>
      </TouchableOpacity><br/>
      <TouchableOpacity  onPress={() => navigation.navigate('Reset')}>
        <Text>Reset Password</Text>
      </TouchableOpacity>
     </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignContent: 'center',
    backgroundColor: "#eaeaea"
  },
  text: {
    flex: 1,
    alignContent: 'center'
  }
});