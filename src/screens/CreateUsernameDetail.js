import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function CreateUsernameDetail({ navigation }) {
  const [username, setUsername] = useState('brianlie');
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.header_icon_box}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/left-chevron.png')}
            style={styles.header_icon}
          />
        </TouchableOpacity>
        <Text style={styles.header_label}>Create username</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.detail}>
          Your username will be displayed on your profile to your friends,
          making it easier for friends to find you
        </Text>

        <TextInput
          placeholder="Enter username 6-20 characters (a-z, ...)"
          onChangeText={(text) => setUsername(text)}
          style={styles.input}
        />
        <View style={styles.suggestion_box}>
          <Text style={styles.suggestion_label}>Suggestion: </Text>
          <Text style={styles.suggestion_value}>brianlie26, brianlie2609, brianlie26092001, brianlie260901, brianlie12, brianlie012, brianlie3012</Text>
        </View>
      </View>
      <View>
        <View style={styles.btn_box}>
          <TouchableOpacity onPress={() => navigation.navigate('PersonalInfo')}>
            <Text style={styles.btn_text}>Create username</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  suggestion_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginVertical: 12,
  },
  suggestion_label: {
    marginHorizontal: 12,
    fontSize: 12,
    color: '#767676'
  },
  suggestion_value: {
    fontSize: 13,
    fontWeight: 500,
    color: '#0167ff',
    marginHorizontal: 12
  },
  detail: {
    color: '#767676',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 12,
    marginHorizontal: 24,
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
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
    justifyContent: 'center',
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
  input: {
    outlineColor: '#FFF',
    backgroundColor: '#FFF',
    fontSize: 15,
    paddingVertical: 12,
    paddingHorizontal: 12,
    width: '100%'
  }
});
