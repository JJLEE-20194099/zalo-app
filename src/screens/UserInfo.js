import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Search from '../components/Search';
export default function UserInfo({ navigation }) {
  return (
    <View style={styles.user_info_box}>
      <View style={styles.header}>
        <View style={styles.search_box}>
          <Search />
        </View>
        <Image
          style={styles.setting_icon}
          source={require('../assets/settings.png')}
        />
      </View>

      <View style={styles.card_header}>
        <View
          style={styles.card_header_main}>
          <TouchableOpacity
            style={styles.card_header_box_main}
            onPress={() => navigation.navigate('UserInfoDetail')}>
            <Image
              style={styles.item_avatar}
              source={require('../assets/avatar.jpg')}
            />

            <View>
              <Text style={styles.item_username}>brianlie</Text>
              <Text style={styles.item_label}>View my profile</Text>
            </View>
          </TouchableOpacity>

          <View>
            <TouchableOpacity activeOpacity={0.85}>
              <Image
                style={styles.switch_user_icon}
                source={require('../assets/switch.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.card_header}>
        <View style={styles.card_header_main}>
          <TouchableOpacity
            style={styles.card_header_main}
            onPress={() => navigation.navigate('PostDetail')}>
            <Image
              style={styles.item_icon}
              source={require('../assets/wallet.png')}
            />

            <View>
              <Text style={styles.item_username}>QR wallet</Text>
              <Text style={styles.item_label}>
                Save and use important QR codes
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card_header}>
        <View style={styles.card_header_main}>
          <TouchableOpacity
            style={styles.card_header_main}
            onPress={() => navigation.navigate('PostDetail')}>
            <Image
              style={styles.item_icon}
              source={require('../assets/cloud.png')}
            />

            <View>
              <Text style={styles.item_username}>My cloud</Text>
              <Text style={styles.item_label}>View my profile</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>


      <View>
        <View style={styles.card_header_except}>
          <View style={styles.card_header_main}>
            <TouchableOpacity
              style={styles.card_header_box_main}
              onPress={() => navigation.navigate('AcountAndSecurity')}>
              <Image
                style={styles.item_icon}
                source={require('../assets/security.png')}
              />

              <View>
                <Text style={[styles.item_username, { paddingVertical: 10 }]}>
                  Account and security
                </Text>
              </View>
            </TouchableOpacity>
            <View>
              <TouchableOpacity activeOpacity={0.85}>
                <Image
                  style={styles.item_icon}
                  source={require('../assets/right-arrow.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.card_header_except}>
          <View style={styles.card_header_main}>
            <TouchableOpacity
              style={styles.card_header_box_main}
              onPress={() => navigation.navigate('PostDetail')}>
              <Image
                style={styles.item_icon}
                source={require('../assets/padlock.png')}
              />

              <View>
                <Text style={[styles.item_username, { paddingVertical: 10 }]}>
                  Privacy
                </Text>
              </View>
            </TouchableOpacity>
            <View>
              <TouchableOpacity activeOpacity={0.85}>
                <Image
                  style={styles.item_icon}
                  source={require('../assets/right-arrow.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  user_info_box: {},
  header: {
    backgroundColor: '#0167ff',
    flexDirection: 'row',
    alignItems: 'center',
    height: 80
  },
  search_box: {
    flex: 1,
  },
  setting_icon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  card_header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    padding: 8,
    marginBottom: 8,
  },
  card_header_except: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    padding: 8,
    borderTopWidth: 0.2,
    borderColor: '#dedee7',
  },
  card_header_main: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  card_header_box_main: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  item_avatar: {
    borderRadius: 50,
    width: 50,
    height: 50,
    marginRight: 12,
  },
  item_label: {
    fontSize: 13,
    color: '#808080',
    marginTop: 5,
  },
  item_username: {},
  switch_user_icon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  item_icon: {
    width: 24,
    height: 24,
    marginRight: 12,
    marginLeft: 12,
  },
});
