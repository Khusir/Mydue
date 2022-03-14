import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import {Button} from 'react-native-elements';

const SendScreen = ({navigation, route}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${route.params.Cname}`,
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
            <Text style={{color: 'black', fontFamily: 'ErasMediumITC'}}>
              {route.params.Cnumber}
            </Text>
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
          //shadowColor: 'black',
          //shadowOpacity: 1,
          //shadowOffset: 20,
          //shadowRadius: 100,
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
          top: Dimensions.get('screen').height / 6,
          alignSelf: 'center',
          justifyContent: 'center',
          elevation: 10,
          borderRadius: 5,
          //shadowColor: 'black',
          //shadowOpacity: 1,
          //shadowOffset: 20,
          //shadowRadius: 100,
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
            <Text
              style={{
                color: 'grey',
                fontSize: 18,
                fontFamily: 'ErasMediumITC',
              }}>
              {moment().format('MMMM DD ,YYYY')}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          position: 'absolute',
          backgroundColor: 'white',
          height: Dimensions.get('screen').height / 17,
          width: Dimensions.get('screen').width / 1.3,
          top: Dimensions.get('screen').height / 3.75,
          alignSelf: 'center',
          justifyContent: 'center',
          elevation: 10,
          borderRadius: 5,
          //shadowColor: 'black',
          //shadowOpacity: 1,
          //shadowOffset: 20,
          //shadowRadius: 100,
        }}>
        <View style={{justifyContent: 'center', alignSelf: 'center'}}>
          <TouchableOpacity>
            <Text
              style={{
                color: 'black',
                fontFamily: 'ErasMediumITC',
                fontSize: 18,
              }}>
              Add Bills
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
          //borderRadius: 5,
          //shadowColor: 'black',
          //shadowOpacity: 1,
          //shadowOffset: 20,
          //shadowRadius: 100,
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
              placeholder="Add note"
              placeholderTextColor="grey"
              style={{
                color: 'black',
                fontSize: 15,
                fontFamily: 'ErasMediumITC',
              }}
            />

            {/* <View
              style={{
                borderWidth: 2.5,
                height: 60,
                alignSelf: 'flex-end',
                position: 'absolute',
                borderColor: 'white',
                right: -10,
              }}></View> */}
          </View>
          {/* <View style={{justifyContent: 'center'}}>
            <TouchableOpacity>
              <Text style={{color: 'black', fon}}>Save</Text>
            </TouchableOpacity>
          </View> */}
          <View
            style={{
              position: 'absolute',
              bottom: -7.5,
              justifyContent: 'center',
              alignSelf: 'flex-end',
              left: Dimensions.get('screen').width / 1.25,
            }}>
            <Button
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
  );
};

export default SendScreen;

const styles = StyleSheet.create({});
