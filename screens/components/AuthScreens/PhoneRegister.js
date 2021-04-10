// Import React and Component
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import font from '../../constants/font';
import colors from '../../constants/colors';
const PhoneRegister = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    navigation.navigate('PhoneOtp');
  };

  return (
    <LinearGradient
      colors={[colors.Colors.blueLight, colors.Colors.blueDark]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <View style={{flex: 1}}>
          <View style={styles.headerImage}>
            <Text style={styles.headerText}>Community App</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <KeyboardAvoidingView enabled>
            <View style={[styles.heading, {marginTop: 40}]}>
              <Text style={styles.headingText}>
                Enter your phone number to continue
              </Text>
            </View>

            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                placeholder="3409755265" //12345
                placeholderTextColor={colors.Colors.gray}
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            <View style={styles.heading}>
              <Text style={styles.headingText}>
                Enter an OTP pin sent to your phone number for confirmation
              </Text>
            </View>
            <View style={styles.row}>
              <View>
                <Image
                  source={require('../../../asessts/images/process.png')}
                />
              </View>
              <LinearGradient
                style={styles.buttonView}
                colors={[colors.Colors.blueLight, colors.Colors.blueDark]}>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.5}
                  onPress={handleSubmitPress}>
                  <Text style={styles.buttonTextStyle}>Next</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};
export default PhoneRegister;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
  },
  headerImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    fontFamily: font.Fonts.josefBold,
  },
  footer: {
    backgroundColor: '#FBFBFB',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    bottom: 0,
    // height:'70%'
  },
  heading: {
    width: '70%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  headingText: {
    color: colors.Colors.gray,
    fontFamily: font.Fonts.josefReg,
    fontSize: 18,
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 50,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    width: '90%',
    alignSelf: 'center',
  },
  inputStyle: {
    flex: 1,
    color: colors.Colors.gray,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#d8d8d8',
    fontFamily: font.Fonts.josefReg,
    backgroundColor: '#F3F1F1',
    fontSize: 20,
  },
  row: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 40,
  },
  buttonView: {
    borderRadius: 30,
  },
  buttonStyle: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 50,
  },

  buttonTextStyle: {
    color: 'white',
    fontFamily: font.Fonts.josefBold,
    fontSize: 18,
  },
});