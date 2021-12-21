import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Alert
} from 'react-native';

const alert_save = (navigation) => {
   Alert.alert(
    "Save your bio successfully",
    [
      {
        text: "Ok",
        style: "cancel",
      },
    ],
    {
      cancelable: true,
    }
  );
  navigation.goBack()
}

export default function EditYourBio({ navigation }) {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={[styles.header_text, { color: '#767676' }]}>Cancel</Text>
        </TouchableOpacity>
        <Text style={[styles.header_text]}>Edit your bio</Text>
        <TouchableOpacity onPress={() => alert_save(navigation)}>
          <Text style={[styles.header_text, { color: '#0167ff' }]}>Save</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.input_box}>
        <TextInput
          placeholder="Add your bio"
          numberOfLines={10}
          multiline={true}
          style={styles.input}
        />
        <View style={styles.note}>
          <Text style={{ color: '#767676' }}>0/100</Text>
        </View>
      </View>
      <View style={styles.util}>
        <Image source={require('../assets/check.png')} style={styles.icon} />
        <Text style={{ color: '#767676' }}>Share this to timeline</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderColor: '#ccc',
    borderBottomWidth: 0.01,
  },
  header_text: {
    fontSize: 14,
  },
  input_box: {
    backgroundColor: '#FFF',
  },
  input: {
    outlineColor: '#FFF',
    border: 'none',
    padding: 12,
  },
  note: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 12,
    marginVertical: 12,
  },
  icon: {
    height: 23,
    width: 23,
    marginRight: 12,
  },
  util: {
    padding: 12,
    flexDirection: 'row',
  },
});
