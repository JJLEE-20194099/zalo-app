import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function CreateUsername({ navigation }) {
  return (
    <View>
      <View style={styles.header}>
       <TouchableOpacity style={styles.header_icon_box} onPress={() => navigation.goBack()}>
         <Image
          source={require('../assets/left-chevron.png')}
          style={styles.header_icon}
        />
       </TouchableOpacity>
        <Text style={styles.header_label}>Create username</Text>
      </View>
      <View style={styles.body}>
        <Image source={require('../assets/message.png')} style={styles.bk}/>
        <Text style={styles.note}>Your username cannot be changed or deleted once created</Text>
        <Text style={styles.detail}>Your username is unique. You can use your username and password to login</Text>
      </View>
       <View>
        <View style={styles.btn_box}>
          <TouchableOpacity onPress={() => navigation.navigate('CreateUsernameDetail')}>
            <Text style={styles.btn_text}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bk: {
    width: 100,
    height: 100,
    marginTop: 32
  },
  note: {
    fontWeight: 500,
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 24,
    marginTop: 12
  },
  detail: {
    color:'#767676',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 12,
    marginHorizontal: 24,
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0167ff',
    height: 70,
  },
  header_icon_box: {
    position: 'absolute',
    left: 12,
    justifyContent: 'center',
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
   btn_box: {
    backgroundColor: '#0167ff',
    marginHorizontal: 12,
    height: 40,
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18
  },
  btn_text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 600

  },
});
