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
import DropDownPicker from 'react-native-custom-dropdown';
import Icon2 from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const SignupNum = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFC300',
          borderBottomEndRadius: 300,
          borderBottomStartRadius: 300,
          transform: [{scaleX: 1.6}],
        }}></View>
      <View style={{flex: 1, top: Dimensions.get('screen').height / -3}}>
        <Image
          source={require('../Splash/assests/logo3.png')}
          style={{
            width: '100%',
            height: '40%',
            justifyContent: 'center',
            resizeMode: 'center',
            alignSelf: 'center',
          }}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          justifyContent: 'center',
          alignSelf: 'flex-start',
          top: Dimensions.get('screen').height / 1.75,
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
          top: Dimensions.get('screen').height / 1.6,
          alignSelf: 'center',
          justifyContent: 'center',
          elevation: 20,
          borderRadius: 5,
          shadowColor: 'black',
          shadowOpacity: 1,
          shadowOffset: 20,
          shadowRadius: 100,
        }}>
        <View style={{position: 'absolute'}}>
          <DropDownPicker
            labelStyle={{
              color: 'black',
              fontSize: 15,
              fontFamily: 'ErasMediumITC',
            }}
            items={[
              {
                label: '+91',
                value: '+91',
              },
              {
                label: '+1',
                value: '+1',
              },
            ]}
            // /defaultValue={'+91'}
            containerStyle={{height: 50, width: 70}}
            style={{backgroundColor: 'white', borderColor: 'white'}}
            itemStyle={{
              justifyContent: 'flex-start',
              left: 5,
            }}
            dropDownStyle={{
              backgroundColor: 'white',
              borderColor: 'white',
              elevation: 25,
              shadowColor: 'black',
              shadowOpacity: 1,
              shadowRadius: 100,
            }}
            placeholder="+91"
          />
        </View>
        <TextInput
          placeholder="Mobile Number"
          placeholderTextColor={'grey'}
          keyboardType="number-pad"
          maxLength={10}
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
            onPress={() => navigation.navigate('Otp')}>
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
    </View>
  );
};

export default SignupNum;

const styles = StyleSheet.create({});
