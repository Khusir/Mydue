import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native-paper';
import {API_KEY} from 'react-native-dotenv';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';
import {useDispatch} from 'react-redux';
import {PROFILE_DATA, REG_DATA} from '../../Redux/actionType';

const NameScreen = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const [name, setName] = useState('');
  const [mNum, setMnum] = useState('');
  const [mail, setMail] = useState('');
  const [bName, setBname] = useState('');

  const dispatch = useDispatch();

  const onSignUp = async () => {
    try {
      if (!name) {
        Snackbar.show({
          text: 'Please Enter Your Name.',
          textColor: 'black',
          backgroundColor: '#FFC300',
          fontFamily: 'ErasMediumITC',
        });
        return;
      } else if (!mNum) {
        Snackbar.show({
          text: 'Please Enter Your Phone Number.',
          textColor: 'black',
          backgroundColor: '#FFC300',
          fontFamily: 'ErasMediumITC',
        });
        return;
      } else if (mNum.length !== 10) {
        Snackbar.show({
          text: 'Please Enter Valid Phone Number.',
          textColor: 'black',
          backgroundColor: '#FFC300',
          fontFamily: 'ErasMediumITC',
        });
        return;
      } else if (!mail) {
        Snackbar.show({
          text: 'Please Enter Your Email.',
          textColor: 'black',
          backgroundColor: '#FFC300',
          fontFamily: 'ErasMediumITC',
        });
        return;
      } else if (!bName) {
        Snackbar.show({
          text: 'Please Enter Your Business Name.',
          textColor: 'black',
          backgroundColor: '#FFC300',
          fontFamily: 'ErasMediumITC',
        });
        return;
      }
      setVisible(true);
      await axios
        .post(`${API_KEY}/signup`, {
          user_name: `${name}`,
          user_phone: `${mNum}`,
          user_email: `${mail}`,
          user_business_name: `${bName}`,
        })
        .then(response => {
          console.log(response.data);
          dispatch({
            type: PROFILE_DATA,
            payload: response.data.data?.[0].user_name,
          });
          navigation.navigate('Main');
          setVisible(false);
        })
        .catch(e => alert(e.message));
    } catch (e) {
      throw e;
    }
  };

  // const onTigger = () => {
  //   setVisible(true);
  //   setTimeout(() => {
  //     navigation.replace('Main');
  //   }, 150);
  // };
  return (
    <ScrollView contentContainerStyle={{paddingBottom: '90%'}}>
      <KeyboardAvoidingView behavior="padding">
        <View
          style={{
            //flex: 1,
            backgroundColor: '#FFC300',
            borderBottomEndRadius: 300,
            borderBottomStartRadius: 300,
            transform: [{scaleX: 1.7}],
            height: Dimensions.get('screen').height / 2.7,

            //top: -100,
          }}></View>
        <View style={{top: Dimensions.get('screen').height / -3.6}}>
          <Image
            source={require('../Splash/assests/logo3.png')}
            style={{
              width: '100%',
              height: Dimensions.get('screen').height / 5,
              //justifyContent: 'center',
              //resizeMode: 'center',
              alignSelf: 'center',
            }}
            resizeMode="center"
          />
        </View>
        {/* Field start from here */}
        <View
          style={{
            position: 'absolute',
            justifyContent: 'center',
            alignSelf: 'flex-start',
            top: Dimensions.get('screen').height / 2.53,
            left: Dimensions.get('screen').width / 20,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              fontWeight: '500',
              fontFamily: 'ErasMediumITC',
            }}>
            Enter Your Name
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            position: 'absolute',
            backgroundColor: 'white',
            height: Dimensions.get('screen').height / 18,
            width: Dimensions.get('screen').width / 1.1,
            top: Dimensions.get('screen').height / 2.35,
            alignSelf: 'center',
            justifyContent: 'center',
            elevation: 20,
            borderRadius: 5,
            shadowColor: 'black',
            //shadowOpacity: 1,
            //shadowOffset: 20,
            //shadowRadius: 100,
          }}>
          <TextInput
            value={name}
            onChangeText={text => setName(text)}
            style={{
              //borderWidth: 0.2,
              //borderColor: 'black',
              color: 'black',
              fontSize: 18,
              fontFamily: 'ErasMediumITC',
            }}
            underlineColorAndroid="transparent"
            keyboardType="visible-password"
          />
        </View>

        <View
          style={{
            position: 'absolute',
            justifyContent: 'center',
            alignSelf: 'flex-start',
            top: Dimensions.get('screen').height / 2,
            left: Dimensions.get('screen').width / 20,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              fontWeight: '500',
              fontFamily: 'ErasMediumITC',
            }}>
            Enter Your Phone Number
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            position: 'absolute',
            backgroundColor: 'white',
            height: Dimensions.get('screen').height / 18,
            width: Dimensions.get('screen').width / 1.1,
            top: Dimensions.get('screen').height / 1.89,
            alignSelf: 'center',
            justifyContent: 'center',
            elevation: 20,
            borderRadius: 5,
            shadowColor: 'black',
            //shadowOpacity: 1,
            //shadowOffset: 20,
            //shadowRadius: 100,
          }}>
          <TextInput
            value={mNum}
            onChangeText={text => setMnum(text)}
            maxLength={10}
            style={{
              //borderWidth: 0.2,
              //borderColor: 'black',
              color: 'black',
              fontSize: 18,
              fontFamily: 'ErasMediumITC',
            }}
            underlineColorAndroid="transparent"
            keyboardType="number-pad"
          />
        </View>

        <View
          style={{
            position: 'absolute',
            justifyContent: 'center',
            alignSelf: 'flex-start',
            top: Dimensions.get('screen').height / 1.65,
            left: Dimensions.get('screen').width / 20,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              fontWeight: '500',
              fontFamily: 'ErasMediumITC',
            }}>
            Enter Your Email
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            position: 'absolute',
            backgroundColor: 'white',
            height: Dimensions.get('screen').height / 18,
            width: Dimensions.get('screen').width / 1.1,
            top: Dimensions.get('screen').height / 1.57,
            alignSelf: 'center',
            justifyContent: 'center',
            elevation: 20,
            borderRadius: 5,
            //shadowColor: 'black',
            //shadowOpacity: 1,
            //shadowOffset: 20,
            //shadowRadius: 100,
          }}>
          <TextInput
            value={mail}
            onChangeText={text => setMail(text)}
            style={{
              //borderWidth: 0.2,
              //borderColor: 'black',
              color: 'black',
              fontSize: 18,
              fontFamily: 'ErasMediumITC',
            }}
            underlineColorAndroid="transparent"
            keyboardType="visible-password"
          />
        </View>

        <View
          style={{
            position: 'absolute',
            justifyContent: 'center',
            alignSelf: 'flex-start',
            top: Dimensions.get('screen').height / 1.4,
            left: Dimensions.get('screen').width / 20,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              fontWeight: '500',
              fontFamily: 'ErasMediumITC',
            }}>
            Enter Your Business Name
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            position: 'absolute',
            backgroundColor: 'white',
            height: Dimensions.get('screen').height / 18,
            width: Dimensions.get('screen').width / 1.1,
            top: Dimensions.get('screen').height / 1.34,
            alignSelf: 'center',
            justifyContent: 'center',
            elevation: 20,
            borderRadius: 5,
            //shadowColor: 'black',
            //shadowOpacity: 1,
            //shadowOffset: 20,
            //shadowRadius: 100,
          }}>
          <TextInput
            value={bName}
            onChangeText={text => setBname(text)}
            style={{
              //borderWidth: 0.2,
              //borderColor: 'black',
              color: 'black',
              fontSize: 18,
              fontFamily: 'ErasMediumITC',
            }}
            underlineColorAndroid="transparent"
            keyboardType="visible-password"
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
            top: Dimensions.get('screen').height / 1.21,
          }}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={onSignUp} //onTigger
          >
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
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default NameScreen;

const styles = StyleSheet.create({});
