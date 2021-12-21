import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function AboutMe({ navigation }) {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity style={styles.header_icon_box} onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/left-chevron.png')}
            style={styles.header_icon}
          />
        </TouchableOpacity>
        <Text style={styles.header_label}>Brianlie</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.box}>
          <TouchableOpacity onPress={() => navigation.navigate('PersonalInfo')}>
            <View style={styles.item}>
              <Text style={styles.item_text}>Info</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.item}>
            <Text style={styles.item_text}>Update Profile Picture</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.item_text}>Update Cover</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.item_text}>Update Bio</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.item_text}>My ZaloPay</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.item}>
            <Text
              style={[styles.item_text, { color: '#0167ff', fontWeight: 600 }]}>
              Settings
            </Text>
            <Text style={styles.item_text}>My QR Code</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.item_text}>Privacy</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.item_text}>My Account</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.item_text}>General settings</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.item_text}>My ZaloPay</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    alignItems: 'center'
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
  item_text: {
    marginLeft: 12,
    paddingVertical: 12,
    borderColor: '#ccc',
    borderBottomWidth: 1,
  },
});
