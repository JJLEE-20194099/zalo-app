import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function AcountAndSecurity({ navigation }) {
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
        <Text style={styles.header_label}>Account and security</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.box}>
          <Text style={styles.box_name}>ACCOUNT</Text>

          <TouchableOpacity>
            <View style={styles.item}>
              <View style={styles.item_container}>
                <View>
                  <Text style={styles.item_text}>Change phone number</Text>
                  <Text style={styles.util_item_text}>(+84) 969 973 012</Text>
                </View>
                <Image
                  source={require('../assets/right-arrow.png')}
                  style={styles.right_arrow_icon}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.item}>
              <View style={styles.item_container}>
                <View>
                  <Text style={styles.item_text}>Login history</Text>
                </View>
                <Image
                  source={require('../assets/right-arrow.png')}
                  style={styles.right_arrow_icon}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
            <View style={styles.item}>
              <View style={styles.item_container}>
                <View>
                  <Text style={styles.item_text}>Change password</Text>
                </View>
                <Image
                  source={require('../assets/right-arrow.png')}
                  style={styles.right_arrow_icon}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <Text style={styles.box_name}>SECURITY</Text>
          <TouchableOpacity>
            <View style={styles.item}>
              <View style={styles.item_container}>
                <View>
                  <Text style={styles.item_text}>Set up a password</Text>
                </View>
                <Image
                  source={require('../assets/right-arrow.png')}
                  style={styles.right_arrow_icon}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <TouchableOpacity onPress={() => navigation.navigate('PersonalInfo')}>
            <View style={styles.item}>
              <View style={styles.item_container}>
                <View>
                  <Text style={styles.item_text}>Switch account</Text>
                </View>
                <Image
                  source={require('../assets/right-arrow.png')}
                  style={styles.right_arrow_icon}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('PersonalInfo')}>
            <View style={styles.item}>
              <View style={styles.item_container}>
                <View>
                  <Text style={styles.item_text}>Log out</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
          <View style={styles.box}>
          <TouchableOpacity onPress={() => navigation.navigate('PersonalInfo')}>
            <View style={styles.item}>
              <View style={styles.item_container}>
                <View>
                  <Text style={[styles.item_text, {color: 'red'}]}>Delete account</Text>
                </View>
                
              </View>
            </View>
          </TouchableOpacity>
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
  right_arrow_icon: {
    height: 20,
    width: 20,
    marginRight: 12,
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
  box_name: {
    color: '#0167ff',
    fontSize: 16,
    fontWeight: 500,
    marginLeft: 12,
    marginTop: 8,
  },
  item_text: {},
  item_container: {
    marginLeft: 12,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  util_item_text: {
    color: '#767676',
    fontSize: 14,
    marginTop: 4,
  },
});
