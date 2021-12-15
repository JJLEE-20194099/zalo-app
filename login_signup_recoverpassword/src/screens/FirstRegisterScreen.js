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
import { emailValidator } from '../helpers/emailValidator';
import { passwordValidator } from '../helpers/passwordValidator';
import { nameValidator } from '../helpers/nameValidator';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' });

  const onNextSignup = () => {
    const nameError = nameValidator(name.value);
    if (nameError) {
      setName({ ...name, error: nameError });
      return;
    }
    navigation.navigate('SecondRegisterScreen')
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account</Header>
      <Text style={{ fontWeight: '300', textAlign: 'left' }}>Zalo name</Text>
      <TextInput
        label="Contains 2-40 characters"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />

      <NameTips />

    
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
