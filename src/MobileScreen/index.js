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
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {API_KEY} from '@env';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {LOGIN_DATA, PROFILE_DATA} from '../../Redux/actionType';

const SignupNum = () => {
  const navigation = useNavigation();
  const [mNum, setMnum] = useState('');
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user_id);
  const name = useSelector(state => state.user_name);
  console.log({user: user});
  console.log({name: name});

  const onSignIn = async () => {
    try {
      if (!mNum) {
        Snackbar.show({
          text: 'please Enter Mobile Number',
          duration: Snackbar.LENGTH_SHORT,
          fontFamily: 'ErasMediumITC',
          backgroundColor: '#FFC300',
          textColor: 'black',
        });
        return;
      } else if (mNum.length !== 10) {
        Snackbar.show({
          text: 'Enter Valid Number',
          duration: Snackbar.LENGTH_SHORT,
          fontFamily: 'ErasMediumITC',
          backgroundColor: '#FFC300',
          textColor: 'black',
        });
        return;
      }
      setVisible(true);
      await axios
        .post(`${API_KEY}/signin`, {
          user_mobile: `${mNum}`,
        })
        .then(response => {
          console.log(response.data);
          if (response.data.status == 200) {
            dispatch({
              type: LOGIN_DATA,
              payload: response.data.data?.[0].user_id,
            });
            dispatch({
              type: PROFILE_DATA,
              payload: response.data.data?.[0].user_name,
            });
            navigation.navigate('Main');
            setVisible(false);
          } else {
            setVisible(false);
            Snackbar.show({
              text: `${response.data.status_message}`,
              duration: Snackbar.LENGTH_SHORT,
              fontFamily: 'ErasMediumITC',
              backgroundColor: '#FFC300',
              textColor: 'black',
            });
            return;
          }
        });
    } catch (e) {
      throw e;
    }
  };

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
          value={mNum}
          onChangeText={text => setMnum(text)}
          //onSubmitEditing={onSignIn}
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
            hitSlop={{bottom: 10}}
            activeOpacity={0.5}
            //onPress={() => navigation.replace('Name')}
            onPress={onSignIn}>
            {visible == false ? (
              <Icon
                name="arrow-forward-outline"
                color="black"
                size={30}
                style={{alignSelf: 'center', top: 6}}
              />
            ) : (
              <ActivityIndicator
                animating={visible}
                color="black"
                size={'small'}
                style={{top: 10}}
                hidesWhenStopped={visible}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          //flex: 1,
          //elevation: 50,
          top: Dimensions.get('screen').height / 4.2,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Name')}
          activeOpacity={0.5}>
          <Text
            style={{
              color: '#FFC100',
              fontFamily: 'ErasMediumITC',
              textDecorationLine: 'underline',
              fontSize: 16,
            }}>
            New User? Create an Account
          </Text>
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
