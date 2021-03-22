import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
  Animated,
} from 'react-native';

import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;

class Profile extends React.Component {
  constructor() {
    super();
    this.navTitle = React.createRef();
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageHeaderScrollView
          maxHeight={MAX_HEIGHT}
          minHeight={MIN_HEIGHT}
          maxOverlayOpacity={0.6}
          minOverlayOpacity={0.3}
          renderHeader={() => (
            <Image
              source={require('../../../asessts/images/tobias.jpg')}
              style={styles.image}
            />
          )}
          renderForeground={() => (
            <View style={styles.titleContainer}>
              <Text style={styles.imageTitle}>hello</Text>
            </View>
          )}
          renderFixedForeground={() => (
            <Animated.View style={styles.navTitleView} ref={this.navTitleView}>
              <Text style={styles.navTitle}>hello</Text>
            </Animated.View>
          )}>
          <TriggeringView
            style={{minHeight: 300}}
            onHide={() => this.navTitleView.current.fadeInUp(200)}
            onDisplay={() => this.navTitleView.current.fadeOut(100)}>
            <Text>Scroll Me!</Text>
          </TriggeringView>
          <View>
            <View style={styles.card}>
              <View style={styles.row}>
                <Text style={styles.text}>Mute</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.text}>Custom notifications</Text>
              </View>
              <View style={styles.encrypt}>
                <View>
                  <Text style={styles.text}>Encryption</Text>
                  <Text style={styles.subText}>
                    Messages you send to this chat and calls are secured with
                    end to end Encryption. Tap to verify
                  </Text>
                </View>
                {/* <Icon
                  name="lock"
                  color="#075e54"
                  size={23}
                  style={{padding: 5}}
                /> */}
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.row}>
                <Text style={styles.green}>Status and Phone</Text>
                <Text style={styles.text}>gggg</Text>
                <Text style={styles.subText}>January 5</Text>
              </View>
              <View style={styles.number}>
                <View style={{paddingHorizontal: 5}}>
                  <Text style={styles.text}>+00 9874563212</Text>
                  <Text style={styles.subText}>Mobile</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  {/* <Icon
                    name="chat"
                    color="#075e54"
                    size={23}
                    style={{padding: 5}}
                  />
                  <Icon
                    name="call"
                    color="#075e54"
                    size={23}
                    style={{padding: 5}}
                  />
                  <Icon
                    name="videocam"
                    color="#075e54"
                    size={23}
                    style={{padding: 5}}
                  /> */}
                </View>
              </View>
            </View>
          </View>
        </ImageHeaderScrollView>
      </View>
    );
  }
}

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 40 : 5,
    opacity: 0,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  card: {
    marginTop: 10,
  },
  row: {
    height: 50,
    padding: 10,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#f5f5f5',
    backgroundColor: '#fff',
  },
  encrypt: {
    height: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#f5f5f5',
    backgroundColor: '#fff',
  },
  number: {
    height: 50,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#f5f5f5',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 14,
    color: '#333',
    fontWeight: '400',
  },
  subText: {
    fontSize: 8,
    color: '#555',
  },
  green: {
    color: '#075e54',
    fontSize: 10,
  },
});
