import React from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

const data = [
  {
    id: 1,
    datetime: '3/24/2021',
    content:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    image: '../assets/avatar.jpg',
  },
  {
    id: 2,
    datetime: '11/29/2021',
    content:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    image: '../assets/avatar.jpg',
  },
  {
    id: 3,
    datetime: '7/16/2021',
    content:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    image: '../assets/avatar.jpg',
  },
  {
    id: 4,
    datetime: '2/17/2021',
    content:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    image: '../assets/avatar.jpg',
  },
  {
    id: 5,
    datetime: '3/9/2021',
    content:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    image: '../assets/avatar.jpg',
  },
  {
    id: 6,
    datetime: '8/11/2021',
    content:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    image: '../assets/avatar.jpg',
  },
  {
    id: 7,
    datetime: '2/23/2021',
    content:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    image: '../assets/avatar.jpg',
  },
  {
    id: 8,
    datetime: '1/23/2021',
    content:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    image: '../assets/avatar.jpg',
  },
  {
    id: 9,
    datetime: '4/1/2021',
    content:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    image: '../assets/avatar.jpg',
  },
  {
    id: 10,
    datetime: '6/29/2021',
    content:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    image: '../assets/avatar.jpg',
  },
];

export default function MePostList({ navigation }) {
  return (
    <View style={styles.post_list}>
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
            <View style={styles.post}>
              <Text style={styles.header}>{item.datetime}</Text>
              <TouchableOpacity onPress={() => navigation.navigate('PostDetail')}>
                <View style={styles.des_container}>
                <View style={styles.des_box}>
                  <Text style={styles.des_text} numberOfLines={2} ellipsizeMode='tail'>{item.content}</Text>
                </View>
                <View style={styles.img_box}>
                  <Image
                    style={styles.img}
                    source={require('../assets/avatar.jpg')}
                  />
                  <Image
                    style={styles.img}
                    source={require('../assets/social-network.png')}
                  />
                </View>
                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton} onPress={() => navigation.navigate('PostDetail')}>
                        <Image
                          style={styles.footer_icon}
                          source={require('../assets/heart_76.png')}
                        />
                        <Text style={styles.socialBarLabel}>78</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton} onPress={() => navigation.navigate('PostDetail')}>
                        <Image
                          style={styles.footer_icon}
                          source={require('../assets/message_76.png')}
                        />
                        <Text style={styles.socialBarLabel}>25</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                   <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image
                          style={styles.footer_icon}
                          source={require('../assets/group.png')}
                        />
                       
                      </TouchableOpacity>
                    </View>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image
                          style={styles.footer_icon}
                          source={require('../assets/option_76.png')}
                        />
                       
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  post_list: {
    flexDirection: 'column',
    marginHorizontal: 12,
    width: '100%'
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  socialBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 12
  },

  post: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginVertical: 12,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: 'white',
    paddingLeft: 8,
    paddingRight: 8,
    
  },
  header: {
    backgroundColor: '#ccc',
    fontWeight: 600,
    fontSize: 14,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginBottom: 12,
  },

  des_container: {
    backgroundColor: 'white',
  },
  img_box: {
    flexDirection: 'row',
    justifyContent: 'space-space-evenly',
    alignItems: 'center',
    marginLeft: 12,
  },

  img: {
    height: 100,
    width: 100,
    marginBottom: 12,
  },
  des_box: {
    marginLeft: 12,
  },
  des_text: {
    marginVertical: 12,
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
    width: 15,
    height: 15,
    marginRight: 8,
  },
  socialBarLabel: {
    color: '#767676'
  },
});
