import React from 'react';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from 'react';
import { theme } from './src/core/theme';
import FontManager from 'react-native-font-weight';

import { View, Image, Text } from 'react-native';

import {
  StartScreen,
  LoginScreen,
  FirstRegisterScreen,
  SecondRegisterScreen,
  CreatePassWord,
  ResetPasswordScreen,
  PostList,
  PostDetail,
  ImageDetail,
  CommentatorList,
  UserInfo,
  UserInfoDetail,
  EditYourBio,
  WriteStatus,
  AboutMe,
  PersonalInfo,
  UpdatePersonalInfo,
  CreateUsername,
  CreateUsernameDetail,
  AcountAndSecurity,
  ChangePassword,
} from './src/screens';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const BottomTab = createBottomTabNavigator();

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="Messages"
        tabBarOptions={{
          activeTintColor: '#0167ff',
        }}
        screenOptions={{ headerShown: false }}>
        <BottomTab.Screen
          name="Messages"
          component={Messages}
          options={{
            tabBarIcon: ({ size, focused, color }) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: 14,
                }}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? '#0167ff' : '#767676',
                  }}
                  source={require('./src/assets/message_76.png')}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    marginTop: 2,
                    marginBottom: 8,
                    color: focused ? '#0167ff' : '#767676',
                  }}>
                  Messages
                </Text>
              </View>
            ),
            tabBarLabel: () => {
              return null;
            },
          }}
        />
        <BottomTab.Screen
          name="Contacts"
          component={Contacts}
          options={{
            tabBarIcon: ({ size, focused, color }) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: 14,
                }}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? '#0167ff' : '#767676',
                  }}
                  source={require('./src/assets/phone-book.png')}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    marginTop: 2,
                    marginBottom: 8,
                    color: focused ? '#0167ff' : '#767676',
                  }}>
                  Contacts
                </Text>
              </View>
            ),
            tabBarLabel: () => {
              return null;
            },
          }}
        />
        <BottomTab.Screen
          name="Discovery"
          component={Discovery}
          options={{
            tabBarIcon: ({ size, focused, color }) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: 14,
                }}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? '#0167ff' : '#767676',
                  }}
                  source={require('./src/assets/layout.png')}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    marginTop: 2,
                    marginBottom: 8,
                    color: focused ? '#0167ff' : '#767676',
                  }}>
                  Discovery
                </Text>
              </View>
            ),
            tabBarLabel: () => {
              return null;
            },
          }}
        />
        <BottomTab.Screen
          name="Timeline"
          component={Timeline}
          options={{
            tabBarIcon: ({ size, focused, color }) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: 14,
                }}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? '#0167ff' : '#767676',
                  }}
                  source={require('./src/assets/wall-clock.png')}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    marginTop: 2,
                    marginBottom: 8,
                    color: focused ? '#0167ff' : '#767676',
                  }}>
                  Timeline
                </Text>
              </View>
            ),
            tabBarLabel: () => {
              return null;
            },
          }}
        />
        <BottomTab.Screen
          name="Me"
          component={Me}
          options={{
            tabBarIcon: ({ size, focused, color }) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: 14,
                }}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? '#0167ff' : '#767676',
                  }}
                  source={require('./src/assets/user_bottom_tab.png')}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    marginTop: 2,
                    marginBottom: 8,
                    color: focused ? '#0167ff' : '#767676',
                  }}>
                  Me
                </Text>
              </View>
            ),
            tabBarLabel: () => {
              return null;
            },
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const Messages = () => {
  return (
    <Stack.Navigator
      initialRouteName="PostList"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="PostList" component={PostList} />

      <Stack.Screen name="PostDetail" component={PostDetail} />
      <Stack.Screen name="ImageDetail" component={ImageDetail} />
      <Stack.Screen name="CommentatorList" component={CommentatorList} />
    </Stack.Navigator>
  );
};

const Contacts = () => {
  return (
    <Stack.Navigator
      initialRouteName="UserInfo"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="UserInfo" component={UserInfo} />
      <Stack.Screen name="UserInfoDetail" component={UserInfoDetail} />
      <Stack.Screen name="EditYourBio" component={EditYourBio} />
      <Stack.Screen name="WriteStatus" component={WriteStatus} />
      <Stack.Screen name="AboutMe" component={AboutMe} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
      <Stack.Screen name="UpdatePersonalInfo" component={UpdatePersonalInfo} />
      <Stack.Screen name="CreateUsername" component={CreateUsername} />
      <Stack.Screen
        name="CreateUsernameDetail"
        component={CreateUsernameDetail}
      />
      <Stack.Screen name="AcountAndSecurity" component={AcountAndSecurity} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
};

const Discovery = () => {
  return (
    <Stack.Navigator
      initialRouteName="PostList"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="PostList" component={PostList} />

      <Stack.Screen name="PostDetail" component={PostDetail} />
      <Stack.Screen name="ImageDetail" component={ImageDetail} />
      <Stack.Screen name="CommentatorList" component={CommentatorList} />
    </Stack.Navigator>
  );
};

const Timeline = () => {
  return (
    <Stack.Navigator
      initialRouteName="PostList"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="PostList" component={PostList} />

      <Stack.Screen name="PostDetail" component={PostDetail} />
      <Stack.Screen name="ImageDetail" component={ImageDetail} />
      <Stack.Screen name="CommentatorList" component={CommentatorList} />
      <Stack.Screen name="UserInfo" component={UserInfo} />
      <Stack.Screen name="UserInfoDetail" component={UserInfoDetail} />
      <Stack.Screen name="EditYourBio" component={EditYourBio} />
      <Stack.Screen name="WriteStatus" component={WriteStatus} />
      <Stack.Screen name="AboutMe" component={AboutMe} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
      <Stack.Screen name="UpdatePersonalInfo" component={UpdatePersonalInfo} />
      <Stack.Screen name="CreateUsername" component={CreateUsername} />
      <Stack.Screen
        name="CreateUsernameDetail"
        component={CreateUsernameDetail}
      />
      <Stack.Screen name="AcountAndSecurity" component={AcountAndSecurity} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      
    </Stack.Navigator>
  );
};
const Me = () => {
  return (
    <Stack.Navigator
      initialRouteName="UserInfo"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="UserInfo" component={UserInfo} />
      <Stack.Screen name="UserInfoDetail" component={UserInfoDetail} />
      <Stack.Screen name="EditYourBio" component={EditYourBio} />
      <Stack.Screen name="WriteStatus" component={WriteStatus} />
      <Stack.Screen name="AboutMe" component={AboutMe} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
      <Stack.Screen name="UpdatePersonalInfo" component={UpdatePersonalInfo} />
      <Stack.Screen name="CreateUsername" component={CreateUsername} />
      <Stack.Screen
        name="CreateUsernameDetail"
        component={CreateUsernameDetail}
      />
      <Stack.Screen name="AcountAndSecurity" component={AcountAndSecurity} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
};
