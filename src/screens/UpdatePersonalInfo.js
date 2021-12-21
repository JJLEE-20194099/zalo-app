import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

export default function AboutMe({ navigation }) {
  const [username, setUsername] = useState('brianlie');
  const [gender, setGender] = useState(0);
  const [birthday, setBirthday] = useState('26/09/2001');
  var radio_genders = [
    { label: 'Male', value: 0 },
    { label: 'Female', value: 1 },
  ];
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.header_close}
          onPress={() => navigation.goBack()}>
          <Text style={{ fontWeight: 400, color: '#FFF' }}>Close</Text>
        </TouchableOpacity>
        <Text style={styles.header_label}>Profile Information</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.box}>
          <View style={styles.item}>
            <View style={styles.avatar_box}>
              <Image
                source={require('../assets/avatar.jpg')}
                style={styles.avatar}
              />
              <View style={styles.camera_icon_box}>
                <Image
                  source={require('../assets/camera.png')}
                  style={styles.camera_icon}
                />
              </View>
            </View>
            <View style={styles.box_}>
              <View style={[styles.row, { borderBottomWidth: 0.3 }]}>
                <TextInput
                  style={[styles.item_text]}
                  onChangeText={(text) => setUsername(text)}
                  value={username}
                />
                <Image
                  source={require('../assets/edit.png')}
                  style={styles.edit_icon}
                />
              </View>

              <View style={[styles.row, { borderBottomWidth: 0.3 }]}>
                <RadioForm formHorizontal={true} animation={true}>
                  {/* To create radio buttons, loop through your array of options */}
                  {radio_genders.map((obj, i) => (
                    <RadioButton labelHorizontal={true} key={i}>
                      {/*  You can set RadioButtonLabel before RadioButtonInput */}
                      <RadioButtonInput
                        obj={obj}
                        index={i}
                        isSelected={gender === i}
                        onPress={() => setGender(i)}
                        borderWidth={1}
                        buttonInnerColor={'#0167ff'}
                        buttonOuterColor={gender === i ? '#0167ff' : '#000'}
                        buttonSize={12}
                        buttonWrapStyle={{ marginLeft: 10 }}
                      />
                      <RadioButtonLabel
                        obj={obj}
                        index={i}
                        labelHorizontal={true}
                        onPress={() => setGender(i)}
                        labelStyle={{ fontSize: 14 }}
                        labelWrapStyle={{}}
                      />
                    </RadioButton>
                  ))}
                </RadioForm>
                <Image
                  source={require('../assets/edit.png')}
                  style={styles.edit_icon}
                />
              </View>

              <View style={[styles.row]}>
                <TextInput
                  style={[styles.item_text]}
                  onChangeText={(text) => setBirthday(text)}
                  value={birthday}
                />
                <Image
                  source={require('../assets/edit.png')}
                  style={styles.edit_icon}
                />
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('CreateUsername')}>
          <View
            style={[
              styles.box,
              { flexDirection: 'row', alignItems: 'center', height: 50 },
            ]}>
            <Text
              style={{
                fontWeight: 400,
                width: 80,
                fontSize: 16,
                marginLeft: 12,
              }}>
              Username
            </Text>
            <Text
              style={{
                fontSize: 14,
                flex: 1,
                color: '#767676',
                marginRight: 0,
              }}>
              Tap to create username
            </Text>
            <Image
              source={require('../assets/right-arrow.png')}
              style={{ width: 20, height: 20, marginRight: 12 }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.btn_box}>
          <TouchableOpacity onPress={() => navigation.navigate('PersonalInfo')}>
            <Text style={styles.btn_text}>Update Info</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 50,
    height: 70,
    width: 70,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  item_text: {
    outlineColor: '#FFF',
    height: '100%',
  },
  edit_icon: {
    width: 16,
    height: 16,
    marginRight: 12,
  },
  row: {
    marginLeft: 12,
    paddingVertical: 12,
    borderColor: ' #ccc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  box_: {
    flex: 1,
  },
  camera_icon_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderRadius: 50,
    borderWidth: 0.3,
    borderColor: '#ccc',
    width: 20,
    height: 20,
    marginTop: -25,
    marginLeft: 50,
  },
  avatar_box: {
    marginLeft: 12,
  },
  camera_icon: {
    width: 10,
    height: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0167ff',
    height: 70,
  },
  header_close: {
    position: 'absolute',
    left: 12,
    top: 12,
    height: 40,
    width: 40,
    color: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header_label: {
    fontSize: 15,
    fontWeight: 600,
    color: '#fff',
  },
  box: {
    backgroundColor: '#fff',
    marginVertical: 4,
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
