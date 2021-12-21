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

const _showBottomView = (key) => {
  const toValue = key === 'HIDE' ? height : endValue;

  Animated.timing(startValue, {
    toValue,
    duration: duration,
    useNativeDriver: true,
  }).start();
};

export default function PostDetail({ navigation }) {
  const [comment, setComment] = useState();
  return (
    <ScrollView>
      <View style={styles.detail_header}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Image
            style={styles.back_detail_header}
            source={require('../assets/arrow_back.png')}
          />
        </TouchableOpacity>

        <View style={{ flex: 1 }}>
          <Text style={{ textAlign: 'center' }}>Comments</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: 50,
            marginRight: 22,
          }}>
          <TouchableOpacity
            activeOpacity={0.85}
            style={{
              height: SCREEN_HEIGHT * 0.065,
              width: '75%',

              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={styles.three_dot}
              source={require('../assets/messenger.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={_showBottomView}
            activeOpacity={0.85}
            style={{
              height: SCREEN_HEIGHT * 0.065,
              width: '75%',

              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={styles.three_dot}
              source={require('../assets/more.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.detail_container}>
        <View>
          <View style={styles.card_header}>
            <View style={styles.card_header_main}>
              <Image
                style={styles.item_avatar}
                source={require('../assets/avatar.jpg')}
              />
              <View>
                <Text style={styles.item_username}>JJLee</Text>

                <Text style={styles.item_datetime}>14/11/2020</Text>
              </View>
            </View>
          </View>

          <View style={styles.cardContent}>
            <View>
              <Text style={styles.description}>Ngày hôm nay thật đẹp</Text>

              <View>
                <TouchableOpacity onPress={() => navigation.navigate('ImageDetail')}>
                  <Image
                    style={styles.cardImage}
                    source={require('../assets/post-img.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.comment_box}>
            <View>
              <Image
                style={styles.comment_icon}
                source={require('../assets/happy.png')}
              />
            </View>
            <TextInput
              placeholder="comment"
              style={{ padding: 6, outlineColor: '#FFF', flex: 1, height: 50 }}
              onChangeText={(text) => setComment(text)}
            />

            <View>
              <Image
                style={styles.comment_icon}
                source={require('../assets/image.png')}
              />
            </View>

            <View>
              <Image
                style={styles.comment_icon}
                source={require('../assets/send-message.png')}
              />
            </View>
          </View>
        </View>
      </View>
      <Animated.View
        style={[
          {
            position: 'absolute',
            height: height,
            left: 0,
            right: 0,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderTopRightRadius: 23,
            borderTopLeftRadius: 23,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
            transform: [
              {
                translateY: startValue,
              },
            ],
          },
        ]}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-space-between',
            marginLeft: 6,
            marginRight: 6,
          }}>
          <View style={(styles.card_header, { marginBottom: 12 })}>
            <View style={styles.card_header_main}>
              <Image
                style={styles.report_item}
                source={require('../assets/recycle-bin.png')}
              />
              <View
                style={{
                  paddingBottom: 12,
                  borderBottomWidth: 0.3,
                  borderBottomColor: '#ccc',
                  marginBottom: 18,
                }}>
                <Text style={styles.item_username}>Delete this post</Text>
                <Text style={styles.item_datetime}>
                  You won't see this post on your timeline
                </Text>
              </View>
            </View>
            <View style={styles.card_header_main}>
              <Image
                style={styles.report_item}
                source={require('../assets/unsubscribe.png')}
              />
              <View
                style={{
                  paddingBottom: 12,
                  borderBottomWidth: 0.3,
                  borderBottomColor: '#ccc',
                  marginBottom: 18,
                }}>
                <Text style={styles.item_username}>Unsubscribe Tùng Đặng</Text>
                <Text style={styles.item_datetime}>
                  You won't see any pots or stories from this friends
                </Text>
              </View>
            </View>

            <View style={styles.card_header_main}>
              <Image
                style={styles.report_item}
                source={require('../assets/file.png')}
              />
              <View
                style={{
                  paddingBottom: 12,
                  borderBottomWidth: 0.3,
                  borderBottomColor: '#ccc',
                  marginBottom: 18,
                }}>
                <Text style={styles.item_username}>
                  Hide all my activities from Tùng Đặng
                </Text>
                <Text style={styles.item_datetime}>
                  This friend won't see your posts or stories
                </Text>
              </View>
            </View>

            <View style={styles.card_header_main}>
              <Image
                style={styles.report_item}
                source={require('../assets/warning.png')}
              />
              <View
                style={{
                  paddingBottom: 12,
                }}>
                <Text style={styles.item_username}>Report</Text>
                <Text style={styles.item_datetime1}>
                    Report now
                  </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => _showBottomView('HIDE')}
            style={{
              width: '75%',
              borderRadius: 5,
              borderWidth: 1,
              padding: 12,
              backgroundColor: '#4799ff',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>RETURN</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  detail_container: {
    backgroundColor: '#FFF',
  },
  card_header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
    marginLeft: 12,
  },
  card_header_main: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  item_avatar: {
    borderRadius: 50,
    width: 50,
    height: 50,
    marginRight: 12,
  },
  item_username: {},
  item_datetime: {
    fontSize: 13,
    color: '#808080',
    marginTop: 5,
     width: 235
  },
  description: {
    fontSize: 14,
    fontWeight: 500,
    flex: 1,
    marginTop: 5,
    marginBottom: 18,
    flexWrap: 'wrap',
    marginLeft: 8,
  },
  cardImage: {
    width: null,
    height: img_height,
  },
  comment_box: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 35,
  },
  comment_icon: {
    width: 18,
    height: 18,
    marginRight: 12,
    marginLeft: 12,
  },
  report_item: {
    width: 25,
    height: 25,
    marginRight: 12,
    marginLeft: 18,
  },
  three_dot: {
    width: 24,
    height: 24,
    marginRight: 12,
    color: '#FFF',
  },
  detail_header: {
    backgroundColor: '#0167ff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 80,
  },
  back_detail_header: {
    width: 20,
    height: 20,
    marginLeft: 12,
    marginRight: 12,
  },
});
