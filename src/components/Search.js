import React, { useState } from 'react';
import { View, StyleSheet, Text, Input, TextInput, Image } from 'react-native';

export default function Search() {
  const [searchText, setSearchText] = useState();
  return (
    <View style={styles.container}>
      <Image
        style={styles.search_icon}
        source={require('../assets/search-interface-symbol.png')}
      />
      <TextInput
        style={styles.search_form}
        placeholder="Search friends, messages..."
        placeholderTextColor="#FFF"
        onChangeText={(text) => setSearchText(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },

  search_icon: {
    width: 20,
    height: 20,
    marginLeft: 12,
    marginRight: 8,
  },

  search_form: {
    flex: 1,
    color: '#FFF',
    padding: 8,
    fontSize: 16,
    marginRight: 8,
  },
});
