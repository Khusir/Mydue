import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const SignupNum = () => {
  const navigation = useNavigation();

  return (
    <>
      <View
        style={{
          height: Dimensions.get('screen').height / 2.1,
          backgroundColor: '#FFC300',
          borderBottomEndRadius: 300,
          borderBottomStartRadius: 300,
          transform: [{scaleX: 1.7}],
        }}></View>
      <View
        style={{
          top: Dimensions.get('screen').height / -5,
          justifyContent: 'center',
        }}>
        <Image
          source={require('../Splash/assests/logo3.png')}
          style={{
            width: 350,
            height: 150,
            position: 'absolute',
            alignSelf: 'center',
          }}
          resizeMode="center"
        />
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
          Enter your mobile number
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
            position: 'absolute',
            flexDirection: 'row',
            //alignSelf: 'flex-start',
            left: 15,
          }}>
          <Text
            style={{color: 'black', fontFamily: 'ErasMediumITC', fontSize: 17}}>
            +91
          </Text>
          <Icon name="chevron-down-outline" color="black" size={18} />
        </View>
        <TextInput
          //value={mob}
          placeholder="Mobile Number"
          placeholderTextColor={'grey'}
          keyboardType="number-pad"
          maxLength={10}
          //textAlign="center"
          style={{
            width: Dimensions.get('screen').width / 2,
            alignSelf: 'center',
            color: 'black',
            fontSize: 18,
            //fontStyle: 'italic',
            fontFamily: 'ErasMediumITC',
          }}
        />

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
          //marginHorizontal: 10,
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
          Policy
        </Text>
      </View>
    </>
  );
};

export default SignupNum;

const styles = StyleSheet.create({});
