import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const NameScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFC300',
          borderBottomEndRadius: 300,
          borderBottomStartRadius: 300,
          transform: [{scaleX: 1.7}],
          top: -100,
        }}></View>
      <View style={{flex: 1, top: Dimensions.get('screen').height / -2.5}}>
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

      {/* <View
        style={{
          position: 'absolute',
          justifyContent: 'center',
          alignSelf: 'flex-start',
          top: Dimensions.get('screen').height / 1.75,
          left: Dimensions.get('screen').width / 20,
        }}>
        <Text style={{color: 'black', fontSize: 18, fontWeight: '600'}}>
          Enter your OTP code below
        </Text>
      </View> */}
      <View
        style={{
          position: 'absolute',
          justifyContent: 'center',
          alignSelf: 'flex-start',
          top: Dimensions.get('screen').height / 2.4,
          left: Dimensions.get('screen').width / 20,
        }}>
        <Text style={{color: 'black', fontSize: 15, fontWeight: '500'}}>
          Enter your business name
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          position: 'absolute',
          backgroundColor: 'white',
          height: Dimensions.get('screen').height / 18,
          width: Dimensions.get('screen').width / 1.1,
          top: Dimensions.get('screen').height / 2.2,
          alignSelf: 'center',
          justifyContent: 'center',
          elevation: 20,
          borderRadius: 5,
          shadowColor: 'black',
          shadowOpacity: 1,
          shadowOffset: 20,
          shadowRadius: 100,
        }}>
        <TextInput
          style={{
            //borderWidth: 0.2,
            //borderColor: 'black',
            color: 'black',
            fontSize: 18,
          }}
        />
      </View>

      <View
        style={{
          position: 'absolute',
          justifyContent: 'center',
          alignSelf: 'flex-start',
          top: Dimensions.get('screen').height / 1.87,
          left: Dimensions.get('screen').width / 20,
        }}>
        <Text style={{color: 'black', fontSize: 15, fontWeight: '500'}}>
          Enter your name
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          position: 'absolute',
          backgroundColor: 'white',
          height: Dimensions.get('screen').height / 18,
          width: Dimensions.get('screen').width / 1.1,
          top: Dimensions.get('screen').height / 1.75,
          alignSelf: 'center',
          justifyContent: 'center',
          elevation: 20,
          borderRadius: 5,
          shadowColor: 'black',
          shadowOpacity: 1,
          shadowOffset: 20,
          shadowRadius: 100,
        }}>
        <TextInput
          style={{
            //borderWidth: 0.2,
            //borderColor: 'black',
            color: 'black',
            fontSize: 18,
          }}
        />
      </View>

      <View
        style={{
          position: 'absolute',
          justifyContent: 'center',
          alignSelf: 'flex-start',
          top: Dimensions.get('screen').height / 1.53,
          left: Dimensions.get('screen').width / 20,
        }}>
        <Text style={{color: 'black', fontSize: 15, fontWeight: '500'}}>
          Enter your email id
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          position: 'absolute',
          backgroundColor: 'white',
          height: Dimensions.get('screen').height / 18,
          width: Dimensions.get('screen').width / 1.1,
          top: Dimensions.get('screen').height / 1.45,
          alignSelf: 'center',
          justifyContent: 'center',
          elevation: 20,
          borderRadius: 5,
          shadowColor: 'black',
          shadowOpacity: 1,
          shadowOffset: 20,
          shadowRadius: 100,
        }}>
        <TextInput
          style={{
            //borderWidth: 0.2,
            //borderColor: 'black',
            color: 'black',
            fontSize: 18,
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
          alignSelf: 'center',
          //right: 10,
          top: Dimensions.get('screen').height / 1.25,
        }}>
        <TouchableOpacity activeOpacity={0.5}>
          <Icon
            name="arrow-forward-outline"
            color="black"
            size={30}
            style={{alignSelf: 'center', top: 6}}
          />
        </TouchableOpacity>
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
          }}>
          By Creating on account you agree to our Terms of Service and Privacy
          Policy
        </Text>
      </View>
    </View>
  );
};

export default NameScreen;

const styles = StyleSheet.create({});
