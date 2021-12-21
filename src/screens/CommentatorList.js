import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
  ScrollView,
  Alert
} from 'react-native';
import { Platform } from 'react-native';
import BackButton from '../components/BackButton';
const tabBarHeight = Platform.OS === 'ios' ? 100 : 70;

const { height, width } = Dimensions.get('window');
const SCREEN_HEIGHT = Math.round(height);
const SCREEN_WIDTH = Math.round(width);
// Animation
const img_height = Math.round(height - 140);
const startValue = new Animated.Value(Math.round(height + height));
const endValue = Math.round(height - height);
const duration = 1000;


const alert_commentator = () => {
     Alert.alert(
      "Message",
      "You cannot see a stranger's profile",
      [
        { text: "OK" }
      ]
    );
}

export default function PostDetail({ navigation }) {
  const [comment, setComment] = useState();
  return (
    <ScrollView>
      <View style={styles.detail_header}>
        <View style={{height: '100%', flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{color: '#FFF', position: 'relative', left: 12, }}>Close</Text>
        </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={{ textAlign: 'center', color: '#FFF' }}>84 likes</Text>
        </View>
      </View>
      <TouchableOpacity onPress={alert_commentator}>
        <View style={styles.detail_container}>
          <Image
            style={styles.user_icon}
            source={require('../assets/user.png')}
          />
          <Text>84 likes</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  detail_container: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12
  },

  detail_header: {
    backgroundColor: '#0167ff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 80,
  },
  user_icon: {
    width: 40,
    height: 40,
    marginLeft: 12,
    marginRight: 12,
  },
});
