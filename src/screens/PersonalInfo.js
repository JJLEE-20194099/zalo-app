import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

export default function AboutMe({ navigation }) {
  return (
    <View>
      <View style={styles.header}>
        <ImageBackground
          source={require('../assets/background_user.png')}
          resizeMode="cover"
          style={styles.bk}>
          <TouchableOpacity
            style={styles.header_icon_box}
            onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/left-chevron.png')}
              style={styles.header_icon}
            />
          </TouchableOpacity>
          <View style={styles.overview_info}>
            <Image
              source={require('../assets/avatar.jpg')}
              style={styles.avatar}
            />
            <View style={styles.overview_text}>
              <Text style={styles.username}>Brianlie</Text>
              <Text style={styles.bio}>Tôi xàm le được chưa ok</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.body}>
        <View style={styles.box}>
          <View style={styles.item}>
            <View style={[styles.item_container, { borderBottomWidth: 0.3 }]}>
              <Text style={styles.label}>Gender</Text>
              <Text style={styles.value}>Male</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={[styles.item_container, { borderBottomWidth: 0.3 }]}>
              <Text style={styles.label}>Birth day</Text>
              <Text style={styles.value}>26/09/2001</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.item_container}>
              <Text style={styles.label}>Mobie</Text>
              <View>
                <Text
                  style={[
                    styles.value,
                    { color: '#0167ff', marginBottom: 12 },
                  ]}>
                  +84969973012
                </Text>
                <View style={{ marginLeft: 8 }}>
                  <Text style={styles.phone_des}>Your phone number is</Text>
                  <Text style={styles.phone_des}>
                    displayed only to friends who
                  </Text>
                  <Text style={styles.phone_des}>
                    have your number in their phone
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.btn_box}>
        <TouchableOpacity
          onPress={() => navigation.navigate('UpdatePersonalInfo')}>
          <Text style={styles.btn_text}>Update Info</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header_icon_box: {
    position: 'absolute',
    left: 12,
    justifyContent: 'center',
    top: 12
  },
  header_icon: {
    height: 18,
    width: 18,
  },
  box: {
    backgroundColor: '#FFF',
  },
  item: {},
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
  item_container: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'flex-start',
    borderColor: '#ccc',
    marginLeft: 12,
    paddingVertical: 18,
  },
  label: {
    width: 100,
  },
  value: {
    color: '#767676',
  },
  phone_des: {
    color: '#767676',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0167ff',
    height: 250,
  },
  bk: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  avatar: {
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#FFF',
    height: 70,
    width: 70,
  },
  overview_info: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginVertical: 8,
    marginHorizontal: 12,
  },
  overview_text: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginHorizontal: 12,
  },
  username: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 600,
  },
  bio: {
    fontSize: 15,
    color: '#fff',
  },
});
