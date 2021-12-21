import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
export default function More() {
  return (
    <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.more}>
        <Image
          style={styles.social_network}
          source={require('../assets/social-network.png')}
        />
      </View>
      <View style={styles.util}>
        <View style={styles.suggest}>
          <Text style={styles.label}>Hello brianlie, anything</Text>
          <Text style={styles.label}>interesting today?</Text>
          <Text style={styles.des}>
            This is your personal timeline - Let's fill it up will lots of joys
            and memories
          </Text>
        </View>

        <View style={{ justifyContent: 'center' }}>
          <TouchableOpacity>
            <Text style={styles.share_btn}>Share your fist thought</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  social_network: {
    width: 200,
    height: 200,
    marginVertical: 32,
  },

  util: {
    alignItems: 'center',
  },

  suggest: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 32,
    marginRight: 32,
    marginBottom: 24,
  },
  label: {
    fontSize: 18,
    fontWeight: 700,
  },
  des: {
    color: '#767676',
    fontSize: 14,
  },
  share_btn: {
    backgroundColor: '#0167ff',
    height: 30,
    borderRadius: 8,
    color: 'white',
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginBottom: 24,
  },
});
