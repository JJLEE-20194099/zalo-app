import React, { useState } from 'react'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import {Text} from 'react-native'
import { phoneValidator } from '../helpers/phoneValidator'

export default function ResetPasswordScreen({ navigation }) {
  const [phone, setphone] = useState({ value: '', error: '' })

  const sendResetPasswordPhone = () => {
    const phoneError = phoneValidator(phone.value)
    if (phoneError) {
      setphone({ ...phone, error: phoneError })
      return
    }
    navigation.navigate('CreatePassWord')
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Recover password</Header>
      <Text>Enter your phone number to get verify code</Text>
      <TextInput
        label="Phone number"
        returnKeyType="done"
        value={phone.value}
        onChangeText={(text) => setphone({ value: text, error: '' })}
        error={!!phone.error}
        errorText={phone.error}
        autoCapitalize="none"
        autoCompleteType="phone"
        textContentType="phone"
        keyboardType="phone"
      />
      <Button
        mode="contained"
        onPress={sendResetPasswordPhone}
        style={{ marginTop: 16, borderRadius: 24}}>
        Next
      </Button>
    </Background>
  )
}
