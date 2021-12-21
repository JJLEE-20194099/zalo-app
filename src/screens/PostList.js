import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
  TextInput,
  Animated,
  Dimensions,
  Modal,
  Input,
  SafeAreaView,
  Clipboard,
  TouchableWithoutFeedback,
} from 'react-native';
import ReportBox from '../components/ReportBox';
import Search from '../components/Search';
import { Platform } from 'react-native';
import BackButton from '../components/BackButton';
const tabBarHeight = Platform.OS === 'ios' ? 100 : 70;

const { height, width } = Dimensions.get('window');

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

export default function Blog({ navigation }) {
  const data = [
    {
      id: 1,
      username: 'srixon0',
      avatar:
        'https://robohash.org/sapientecumquevelit.png?size=50x50&set=set1',
      description:
        'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
      datetime: '11/14/2021',
      image: 'http://dummyimage.com/192x100.png/dddddd/000000',
    },
    {
      id: 2,
      username: 'tcampsall1',
      avatar:
        'https://robohash.org/explicaboearumomnis.png?size=50x50&set=set1',
      description:
        'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
      datetime: '3/13/2021',
      image: 'http://dummyimage.com/158x100.png/dddddd/000000',
    },
    {
      id: 3,
      username: 'enicholes2',
      avatar: 'https://robohash.org/utvoluptatemet.png?size=50x50&set=set1',
      description:
        'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
      datetime: '8/12/2021',
      image: 'http://dummyimage.com/239x100.png/dddddd/000000',
    },
    {
      id: 4,
      username: 'ohusby3',
      avatar:
        'https://robohash.org/quasofficiisperspiciatis.png?size=50x50&set=set1',
      description:
        'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
      datetime: '11/22/2021',
      image: 'http://dummyimage.com/117x100.png/dddddd/000000',
    },
    {
      id: 5,
      username: 'cbilam4',
      avatar: 'https://robohash.org/magniutdelectus.png?size=50x50&set=set1',
      description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
      datetime: '5/2/2021',
      image: 'http://dummyimage.com/136x100.png/5fa2dd/ffffff',
    },
    {
      id: 6,
      username: 'apollen5',
      avatar:
        'https://robohash.org/accusamusveritatissunt.png?size=50x50&set=set1',
      description:
        'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
      datetime: '1/4/2021',
      image: 'http://dummyimage.com/111x100.png/dddddd/000000',
    },
    {
      id: 7,
      username: 'htapp6',
      avatar:
        'https://robohash.org/minimacupiditatequi.png?size=50x50&set=set1',
      description:
        'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
      datetime: '1/21/2021',
      image: 'http://dummyimage.com/173x100.png/cc0000/ffffff',
    },
    {
      id: 8,
      username: 'rfrancois7',
      avatar:
        'https://robohash.org/quiaimpeditdoloremque.png?size=50x50&set=set1',
      description:
        'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
      datetime: '12/2/2021',
      image: 'http://dummyimage.com/116x100.png/ff4444/ffffff',
    },
    {
      id: 9,
      username: 'tsherrott8',
      avatar:
        'https://robohash.org/commodilaborevoluptates.png?size=50x50&set=set1',
      description:
        'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
      datetime: '5/2/2021',
      image: 'http://dummyimage.com/173x100.png/ff4444/ffffff',
    },
    {
      id: 10,
      username: 'ggiannini9',
      avatar: 'https://robohash.org/velitestblanditiis.png?size=50x50&set=set1',
      description:
        'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
      datetime: '2/17/2021',
      image: 'http://dummyimage.com/222x100.png/ff4444/ffffff',
    },
  ];

  const comment = [
    {
      id: 1,
      username: 'Harlene',
      avatar:
        'https://robohash.org/praesentiumestdolores.png?size=50x50&set=set1',
      comment: 'Action|Sci-Fi',
      gender: 'Non-binary',
      timestamp: '2021-06-29',
    },
    {
      id: 2,
      username: 'Cassy',
      avatar: 'https://robohash.org/enimquisnostrum.png?size=50x50&set=set1',
      comment: 'Horror|Sci-Fi',
      gender: 'Agender',
      timestamp: '2021-11-05',
    },
    {
      id: 3,
      username: 'Lynnea',
      avatar: 'https://robohash.org/maioresnullaqui.png?size=50x50&set=set1',
      comment: 'Documentary',
      gender: 'Female',
      timestamp: '2021-03-19',
    },
    {
      id: 4,
      username: 'Eada',
      avatar: 'https://robohash.org/debitisadipisciquo.png?size=50x50&set=set1',
      comment: 'Comedy|Thriller',
      gender: 'Non-binary',
      timestamp: '2021-11-05',
    },
    {
      id: 5,
      username: 'Annetta',
      avatar:
        'https://robohash.org/reiciendispossimusest.png?size=50x50&set=set1',
      comment: 'Comedy',
      gender: 'Male',
      timestamp: '2021-08-08',
    },
    {
      id: 6,
      username: 'Tulley',
      avatar:
        'https://robohash.org/nonexplicabodelectus.png?size=50x50&set=set1',
      comment: 'Action|Drama|Thriller',
      gender: 'Female',
      timestamp: '2021-10-25',
    },
    {
      id: 7,
      username: 'Kamilah',
      avatar:
        'https://robohash.org/nostrumplaceatharum.png?size=50x50&set=set1',
      comment: 'Action',
      gender: 'Non-binary',
      timestamp: '2021-08-23',
    },
    {
      id: 8,
      username: 'Izaak',
      avatar:
        'https://robohash.org/accusantiumvoluptatemcumque.png?size=50x50&set=set1',
      comment: 'Drama',
      gender: 'Agender',
      timestamp: '2021-02-08',
    },
    {
      id: 9,
      username: 'Gertruda',
      avatar: 'https://robohash.org/beataeetassumenda.png?size=50x50&set=set1',
      comment: 'Crime|Drama|Thriller',
      gender: 'Non-binary',
      timestamp: '2021-07-16',
    },
    {
      id: 10,
      username: 'Venita',
      avatar:
        'https://robohash.org/nostrumoccaecatiquia.png?size=50x50&set=set1',
      comment: 'Action|Adventure|Comedy|Crime|Fantasy',
      gender: 'Female',
      timestamp: '2021-07-13',
    },
  ];

  const [textContent, setTextContent] = useState('');
  const [showReportModal, setShowReportModal] = useState(false);
  const [utilVisible, setUtilVisible] = useState(false);
  const [otherReasonsFormVisible, setOtherReasonsFormVisible] = useState(false);
  const [deleteCommentVisisble, setDeleteCommentVisisble] = useState(false);
  const [otherReasonsText, setOtherReasonsText] = useState('');
  const [copiedComment, setCopiedComment] = useState('');
  const sendOtherReason = () => {
    setOtherReasonsFormVisible(false);
    Alert.alert('Successful', 'Report successfully', [{ text: 'OK' }]);
  };
  const report = () => {
    setUtilVisible(!utilVisible);
    setTimeout(() => {
      setShowReportModal(!showReportModal);
    }, 200);
  };
  const report_alert = () => {
    setShowReportModal(!showReportModal);
    Alert.alert('Successful', 'Report successfully', [{ text: 'OK' }]);
  };

  const sendReportReason = () => {
    setOtherReasonsFormVisible(!otherReasonsFormVisible);
    Alert.alert('Successful', 'Report successfully', [{ text: 'OK' }]);
  };

  const showReasonForm = () => {
    setShowReportModal(!showReportModal);
    setTimeout(() => {
      setOtherReasonsFormVisible(!otherReasonsFormVisible);
    }, 200);
  };
  const doOption = () => {
    setUtilVisible(!utilVisible);
    Alert.alert('Successful', [{ text: 'OK' }]);
  };

  const alert_your_manipulation = (title, description) => {
    Alert.alert(title, description, [
      {
        text: 'No',
      },
      {
        text: 'Delete',
        onPress: () => doOption(),
      },
    ]);
    setUtilVisible(!utilVisible);
  };

  const cancel = () => {
    setShowReportModal(!setShowReportModal);
  };

  const copyComment = async (commentText) => {
    Clipboard.setString(comment);
    const text = await Clipboard.getString();
    setCopiedComment(text);
    setDeleteCommentVisisble(!deleteCommentVisisble);
  };

  const deleteComment = () => {
    setDeleteCommentVisisble(!deleteCommentVisisble);
    Alert.alert('Successful', 'Delete sucessfully', [
      {
        text: 'No',
      },
    ]);
  };

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.search_box}>
          <Search />
        </View>

        <View style={styles.header_icons}>
          <Image
            style={styles.header_icon}
            source={require('../assets/pen-and-paper.png')}
          />
          <Image
            style={styles.header_icon}
            source={require('../assets/bell.png')}
          />
        </View>
      </View>
      <View style={styles.post_list}>
        <View style={styles.story_box}>
          <View style={styles.story_container}>
            <View>
              <Text
                style={{ textAlign: 'left', marginBottom: 8, marginTop: 12 }}>
                Story
              </Text>
            </View>
            <View style={styles.avatar_box}>
              <Image
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: 80,
                  height: 80,
                  overflow: 'hidden',
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
                source={require('../assets/avatar.jpg')}
              />
              <View style={styles.story_avatar_label}>
                <View style={styles.story_icon_box}>
                  <View
                    style={{
                      backgroundColor: '#9f8ffb',
                      borderRadius: 50,
                      width: 35,
                      height: 35,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      style={styles.story_icon}
                      source={require('../assets/camera.png')}
                    />
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: 10,
                    textAlign: 'center',
                    marginTop: 4,
                    marginBottom: 4,
                  }}>
                  Create new
                </Text>
              </View>
            </View>
          </View>

          <View>
            <TextInput
              style={styles.story_post_container}
              multiline={true}
              numberOfLines={1}
              placeholder="Write something ..."
              onChangeText={(textContent) => setTextContent(textContent)}
            />
          </View>
        </View>

        <View style={styles.me_container}>
          <View style={styles.card_header}>
            <View style={styles.card_header_main}>
              <TouchableOpacity onPress={() => navigation.navigate('UserInfoDetail')}>
                <Image
                  style={styles.story_avatar}
                  source={require('../assets/avatar.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('WriteStatus')}>
                <View>
                  <Text style={styles.post_container}>How are you today</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => setUtilVisible(!utilVisible)}
                activeOpacity={0.85}
                style={{
                  width: '75%',

                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={styles.three_dot}
                  source={require('../assets/three-dot-icon.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.support_post_container}>
            <View style={styles.support_box}>
              <TouchableOpacity
                style={styles.support_icon}
                onPress={_showBottomView}>
                <Image
                  style={styles.footer_support_icon}
                  source={require('../assets/photo.png')}
                />
                <Text style={styles.supportLabel}>Photo</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.support_box}>
              <TouchableOpacity
                style={styles.support_icon}
                onPress={() => navigation.navigate('PostDetail')}>
                <Image
                  style={styles.footer_support_icon}
                  source={require('../assets/video.png')}
                />
                <Text style={styles.supportLabel}>Video</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.support_box}>
              <TouchableOpacity style={styles.support_icon}>
                <Image
                  style={styles.footer_support_icon}
                  source={require('../assets/photo-album.png')}
                />
                <Text style={styles.supportLabel}>Create album</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <FlatList
            style={styles.list}
            data={data}
            keyExtractor={(item) => {
              return item.id;
            }}
            ItemSeparatorComponent={() => {
              return <View style={styles.separator} />;
            }}
            renderItem={({ item }) => {
              return (
                <View style={styles.card}>
                  <View style={styles.card_header}>
                    <View style={styles.card_header_main}>
                      <Image
                        style={styles.item_avatar}
                        source={require('../assets/avatar.jpg')}
                      />
                      <View>
                        <Text style={styles.item_username}>
                          {item.username}
                        </Text>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('PostDetail')}>
                          <Text style={styles.item_datetime}>
                            {item.datetime}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={() => setUtilVisible(!utilVisible)}
                        activeOpacity={0.85}
                        style={{
                          width: '75%',

                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Image
                          style={styles.three_dot}
                          source={require('../assets/three-dot-icon.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.cardContent}>
                    <View>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('PostDetail')}>
                        <Text style={styles.description}>
                          {item.description}
                        </Text>
                      </TouchableOpacity>
                      <View>
                        <Image
                          style={styles.cardImage}
                          source={require('../assets/post-img.png')}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.cardFooter}>
                    <View style={styles.socialBarContainer}>
                      <View style={styles.socialBarSection}>
                        <TouchableOpacity style={styles.socialBarButton}>
                          <Image
                            style={styles.footer_icon}
                            source={require('../assets/heart-icon.png')}
                          />
                          <Text style={styles.socialBarLabel}>78</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.socialBarSection}>
                        <TouchableOpacity
                          style={styles.socialBarButton}
                          onPress={_showBottomView}>
                          <Image
                            style={styles.footer_icon}
                            source={require('../assets/message-icon.png')}
                          />
                          <Text style={styles.socialBarLabel}>25</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
          />
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
            justifyContent: 'flex-start',
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
        <View style={{ flex: 1, width: '100%', flexDirection: 'column' }}>
          <View style={styles.comment_header}>
            <View style={{ flex: 1 }}>
              <Text style={{ textAlign: 'center', fontSize: 16 }}>
                Comments
              </Text>
            </View>
            <View
              style={{
                height: '100%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity onPress={() => _showBottomView('HIDE')}>
                <Image
                  style={styles.close_icon}
                  source={require('../assets/close.png')}
                />
              </TouchableOpacity>
            </View>
            <View></View>
          </View>
          <View
            style={{
              marginTop: 12,
              paddingBottom: 12,
              borderBottomWidth: 0.1,
              borderColor: '#ccc',
            }}>
            <View style={styles.socialBarContainer_comment}>
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

          <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Text
                style={{
                  color: '#767676',
                  fontSize: 12,
                  paddingHorizontal: 12,
                  paddingVertical: 12,
                  textAlign: 'center',
                }}>
                78 comments in total. You can see comments from people in your
                contact list
              </Text>
              <Image
                style={styles.message_util_icon}
                source={require('../assets/feedback.png')}
              />
              <Text
                style={{ fontWeight: 500, color: '#767676', marginBottom: 8 }}>
                Share your thought about the post
              </Text>
              <View>
                <Text
                  style={{
                    marginBottom: 12,
                    paddingHorizontal: 12,
                    fontSize: 11,
                  }}>
                  Use Stickers to make your comment more fun!{' '}
                  <Text style={{ color: '#0167ff' }}>See more!</Text>
                </Text>
              </View>

              <ScrollView style={{ width: '100%', maxHeight: 200 }}>
                <FlatList
                  style={styles.comment_list}
                  data={comment}
                  keyExtractor={(item) => {
                    return item.id;
                  }}
                  ItemSeparatorComponent={() => {
                    return <View style={styles.comment_separator} />;
                  }}
                  renderItem={({ item }) => {
                    return (
                      <View style={styles.card_header}>
                        <View style={styles.card_header_main_comment}>
                          <Image
                            style={styles.item_avatar}
                            source={{ uri: item.avatar }}
                          />
                          <View style={{ flex: 1 }}>
                            <Text style={styles.item_username}>
                              {item.username}
                            </Text>
                            <Text style={styles.item_comment_content}>
                              {item.comment}
                            </Text>
                            <TouchableOpacity
                              onPress={() => navigation.navigate('PostDetail')}>
                              <Text style={styles.item_datetime}>
                                {item.timestamp}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                        <View>
                          <TouchableOpacity
                            onPress={() =>
                              setDeleteCommentVisisble(!deleteCommentVisisble)
                            }
                            activeOpacity={0.85}
                            style={{
                              width: '75%',

                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                            <Image
                              style={styles.three_dot}
                              source={require('../assets/three-dot-icon.png')}
                            />
                          </TouchableOpacity>
                        </View>

                        <Modal
                          transparent
                          animationType={'slide'}
                          visible={deleteCommentVisisble}>
                          <View
                            style={{
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: 'rgba(0, 0, 0, 0.5)',
                              width: '100%',
                              height: '100%',
                            }}>
                            <View style={styles.otherReasonsForm}>
                              <Text
                                style={{
                                  padding: 8,
                                  borderBottomWidth: 0.3,
                                  borderColor: '#ccc',
                                  textAlign: 'center',
                                }}>
                                item.comment
                              </Text>

                              <View
                                style={{
                                  marginTop: 4,
                                  width: '100%',
                                }}>
                                <View
                                  style={{
                                    borderRightWidth: 0.3,
                                    borderColor: '#ccc',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                  }}>
                                  <TouchableOpacity
                                    onPress={() => copyComment(item.comment)}>
                                    <Text style={{ textAlign: 'center' }}>
                                      copy
                                    </Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity onPress={deleteComment}>
                                    <Text
                                      styles={{
                                        color: '#0167ff',
                                        textAlign: 'center',
                                      }}>
                                      Delete this comment
                                    </Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity
                                    onPress={() =>
                                      setDeleteCommentVisisble(
                                        !deleteCommentVisisble
                                      )
                                    }>
                                    <Text
                                      styles={{
                                        color: '#0167ff',
                                        textAlign: 'center',
                                      }}>
                                      Cancel
                                    </Text>
                                  </TouchableOpacity>
                                </View>
                              </View>
                            </View>
                          </View>
                        </Modal>
                      </View>
                    );
                  }}
                />
              </ScrollView>
            </View>
            <View
              style={{
                paddingVertical: 4,
                flexDirection: 'row',
                alignItems: 'center',
                borderTopWidth: 0.1,
                borderColor: '#767676',
              }}>
              <View style={styles.comment_box}>
                <View>
                  <Image
                    style={styles.comment_icon}
                    source={require('../assets/happy.png')}
                  />
                </View>
                <TextInput
                  placeholder="comment"
                  style={{
                    padding: 6,
                    outlineColor: '#FFF',
                    flex: 1,
                    height: 50,
                  }}
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
        </View>
      </Animated.View>

      <View
        style={{
          flexDirection: 'row',
          height: '100%',
          alignItems: 'flex-end',
          backgroundColor: 'white',
        }}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={utilVisible}
          onRequestClose={() => {
            setUtilVisible(false);
          }}>
          <TouchableOpacity
            style={styles.container}
            activeOpacity={1}
            onPressOut={() => {
              setUtilVisible(false);
            }}>
            <TouchableWithoutFeedback>
              <View style={styles.util_modal_container}>
                <TouchableOpacity
                  onPress={() =>
                    alert_your_manipulation(
                      'Delete this post',
                      "You won't see this post on your timeline"
                    )
                  }>
                  <View
                    style={
                      (styles.card_header_main,
                      {
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderTopEndRadius: 12,
                        borderTopRightRadius: 12,
                        paddingTop: 12,
                      })
                    }>
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
                      <Text style={styles.item_datetime1}>
                        You won't see this post on your timeline
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    alert_your_manipulation(
                      'Unsubscribe Tùng Đặng',
                      "You won't see any pots or stories from this friends"
                    )
                  }>
                  <View
                    style={
                      (styles.card_header_main,
                      {
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                      })
                    }>
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
                      <Text style={styles.item_username}>
                        Unsubscribe Tùng Đặng
                      </Text>
                      <Text style={styles.item_datetime1}>
                        You won't see any pots or stories from this friends
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    alert_your_manipulation(
                      ' Hide all my activities from Tùng Đặng',
                      "This friend won't see your posts or stories"
                    )
                  }>
                  <View
                    style={
                      (styles.card_header_main,
                      {
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                      })
                    }>
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
                      <Text style={styles.item_datetime1}>
                        This friend won't see your posts or stories
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={report}>
                  <View
                    style={
                      (styles.card_header_main,
                      {
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                      })
                    }>
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
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        </Modal>
      </View>

      <View
        style={{
          flexDirection: 'row',
          height: '100%',
          alignItems: 'flex-end',
          backgroundColor: 'white',
        }}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={showReportModal}
          onRequestClose={() => {
            setShowReportModal(false);
          }}>
          <TouchableOpacity
            style={styles.container}
            activeOpacity={1}
            onPressOut={() => {
              setShowReportModal(false);
            }}>
            <TouchableWithoutFeedback>
              <View style={styles.util_modal_container}>
                <View style={styles.main_box}>
                  <View style={styles.option_box}>
                    <View style={{ alignItems: 'center', padding: 14 }}>
                      <Text style={{ color: '#ccc' }}>Confirm</Text>
                      <Text style={{ color: '#ccc' }}>
                        Report this acitivity for bad contents?
                      </Text>
                    </View>
                    <TouchableOpacity onPress={report_alert}>
                      <View
                        style={{
                          alignItems: 'center',
                          padding: 12,
                          borderTopWidth: 0.3,
                          borderTopColor: '#ccc',
                        }}>
                        <Text
                          style={{
                            color: '#0167ff',
                            fontWeight: 400,
                            fontSize: 20,
                          }}>
                          Sensitive content
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={report_alert}>
                      <View
                        style={{
                          alignItems: 'center',
                          padding: 12,
                          borderTopWidth: 0.3,
                          borderTopColor: '#ccc',
                        }}>
                        <Text
                          style={{
                            color: '#0167ff',
                            fontWeight: 400,
                            fontSize: 20,
                          }}>
                          Spam
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={report_alert}>
                      <View
                        style={{
                          alignItems: 'center',
                          padding: 12,
                          borderTopWidth: 0.3,
                          borderTopColor: '#ccc',
                        }}>
                        <Text
                          style={{
                            color: '#0167ff',
                            fontWeight: 400,
                            fontSize: 20,
                          }}>
                          Phising
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => showReasonForm()}>
                      <View
                        style={{
                          alignItems: 'center',
                          padding: 12,
                          borderTopWidth: 0.3,
                          borderTopColor: '#ccc',
                        }}>
                        <Text
                          style={{
                            color: '#0167ff',
                            fontWeight: 400,
                            fontSize: 20,
                          }}>
                          Other reasons
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={styles.cancel_box} onPress={cancel}>
                    <View style={{ alignItems: 'center', padding: 14 }}>
                      <Text
                        style={{
                          color: '#0167ff',
                          fontWeight: 400,
                          fontSize: 20,
                        }}>
                        Cancel
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        </Modal>
      </View>

      <View
        style={{
          flexDirection: 'row',
          height: '100%',
          alignItems: 'flex-end',
        }}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={otherReasonsFormVisible}
          onRequestClose={() => {
            setOtherReasonsFormVisible(false);
          }}>
          <TouchableOpacity
            style={styles.other_reason_container}
            activeOpacity={1}
            onPressOut={() => {
              setOtherReasonsFormVisible(false);
            }}>
            <TouchableWithoutFeedback>
              <View style={styles.util_reason_modal_container}>
                <Text style={styles.reason_label}>Report</Text>
                <TextInput
                  placeholder="Enter report reason"
                  numberOfLines={5}
                  multiline={true}
                  style={styles.reason_input}
                  onChangeText={(text) => setOtherReasonsText(text)}
                />
                <View style={styles.cancel_ok_box}>
                  <TouchableOpacity
                    onPress={() => setOtherReasonsFormVisible(false)}>
                    <Text style={styles.reason_cancel}>Cancel</Text>
                  </TouchableOpacity>
                  <View style={styles.separate}></View>
                  <TouchableOpacity onPress={sendOtherReason}>
                    <Text style={styles.reason_ok}>OK</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header_icons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#0167ff',
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
  },
  search_box: {
    flex: 1,
  },
  header_icon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  cancel_ok_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    borderTopWidth: 0.3,
    borderColor: '#ccc',
    height: 30,
  },
  separate: {
    width: 0.1,
    height: '100%',
    paddingLeft: 0.1,
    borderRightWidth: 0.1,
    borderColor: '#ccc',
  },
  reason_ok: {
    fontWeight: 500,
    color: '#0167ff',
  },
  reason_label: {
    paddingVertical: 12,
    borderBottomWidth: 0.3,
    borderColor: '#ccc',
    width: '100%',
    textAlign: 'center',
  },
  reason_input: {
    outlineColor: '#FFF',
    padding: 12,
    width: '98%',
    marginVertical: 8,
  },
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#30303099',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  other_reason_container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#30303099',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  me_container: {
    backgroundColor: '#FFFFFF',
    height: 115,
    marginBottom: 8,
  },
  support_post_container: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderTopWidth: 0.3,
    borderTopColor: '#ccc',
  },
  post_container: {
    padding: 10,
    border: 'none',
    backgroundColor: '#FFF',
    color: '#767676',
  },
  story_post_container: {
    padding: 16,
    border: 'none',
    outlineColor: '#FFF',
    backgroundColor: '#FFF',
    marginLeft: 12,
  },
  comment_list: {
    backgroundColor: 'FFFFFF',
  },
  list: {
    backgroundColor: 'FFFFFF',
  },
  separator: {
    marginTop: 10,
  },
  comment_separator: {
    paddingBottom: 8,
    borderBottomWidth: 0.001,
    borderColor: '#ccc',
  },
  /******** card **************/

  item_avatar: {
    borderRadius: 50,
    width: 50,
    height: 50,
    marginRight: 12,
  },
  report_item: {
    width: 25,
    height: 25,
    marginRight: 12,
  },
  story_avatar: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  item_username: {},
  item_datetime: {
    fontSize: 13,
    color: '#808080',
    marginTop: 5,
  },

  item_datetime1: {
    fontSize: 13,
    color: '#808080',
    width: 235,
  },

  three_dot: {
    width: 24,
    height: 24,
    marginRight: 12,
  },

  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    backgroundColor: '#FFFFFF',
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
    alignItems: 'center',
  },
  card_header_main_comment: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingRight: 0,
    paddingLeft: 0,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    backgroundColor: '#FFFFFF',
  },
  cardImage: {
    flex: 1,
    height: 200,
    width: null,
  },
  /******** card components **************/
  description: {
    fontSize: 14,
    fontWeight: 500,
    flex: 1,
    marginTop: 5,
    marginBottom: 18,
    flexWrap: 'wrap',
  },
  footer_icon: {
    width: 25,
    height: 25,
    marginRight: 8,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  socialBarContainer_comment: {
    justifyContent: 'space-between',
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

  support_icon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  supportLabel: {
    fontSize: 12,
    marginRight: 12,
  },
  story_box: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 12,
    height: 170,
    paddingTop: 8,
  },

  story_container: {
    marginLeft: 12,
    marginTop: 0,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 16,
  },
  story_avatar_label: {
    marginTop: -17,
    width: 80,
  },
  story_icon_box: {
    alignItems: 'center',
    borderRadius: 50,
  },
  story_icon: {
    width: 15,
    height: 15,
  },
  avatar_box: {
    alignItems: 'center',
    borderColor: '#CCC',
    borderWidth: 0.3,
    borderRadius: 12,
    marginBottom: 12,
  },
  support_box: {
    padding: 8,
    borderRightWidth: 0.3,
    borderColor: '#ccc',
  },
  footer_support_icon: {
    width: 25,
    height: 25,
    marginRight: 8,
  },

  util_modal_container: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
  },
  util_reason_modal_container: {
    marginHorizontal: 24,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 12,
    height: 200,
    justifyContent: 'space-between',
  },

  main_box: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 12,
    flexDirection: 'column',
    alignItem: 'center',
  },

  option_box: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginLeft: 12,
    marginRight: 12,
    flex: 1,
  },
  cancel_box: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 8,
  },
  otherReasonsForm: {
    paddingHorizontal: 20,
    elevation: 20,
    flex: 1,
  },
  comment_header: {
    backgroundColor: '#0167ff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 80,
  },
  close_icon: {
    position: 'relative',
    width: 15,
    height: 15,
    right: 12,
  },
  message_util_icon: {
    height: 65,
    width: 65,
  },
  comment_box: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  comment_icon: {
    width: 18,
    height: 18,
    marginRight: 12,
    marginLeft: 12,
  },
  item_comment_content: {
    fontSize: 12,
    marginTop: 8,
    color: '#767676',
    width: '90%',
  },
});
