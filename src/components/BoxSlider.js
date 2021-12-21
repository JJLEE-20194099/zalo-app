import React from 'react';
import {
  View,
  Text,
  Input,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function BoxSlider({ img_url, label, description, go_to, background}) {
  return (
    
      <View style={[styles.box_container, {backgroundColor: background}]}>
        <TouchableOpacity onPress={() => go_to()}>
          <View style={styles.header}>
            <Image source={require('../assets/white_image.png')} style={styles.icon} />
            <Text style={styles.label}>{label}</Text>
          </View>
          <View>
            <Text style={styles.description}>{description}</Text>
          </View>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  box_container: {
    width: 190,
    height: 80, 
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 12,
    borderRadius: 12
  },
  label: {
    fontWeight: 400,
    fontSize: 14,
    color: 'white'
  },
  description: {
      fontSize: 12,
      color: 'white',
      marginLeft: 12
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
    marginVertical: 8
  },

  icon: {
    width: 18,
    height: 18,
    marginRight: 8
  }

});
