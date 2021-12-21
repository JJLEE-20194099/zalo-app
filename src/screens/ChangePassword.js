import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { passwordValidator } from '../helpers/passwordValidator';
import { confirmPasswordValidator } from '../helpers/confirmPasswordValidator';

export default function ChangePassword({ navigation }) {
  const [oldPassword, setOldPassword] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [comfirmPassword, setConfirmPassword] = useState({
    value: '',
    error: '',
  });

  const onChangePassword = () => {
    const passwordError = passwordValidator(password.value);
    const confirmPasswordError = confirmPasswordValidator(
      password.value,
      comfirmPassword.value
    );
    if (passwordError || confirmPasswordError) {
      setPassword({ ...password, error: passwordError });
      setConfirmPassword({ ...comfirmPassword, error: confirmPasswordError });
      return;
    }
    navigation.navigate('UserInfo');
  };

  return (
    <View style={styles.change_container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.header_icon_box}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/left-chevron.png')}
            style={styles.header_icon}
          />
        </TouchableOpacity>
        <Text style={styles.header_label}>Change password</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.box}>
          <Text style={styles.note}>
            Password must include letters, numbers or special characters; must
            not contain your year of birth or Zalo name
          </Text>
        </View>

        <View style={styles.box}>
          <View style={styles.box_name}>
            <Text style={styles.label}>Current password</Text>
            <Text style={styles.show}>SHOW</Text>
          </View>
          <View style={styles.form}>
            <TextInput
              mode="flat"
              placeholder="Enter current password"
              value={oldPassword.value}
              onChangeText={(text) =>
                setOldPassword({ value: text, error: '' })
              }
              error={!!oldPassword.error}
              errorText={oldPassword.error}
              autoCapitalize="none"
              style={styles.input}
            />
            <Image
              source={require('../assets/close.png')}
              style={styles.close_icon}
            />
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.box_name}>
            <Text style={styles.label}>New password</Text>
          </View>
          <View style={styles.form}>
            <TextInput
              mode="flat"
              placeholder="Enter new password"
              returnKeyType="next"
              value={password.value}
              onChangeText={(text) => setPassword({ value: text, error: '' })}
              error={!!password.error}
              errorText={password.error}
              autoCapitalize="none"
              autoCompleteType="password"
              textContentType="password"
              keyboardType="password"
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.form}>
            <TextInput
              mode="flat"
              placeholder="Confirm new password"
              value={comfirmPassword.value}
              onChangeText={(text) =>
                setConfirmPassword({ value: text, error: '' })
              }
              error={!!comfirmPassword.error}
              errorText={comfirmPassword.error}
              style={styles.input}
            />
          </View>
        </View>
      </View>
      <View>
        <View style={styles.btn_box}>
          <TouchableOpacity onPress={onChangePassword}>
            <Text style={styles.btn_text}>Update Info</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  note: {
    textAlign: 'center',
    marginHorizontal: 22,
    marginVertical: 12,
  },
  box_name: {
    flexDirection: 'row',
    justifyContent: 'pace-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  label: {
    color: '#0167ff',
    fontWeight: 500,
    marginLeft: 12,
    flex: 1,
  },
  change_container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  show: {
    color: '#767676',
    marginRight: 12,
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    outlineColor: '#0167ff',
    paddingVertical: 8,
    flex: 1,
    marginHorizontal: 12,
    backgroundColor: '#FFF',
    height: 30,
  },
  close_icon: {
    height: 15,
    width: 15,
    marginRight: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0167ff',
    height: 70,
  },
  header_icon_box: {
    position: 'absolute',
    left: 12,
    top: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header_icon: {
    height: 18,
    width: 18,
  },
  header_label: {
    fontSize: 15,
    fontWeight: 600,
    color: '#fff',
  },
  box: {
    backgroundColor: '#fff',
    marginBottom: 12,
  },
  btn_box: {
    backgroundColor: '#0167ff',
    marginHorizontal: 12,
    height: 40,
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
  },
  btn_text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 600,
  },
});
