import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';


export default function WriteStatus({navigation}) {
  const [status, setStatus] = useState('')
  return (
    <View style={{flexDirection: 'column'}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.close_icon} source={require('../assets/close.png')}/>
        </TouchableOpacity>
        <View style={[styles.main_header]}>
          <View style={styles.main_title}>
            <Image style={styles.group_icon} source={require('../assets/group.png')} />
            <Text style={{fontSize: 15, marginRight: 6}}>Zalo friends</Text>
            <Image style={styles.down_icon} source={require('../assets/downward-arrow.png')} />
          </View>
          <Text style={styles.sub_title}>Friends on Zalo</Text>
        </View>
        <View style={styles.switch_icons}>
          <TouchableOpacity>
          <View style={styles.sw1}>
            <Text style={{ color: '#0167ff'}}>Aa</Text>
          </View>
          </TouchableOpacity>
            <Image style={styles.sw2} source={require('../assets/witch-broom.png')}/>
          <TouchableOpacity>
          <Image />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('UserInfoDetail')}>
          <Image style={styles.send_icon} source={require('../assets/send-message.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
         <View style={styles.input_box}>
        <TextInput
          placeholder="Write your thoughts"
          numberOfLines={10}
          multiline={true}
          onChange={(text) => setStatus(text)}
          style={styles.input}
        />
        <View style={styles.note}>
          <Text style={{ color: '#767676' }}>0/100</Text>
        </View>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  close_icon: {
    width: 17,
    height: 17,
    marginHorizontal: 16
  },
  body: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  group_icon: {
    width: 17,
    height: 17,
    marginRight: 6
  },
  sw1: {
    fontSize: 15,
    borderRadius: 50,
    height: 30,
    width: 33,
    backgroundColor: '#FFF',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sw2: {
    height: 18,
    width: 18,
    marginRight: 3
  },
  send_icon: {
    height: 20,
    width: 20,
    marginHorizontal: 16
  },
  down_icon: {
    width: 15,
    height: 15
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    borderBottomWidth: 0.3,
    paddingBottom: 8,
    borderColor: '#ccc',
    height: 80
  },
  main_header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
    width: 250
  },
  main_title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  sub_title: {
    color: '#767676',
    fontSize: 10
  },
  switch_icons: {
    width: 60,
    borderRadius: 50,
    height: 30,
    backgroundColor: '#0167ff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
   input_box: {
    backgroundColor: '#FFF',
  },
  input: {
    outlineColor: '#FFF',
    border: 'none',
    padding: 12,
  },
  note: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 12,
    marginVertical: 12,
  },
})