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
          <Text style={{ textAlign: 'center', color: '#FFF', marginLeft: 12 }}>
            Close
          </Text>
        </TouchableOpacity>

        <View style={{ flex: 1 }}>
          <Text style={{ textAlign: 'center', color: '#FFF' }}>
            14-12-2021 . 10:32
          </Text>
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
              source={require('../assets/comments.png')}
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
              source={require('../assets/menu.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.detail_container}>
        <View>
          <View style={styles.cardContent}>
            <View>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ImageDetail')}>
                  <Image
                    style={styles.cardImage}
                    source={require('../assets/post-img.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.description_box}>
                <Text style={styles.description}>Ngày hôm nay thật đẹp</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.cardFooter}>
            <View style={styles.socialBarContainer}>
              <View style={styles.socialBarSection}>
                <TouchableOpacity style={styles.socialBarButton}>
                  <Image
                    style={styles.footer_icon}
                    source={require('../assets/love.png')}
                  />
                  <Text style={styles.socialBarLabel}>78</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.socialBarSection}>
                <TouchableOpacity style={styles.socialBarButton}>
                  <Image
                    style={styles.footer_icon}
                    source={require('../assets/comments.png')}
                  />
                  <Text style={styles.socialBarLabel}>25</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.comment_list_btn}>
                <TouchableOpacity
                  style={styles.socialBarButton}
                  onPress={() => navigation.navigate('CommentatorList')}>
                  <Text style={styles.socialBarLabel}>View details</Text>
                  <Image
                    style={styles.footer_icon}
                    source={require('../assets/right-arrow.png')}
                  />
                </TouchableOpacity>
              </View>
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
            justifyContent: 'space-between',
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
                <Text style={styles.item_datetime1}>Report now</Text>
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
  item_username: {},
  item_datetime: {
    fontSize: 13,
    color: '#808080',
    marginTop: 5,
    width: 235,
  },
  description: {
    fontSize: 14,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 8,
    color: '#FFF',
  },
  cardImage: {
    width: null,
    height: img_height,
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
    backgroundColor: '#000',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 80,
  },
  description_box: {
    backgroundColor: '#0000005c',
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginTop: -30,
    paddingBottom: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 0,
    paddingLeft: 0,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    backgroundColor: '#000',
    height: 60,
    alignItems: 'center',
  },
  socialBarContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
    marginLeft: 12,
    marginRight: 12,
  },
  socialBarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer_icon: {
    width: 25,
    height: 25,
    marginRight: 8,
  },
  socialBarLabel: {
    color: 'white',
  },
});
