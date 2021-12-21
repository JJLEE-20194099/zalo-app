import React, { useState } from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import NextButton from '../components/NextButton';
import NameTips from '../components/NameTips';
import { theme } from '../core/theme';
import { phoneValidator } from '../helpers/phoneValidator';


export default function SecondRegisterScreen({ navigation }) {
 
  const [phone, setPhone] = useState({ value: '', error: '' });

  const onNextSignup = () => {
    const phoneError = phoneValidator(phone.value);
    if (phoneError) {
      setPhone({ ...phone, error: phoneError });
      return;
    }
    navigation.navigate('SecondRegisterScreen')
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account</Header>
      <Text>Create Account</Text>
      <Text style={{ textAlign: 'center' }}>Enter your new phone numer to register new account</Text>
      <TextInput
        label="Phone"
        returnKeyType="next"
        value={phone.value}
        onChangeText={(text) => setPhone({ value: text, error: '' })}
        error={!!phone.error}
        errorText={phone.error}
        autoCapitalize="none"
        autoCompleteType="phone"
        textContentType="phone"
        keyboardType="phone"
      />
     
      <TouchableOpacity   
        onPress={onNextSignup}
        style={styles.container}>
        <Image
          style={styles.image}
          source={require('../assets/arrow_next.png')}
        />
      </TouchableOpacity>
     
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20 + getStatusBarHeight(),
    right: 4,
  },
  image: {
    width: 24,
    height: 24,
  },
});
