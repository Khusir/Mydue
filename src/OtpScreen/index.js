import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import OTPTextView from 'react-native-otp-textinput';

const OtpScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          backgroundColor: '#FFC300',
          borderBottomEndRadius: 300,
          borderBottomStartRadius: 300,
          transform: [{scaleX: 1.7}],
          height: Dimensions.get('screen').height / 2.1,
        }}></View>
      <View
        style={{
          top: Dimensions.get('screen').height / -5,
          justifyContent: 'center',
        }}>
        <Image
          source={require('../Splash/assests/logo3.png')}
          style={{
            width: Dimensions.get('screen').width,
            height: Dimensions.get('screen').height / 5,
            alignSelf: 'center',
            position: 'absolute',
          }}
          resizeMode="center"
        />
      </View>
      <View
        style={{
          position: 'absolute',
          justifyContent: 'center',
          alignSelf: 'flex-start',
          top: Dimensions.get('screen').height / 1.85,
          left: Dimensions.get('screen').width / 19,
        }}>
        <Text
          style={{
            color: '#FFC300',
            fontSize: 10,
            fontWeight: '300',
            fontFamily: 'ErasMediumITC',
          }}>
          Mobile Verification
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          justifyContent: 'center',
          alignSelf: 'flex-start',
          top: Dimensions.get('screen').height / 1.8,
          left: Dimensions.get('screen').width / 20,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 18,
            fontWeight: '600',
            fontFamily: 'ErasMediumITC',
          }}>
          Enter your OTP code below
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          position: 'absolute',
          backgroundColor: 'white',
          height: Dimensions.get('screen').height / 12,
          width: Dimensions.get('screen').width / 1.1,
          top: Dimensions.get('screen').height / 1.68,
          alignSelf: 'center',
          justifyContent: 'center',
          elevation: 20,
          borderRadius: 5,
          //shadowColor: 'black',
          //shadowOpacity: 1,
          //shadowOffset: 20,
          //shadowRadius: 100,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'flex-start',
            left: 10,
          }}>
          <OTPTextView
            placeholder="0"
            placeholderTextColor="black"
            inputCount={6}
            tintColor={'transparent'}
            offTintColor={'transparent'}
            inputCellLength={1}
            containerStyle={{
              alignSelf: 'center',
              //flex: 1,
            }}
            textInputStyle={{
              width: 32,
              textAlign: 'center',
              marginHorizontal: 5,
              fontFamily: 'ErasMediumITC',
            }}
          />
        </View>

        <View
          style={{
            backgroundColor: '#FFC300',
            borderRadius: 30,
            height: 45,
            width: 45,
            position: 'absolute',
            alignSelf: 'flex-end',
            right: 10,
          }}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.replace('Name')}>
            <Icon
              name="arrow-forward-outline"
              color="black"
              size={30}
              style={{alignSelf: 'center', top: 6}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          alignSelf: 'center',
          top: Dimensions.get('screen').height / 1.1,
          width: Dimensions.get('screen').width / 1.5,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 12,
            textAlign: 'center',
            fontWeight: '300',
            fontFamily: 'ErasMediumITC',
          }}>
          By Creating on account you agree to our Terms of Service and Privacy
          Policy.
        </Text>
      </View>
    </>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  txInputStyle: {
    width: Dimensions.get('screen').width / 15,
    height: Dimensions.get('screen').height / 15,
    marginHorizontal: 5,
    fontSize: 20,
    //backgroundColor: 'grey',
    color: 'black',
    fontFamily: 'ErasMediumITC',
  },
});
