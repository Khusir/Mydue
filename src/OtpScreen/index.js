import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useRef} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-custom-dropdown';
import {useNavigation} from '@react-navigation/native';

const OtpScreen = () => {
  const navigation = useNavigation();
  const input_ref1 = useRef();
  const input_ref2 = useRef();
  const input_ref3 = useRef();
  const input_ref4 = useRef();
  const input_ref5 = useRef();
  const input_ref6 = useRef();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFC300',
          borderBottomEndRadius: 300,
          borderBottomStartRadius: 300,
          transform: [{scaleX: 1.7}],
          top: -20,
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
          top: Dimensions.get('screen').height / 1.8,
          left: Dimensions.get('screen').width / 19,
        }}>
        <Text style={{color: '#FFC300', fontSize: 10, fontWeight: '300'}}>
          Mobile Verification
        </Text>
      </View>
      <View
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
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            alignSelf: 'flex-start',
            left: Dimensions.get('screen').width / 9,
          }}>
          <View>
            <TextInput
              ref={input_ref1}
              placeholderTextColor={'black'}
              placeholder="0"
              style={styles.txInputStyle}
              maxLength={1}
              textAlign="center"
              onChangeText={() => input_ref2.current.focus()}
              keyboardType="number-pad"
            />
          </View>
          <View>
            <TextInput
              placeholderTextColor={'black'}
              placeholder="0"
              style={styles.txInputStyle}
              maxLength={1}
              textAlign="center"
              ref={input_ref2}
              onChangeText={() => input_ref3.current.focus()}
              keyboardType="number-pad"
              onKeyPress={({nativeEvent}) =>
                nativeEvent.key === 'Backspace'
                  ? input_ref1.current.focus()
                  : null
              }
            />
          </View>
          <View>
            <TextInput
              placeholderTextColor={'black'}
              placeholder="0"
              style={styles.txInputStyle}
              maxLength={1}
              textAlign="center"
              ref={input_ref3}
              onChangeText={() => input_ref4.current.focus()}
              keyboardType="number-pad"
              onKeyPress={({nativeEvent}) =>
                nativeEvent.key === 'Backspace'
                  ? input_ref2.current.focus()
                  : null
              }
            />
          </View>
          <View>
            <TextInput
              placeholderTextColor={'black'}
              placeholder="0"
              style={styles.txInputStyle}
              maxLength={1}
              textAlign="center"
              ref={input_ref4}
              onChangeText={() => input_ref5.current.focus()}
              keyboardType="number-pad"
              onKeyPress={({nativeEvent}) =>
                nativeEvent.key === 'Backspace'
                  ? input_ref3.current.focus()
                  : null
              }
            />
          </View>
          <View>
            <TextInput
              placeholderTextColor={'black'}
              placeholder="0"
              style={styles.txInputStyle}
              maxLength={1}
              textAlign="center"
              ref={input_ref5}
              onChangeText={() => input_ref6.current.focus()}
              keyboardType="number-pad"
              onKeyPress={({nativeEvent}) =>
                nativeEvent.key === 'Backspace'
                  ? input_ref4.current.focus()
                  : null
              }
            />
          </View>
          <View>
            <TextInput
              placeholderTextColor={'black'}
              placeholder="0"
              style={styles.txInputStyle}
              maxLength={1}
              textAlign="center"
              ref={input_ref6}
              keyboardType="number-pad"
              onKeyPress={({nativeEvent}) =>
                nativeEvent.key === 'Backspace'
                  ? input_ref5.current.focus()
                  : null
              }
            />
          </View>
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
            onPress={() => navigation.navigate('Name')}>
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
          }}>
          By Creating on account you agree to our Terms of Service and Privacy
          Policy.
        </Text>
      </View>
    </View>
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
  },
});
