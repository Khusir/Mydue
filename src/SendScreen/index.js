import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  PermissionsAndroid,
  Image,
} from 'react-native';
import React, {useLayoutEffect, useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import {Button} from 'react-native-elements';
import DatePicker from 'react-native-date-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {API_KEY} from 'react-native-dotenv';
import axios from 'axios';
import {useSelector} from 'react-redux';
import Snackbar from 'react-native-snackbar';

const SendScreen = ({navigation, route}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [filePath, setFilePath] = useState({});
  const [amt, setAmt] = useState('');
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);
  const [imgFile, setImgFile] = useState('');
  const userId = useSelector(state => state.user_id);

  const onTigger = () => {
    setOpen(!open);
  };

  //console.log({img: filePath});
  //console.log({datePicker: date.toISOString().split('T')[0]});

  const onSending = async () => {
    if (!amt) {
      Snackbar.show({
        text: `Please Enter The Amount. `,
        duration: Snackbar.LENGTH_SHORT,
        fontFamily: 'ErasMediumITC',
        backgroundColor: '#FFC300',
        textColor: 'black',
      });
      return;
    }
    setLoading(true);
    await axios
      .post(`${API_KEY}/createTransaction`, {
        sendfile: `${filePath}`,
        amount: `${amt}`,
        note: `${note}`,
        user_id: `${userId}`,
        date: `${date.toISOString().split('T')[0]}`,
        customer_supplier_id: `${route.params.Cid}`,
        payment_type: `${route.params.type}`,
      })
      .then(response => {
        setLoading(false);
        Snackbar.show({
          text: `${response.data.status_message}`,
          duration: Snackbar.LENGTH_SHORT,
          fontFamily: 'ErasMediumITC',
          backgroundColor: '#FFC300',
          textColor: 'black',
        });
        setAmt('');
        setFilePath({});
        setNote('');
        //console.log(response.data);
      })
      .catch(e => alert(e.message));
  };
  useEffect(() => {}, [date]);

  //console.log({ID: route?.params?.Cid});

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Access Permission',
            message: 'App needs camera permission',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (e) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const captureImage = async type => {
    let options = {
      mediaType: type,
      maxWidth: Dimensions.get('screen').width,
      maxHeight: Dimensions.get('screen').height,
      quality: 1,
      //videoQuality: 'low',
      //durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
      includeBase64: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        //console.log('Response = ', response);

        if (response.didCancel) {
          //alert('User cancelled camera picker');
          Snackbar.show({
            text: 'User cancelled camera picker',
            duration: Snackbar.LENGTH_SHORT,
            fontFamily: 'ErasMediumITC',
            backgroundColor: '#FFC300',
            textColor: 'black',
          });
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          //alert('Camera not available on device');
          Snackbar.show({
            text: 'Camera Option not available on device',
            duration: Snackbar.LENGTH_SHORT,
            fontFamily: 'ErasMediumITC',
            backgroundColor: '#FFC300',
            textColor: 'black',
          });
          return;
        } else if (response.errorCode == 'permission') {
          //alert('Permission not satisfied');
          Snackbar.show({
            text: 'Permission error',
            duration: Snackbar.LENGTH_SHORT,
            fontFamily: 'ErasMediumITC',
            backgroundColor: '#FFC300',
            textColor: 'black',
          });
          return;
        } else if (response.errorCode == 'others') {
          //alert(response.errorMessage);
          Snackbar.show({
            text: `${response.errorMessage}`,
            duration: Snackbar.LENGTH_SHORT,
            fontFamily: 'ErasMediumITC',
            backgroundColor: '#FFC300',
            textColor: 'black',
          });
          return;
        }
        console.log('base64 -> ', response.assets?.[0].base64);
        //console.log('uri -> ', response.uri);
        setImgFile(response.assets?.[0].fileName.split('_').slice(-1, 28));
        setFilePath(response.assets?.[0].base64);
      });
    }
  };

  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 1000,
      maxHeight: 1000,
      quality: 1,
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      //console.log('Response = ', response);

      if (response.didCancel) {
        //alert('User cancelled camera picker');
        Snackbar.show({
          text: 'User cancelled Gallery Option',
          duration: Snackbar.LENGTH_SHORT,
          fontFamily: 'ErasMediumITC',
          backgroundColor: '#FFC300',
          textColor: 'black',
        });
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        //alert('Camera not available on device');
        Snackbar.show({
          text: 'Gallery not available on device.',
          duration: Snackbar.LENGTH_SHORT,
          fontFamily: 'ErasMediumITC',
          backgroundColor: '#FFC300',
          textColor: 'black',
        });
        return;
      } else if (response.errorCode == 'permission') {
        //alert('Permission not satisfied');
        Snackbar.show({
          text: 'Permission error',
          duration: Snackbar.LENGTH_SHORT,
          fontFamily: 'ErasMediumITC',
          backgroundColor: '#FFC300',
          textColor: 'black',
        });
        return;
      } else if (response.errorCode == 'others') {
        //alert(response.errorMessage);
        Snackbar.show({
          text: `${response.errorMessage}`,
          duration: Snackbar.LENGTH_SHORT,
          fontFamily: 'ErasMediumITC',
          backgroundColor: '#FFC300',
          textColor: 'black',
        });
        return;
      }
      //console.log('base64 -> ', response.base64);
      //console.log('uri -> ', response.uri);
      //console.log('base64 ->', response.assets?.[0].fileName);
      setFilePath(response.assets?.[0].base64);
      setImgFile(response.assets?.[0].fileName.split('_').slice(-1, 28));
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${route?.params?.Cname}`,
      headerStyle: {
        backgroundColor: '#FFC300',
        fontFamily: 'ErasMediumITC',
      },
      headerTitleAlign: 'left',
      headerTitleStyle: {
        fontFamily: 'ErasMediumITC',
      },
      headerLeft: () => (
        <View
          style={{
            backgroundColor: 'black',
            height: 35,
            width: 35,
            borderRadius: 20,
            marginHorizontal: 10,
            //justifyContent: 'center',
            left: -5,
            top: 3,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="arrow-back-outline"
              size={25}
              color={'white'}
              style={{justifyContent: 'center', alignSelf: 'center', top: 4.5}}
            />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <>
          <View
            style={{
              alignSelf: 'center',
              position: 'absolute',
              right: Dimensions.get('screen').width / 1.85,
              top: 22,
            }}>
            {/* <Text style={{color: 'black', fontFamily: 'ErasMediumITC'}}>
              {route?.params?.Cnumber}
            </Text> */}
          </View>
          <View>
            <TouchableOpacity>
              <Icon2 name="more-vert" color={'black'} size={25} />
            </TouchableOpacity>
          </View>
        </>
      ),
    });
  }, [navigation]);
  return (
    <>
      {loading == false ? (
        <>
          <View
            style={{
              flex: 1,
              position: 'absolute',
              backgroundColor: 'white',
              height: Dimensions.get('screen').height / 17,
              width: Dimensions.get('screen').width / 1.3,
              top: Dimensions.get('screen').height / 15,
              alignSelf: 'center',
              justifyContent: 'center',
              elevation: 10,
              borderRadius: 5,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{justifyContent: 'center', marginHorizontal: 19.5}}>
                <Icon2 name="upload-file" color={'black'} size={25} />
              </View>
              <View
                style={{
                  borderWidth: 0.5,
                  height: 25,
                  alignSelf: 'center',
                }}></View>

              <TouchableOpacity onPress={() => chooseFile('photo')}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    fontFamily: 'ErasMediumITC',
                    //left: 25,
                    marginHorizontal: 25,
                    top: 3,
                  }}>
                  Upload Bill
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              top: 105,
              flexDirection: 'row',
            }}>
            <View
              style={{
                borderWidth: 0.2,
                borderColor: 'black',
                width: 50,
                height: 0.3,
                alignSelf: 'center',
                marginHorizontal: 10,
              }}></View>
            <Text style={{color: 'black', fontFamily: 'ErasMediumITC'}}>
              Or
            </Text>
            <View
              style={{
                borderWidth: 0.2,
                borderColor: 'black',
                width: 50,
                height: 0.3,
                alignSelf: 'center',
                marginHorizontal: 10,
              }}></View>
          </View>

          <View
            style={{
              flex: 1,
              position: 'absolute',
              backgroundColor: 'white',
              height: Dimensions.get('screen').height / 17,
              width: Dimensions.get('screen').width / 1.3,
              top: Dimensions.get('screen').height / 6,
              alignSelf: 'center',
              justifyContent: 'center',
              elevation: 10,
              borderRadius: 5,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{justifyContent: 'center', marginHorizontal: 19.5}}>
                <Icon name="camera-outline" color={'black'} size={25} />
              </View>
              <View
                style={{
                  borderWidth: 0.5,
                  height: 25,
                  alignSelf: 'center',
                }}></View>

              <TouchableOpacity onPress={() => captureImage('photo')}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    fontFamily: 'ErasMediumITC',
                    //left: 25,
                    marginHorizontal: 25,
                    top: 3,
                  }}>
                  Take Photo
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              alignSelf: 'center',
              position: 'absolute',
              top: Dimensions.get('screen').height / 4.3,
            }}>
            <Text style={{color: 'black', fontSize: 11}}>{imgFile}</Text>
          </View>

          <View
            style={{
              flex: 1,
              position: 'absolute',
              backgroundColor: 'white',
              height: Dimensions.get('screen').height / 17,
              width: Dimensions.get('screen').width / 1.3,
              top: Dimensions.get('screen').height / 3.5,
              alignSelf: 'center',
              justifyContent: 'center',
              elevation: 10,
              borderRadius: 5,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{justifyContent: 'center', marginHorizontal: 25}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 25,
                    fontFamily: 'ErasMediumITC',
                  }}>
                  ₹
                </Text>
              </View>
              <View
                style={{
                  borderWidth: 0.5,
                  height: 25,
                  alignSelf: 'center',
                }}></View>
              <TextInput
                value={amt.toString()}
                onChangeText={text => setAmt(text)}
                placeholder="Amount"
                placeholderTextColor="grey"
                selectionColor="black"
                keyboardType="number-pad"
                maxLength={10}
                style={{
                  //borderWidth: 0.2,
                  left: 20,
                  width: Dimensions.get('screen').width / 1.7,
                  color: 'black',
                  fontSize: 18,
                  fontFamily: 'ErasMediumITC',
                  letterSpacing: 5,
                }}
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              position: 'absolute',
              backgroundColor: 'white',
              height: Dimensions.get('screen').height / 17,
              width: Dimensions.get('screen').width / 1.3,
              top: Dimensions.get('screen').height / 2.8,
              alignSelf: 'center',
              justifyContent: 'center',
              elevation: 10,
              borderRadius: 5,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{justifyContent: 'center', marginHorizontal: 12}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    fontFamily: 'ErasMediumITC',
                  }}>
                  Date
                </Text>
              </View>
              <View
                style={{
                  borderWidth: 0.5,
                  height: 25,
                  alignSelf: 'center',
                }}></View>
              <View style={{justifyContent: 'center', left: 20}}>
                <TouchableOpacity onPress={onTigger}>
                  <Text
                    style={{
                      color: 'grey',
                      fontSize: 18,
                      fontFamily: 'ErasMediumITC',
                    }}>
                    {date.toDateString('en-us')}
                  </Text>
                  {/* //toISOString().split('T')[0] */}
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <DatePicker
            modal
            mode="date"
            date={date}
            open={open}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            maximumDate={new Date()}
            onCancel={() => {
              setOpen(false);
            }}
            theme="auto"
            title="Select Date"
            androidVariant="nativeAndroid"
            locale="en-us"
          />

          <View
            style={{
              flex: 1,
              position: 'absolute',
              backgroundColor: '#FFC300',
              height: Dimensions.get('screen').height / 13,
              width: Dimensions.get('screen').width / 1.29,
              //top: Dimensions.get('screen').height / 15,
              //alignSelf: 'center',
              justifyContent: 'center',
              elevation: 5,

              bottom: Dimensions.get('screen').height / 300,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  backgroundColor: 'white',
                  height: 45,
                  //elevation: 5,
                  width: Dimensions.get('screen').width / 1.4,
                  justifyContent: 'center',
                  left: 15,
                  borderRadius: 5,
                }}>
                <TextInput
                  value={note}
                  onChangeText={text => setNote(text)}
                  placeholder="Add note"
                  placeholderTextColor="grey"
                  style={{
                    color: 'black',
                    fontSize: 15,
                    fontFamily: 'ErasMediumITC',
                  }}
                />
              </View>

              <View
                style={{
                  position: 'absolute',
                  bottom: -7.5,
                  justifyContent: 'center',
                  alignSelf: 'flex-end',
                  left: Dimensions.get('screen').width / 1.25,
                }}>
                <Button
                  onPress={onSending}
                  title="Save"
                  buttonStyle={{
                    height: 60,
                    width: Dimensions.get('screen').width / 5.1,
                    backgroundColor: '#FFC300',
                  }}
                  titleStyle={{fontFamily: 'ErasMediumITC'}}
                />
              </View>
            </View>
          </View>
        </>
      ) : (
        <View
          style={{
            backgroundColor: 'white',
            elevation: 20,
            height: 90,
            width: 100,
            alignSelf: 'center',
            position: 'absolute',
            top: Dimensions.get('screen').height / 4,
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <View style={{flexDirection: 'column'}}>
            <Image
              source={require('../CustScreen/assets/loading.gif')}
              style={{height: 80, width: 100}}
              resizeMode="contain"
            />
            <View style={{alignSelf: 'center', top: -15}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontFamily: 'ErasMediumITC',
                }}>
                Loading...
              </Text>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default SendScreen;

const styles = StyleSheet.create({});
