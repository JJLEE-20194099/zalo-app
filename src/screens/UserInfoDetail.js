import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Input,
  TextInput,
} from 'react-native';
import BackButton from '../components/BackButton';
import BoxSlider from '../components/BoxSlider';
import More from '../components/More';
import MePostList from '../components/MePostList';
export default function UserInfoDetail({ navigation }) {
  return (
    <ScrollView vertical style={{ height: '100%' }}>
      <View style={styles.detail_container}>
        <View style={styles.header}>
          <ImageBackground
            source={require('../assets/background_user.png')}
            resizeMode="cover"
            style={styles.background_img}>
            <View style={styles.icon_group}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('../assets/left-chevron.png')}
                  style={styles.header_icon}
                />
              </TouchableOpacity>

              <View style={styles.right_group}>
                <TouchableOpacity>
                  <Image
                    source={require('../assets/vision.png')}
                    style={styles.header_icon}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AboutMe')}>
                  <Image
                    source={require('../assets/option.png')}
                    style={styles.header_icon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>

          <View style={styles.avatar_box}>
            <Image
              style={styles.header_avatar}
              source={require('../assets/avatar.jpg')}
            />
            <Text style={styles.username}>brianlie</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('EditYourBio')}>
                <View style={styles.edit_description}>
                <Image
                  style={{ color: '#0167ff', height: 16, width: 16 }}
                  source={require('../assets/edit.png')}
                />
                <Text style={{ color: '#0167ff', fontSize: 13 }}>
                  Add your bio
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            style={{
              marginRight: 12,
              marginTop: 32,
            }}>
            <View style={styles.option_slider}>
              <BoxSlider
                img_url="../assets/white_image.png"
                label="My photos"
                description="See all photos and videos"
                go_to={navigation.goBack}
                background="#09a329"
              />
              <BoxSlider
                img_url="../assets/"
                label="Story Archive"
                description="Your memorable stories"
                go_to={navigation.goBack}
                background="#887bc3"
              />
              <BoxSlider
                img_url="../assets/"
                label="On these days"
                description="Save all your memorable moments"
                go_to={navigation.goBack}
                background="#c9b14d"
              />
              <BoxSlider
                img_url="../assets/"
                label="My videos"
                description="See all videos"
                go_to={navigation.goBack}
                background="#e3a3bc"
              />
            </View>
          </ScrollView>
        </View>
        <View style={{width: '100%', marginLeft: 12, marginRight: 12 }}>
          <TouchableOpacity onPress={() =>navigation.navigate('WriteStatus')}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#FFF',

                marginTop: 12,
                
              }}>
              <View
                style={{
                  paddingVertical: 4,
                  paddingHorizontal: 8,
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '100%',
                }}>
                <Text style={styles.input}>what's on your mind</Text>
                
                <Image
                  style={styles.image_icon}
                  source={require('../assets/photo.png')}
                />
              </View>
            </View>
          </TouchableOpacity>

          
        </View>
        <MePostList navigation={navigation} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  detail_container: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',

  },
  header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  input: {
    padding: 8,
    outlineColor: '#FFF',
    backgroundColor: '#FFF',
    borderRightWidth: 0.1,
    borderColor: '#ccc',
    flex: 1,
  },
  image_icon: {
    width: 20,
    height: 20,
    paddingLeft: 12,
    marginLeft: 12,
    marginRight: 12,
  },
  icon_group: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  background_img: {
    height: 250,
    width: '100%'
  },
  right_group: {
    flexDirection: 'row',
  },
  header_icon: {
    height: 20,
    width: 20,
    marginLeft: 8,
    marginRight: 8,
  },
  header_avatar: {
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 50,
    height: 80,
    width: 80,
  },
  avatar_box: {
    marginTop: -45,
  },
  edit_description: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  username: {
    marginVertical: 4,
    fontWeight: 700,
    fontSize: 14,
    textAlign: 'center',
  },
  option_slider: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginRight: 50,
    width: '100%',
  },
  footer: {},
});
