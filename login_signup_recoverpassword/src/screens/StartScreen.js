import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import {StyleSheet} from 'react-native'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Chat.zalo.me</Header>
      <Button style={styles.btn}
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button style={styles.btn}
        mode="outlined"
        onPress={() => navigation.navigate('FirstRegisterScreen')}
      >
        Signup
      </Button>
    </Background>
  )
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 24,
  }
})
