import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../constants/colors';
import font from '../constants/font';

class CustomSidebarMenu extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      proileImage: '../../../assets/admin.png',

      data: [
        {
          navOptionName: 'New Group',
          screenToNavigate: 'addGroup',
          uri: require('../../asessts/images/team.png'),
        },
        {
          navOptionName: 'New Boardcast',
          screenToNavigate: 'addBoardcast',
          uri: require('../../asessts/images/broadcast.png'),
        },
        {
          navOptionName: 'Starred Messages',
          screenToNavigate: 'pinMessages',
          uri: require('../../asessts/images/stars.png'),
        },
        {
          navOptionName: 'New Boardcast',
          screenToNavigate: 'addBoard',
          uri: require('../../asessts/images/switch.png'),
        },
        {
          navOptionName: 'Settings',
          screenToNavigate: 'setting',
          uri: require('../../asessts/images/setting.png'),
        },
      ],
    };
  }
  componentDidMount() {
    this.setState({user: this.props.user.user});
  }
  renderItemComponent = (item) => {
    return (
      <View style={styles.card}>
        <Image source={item.item.uri} />
        <Text style={styles.cardText}>{item.item.navOptionName}</Text>
      </View>
    );
  };
  render() {
    const {user} = this.state;

    return (
      <LinearGradient
        style={styles.container}
        colors={[colors.Colors.blueLight, colors.Colors.blueDark]}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity
              style={{padding: 10}}
              onPress={() => this.props.navigation.toggleDrawer()}>
              <Image source={require('../../asessts/images/cross.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.imageView}>
            <View style={styles.img}>
              <Image
                source={require('../../asessts/images/admin.png')}
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: 100,
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View style={styles.profileTextView}>
              <Text style={styles.profileText}>profile</Text>
            </View>
          </View>
        </View>
        <View style={styles.innerContainer}>
          <FlatList
            numColumns={2}
            data={this.state.data}
            showsVerticalScrollIndicator={false}
            renderItem={(item) => this.renderItemComponent(item)}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    width: '95%',
    marginVertical: 20,
    alignSelf: 'center',
  },
  imageView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 20,
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  profileTextView: {
    marginLeft: 10,
  },
  profileText: {
    fontSize: 24,
    fontFamily: font.Fonts.josefReg,
    color: 'white',
    textTransform: 'capitalize',
  },
  innerContainer: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  card: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FBFBFB',
    margin: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 15,
  },
  cardText: {
    color: '#3D3D3D',
    fontFamily: font.Fonts.poppinBold,
    fontSize: 18,
    marginTop: 20,
  },
});
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeUser: (RemoveUser) =>
      dispatch({type: 'REMOVE_USER', payload: RemoveUser}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CustomSidebarMenu);