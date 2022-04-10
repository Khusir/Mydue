import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import {Button} from 'react-native-elements';
import Buttons from '../../components/Buttons';
import History from '../../components/History';

const ChatScreenS = ({route, navigation}) => {
  const ID = route?.params?.supplierId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${route?.params?.name}`,
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
          <TouchableOpacity onPress={() => navigation.navigate('Main')}>
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
              {route?.params?.number}
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
  console.log({ID: route.params.supplierId});
  return (
    <>
      <View
        style={{
          flex: 1,
          position: 'absolute',
          backgroundColor: 'white',
          height: Dimensions.get('screen').height / 15,
          width: Dimensions.get('screen').width,
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
            backgroundColor: '#F2F5C8',
            height: 40,
            width: Dimensions.get('screen').width / 1.1,
            alignSelf: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 10,
            }}>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'ErasMediumITC',
                }}>
                Due Balance
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'ErasMediumITC',
                }}>
                ₹ 00.00
              </Text>
            </View>
          </View>
        </View>
      </View>
      <History
        viewStyle={styles.viewStyle}
        containerStyle={styles.containerStyle}
        timestampView={styles.timestampView}
        timestampText={styles.timestampText}
        viewStyle1={styles.viewStyle1}
        viewText1={styles.viewText1}
      />
      <View style={{flexDirection: 'row'}}>
        <View style={{alignSelf: 'flex-end', backgroundColor: '#332FD0'}}>
          <Buttons
            title={'Add Bills'}
            buttonStyle={styles.buttonStyle}
            iconName="arrow-up-outline"
            onclick={() =>
              navigation.navigate('Send', {
                Cname: route?.params?.name,
                Cnumber: route?.params?.number,
                Cid: ID,
              })
            }
          />
        </View>
        <View style={{alignSelf: 'flex-start', backgroundColor: 'red'}}>
          <Buttons
            title={'Payment'}
            buttonStyle={styles.buttonStyle2}
            iconName="arrow-up-outline"
            onclick={() =>
              navigation.navigate('Send', {
                Cname: route?.params?.name,
                Cnumber: route?.params?.number,
                Cid: route?.params?.supplierId,
              })
            }
          />
        </View>
      </View>
    </>
  );
};

export default ChatScreenS;

const styles = StyleSheet.create({
  buttonStyle: {
    height: 50,
    width: Dimensions.get('screen').width / 2,
    backgroundColor: '#332FD0',
  },
  buttonStyle2: {
    height: 50,
    width: Dimensions.get('screen').width / 2,
    backgroundColor: 'red',
    borderRadius: 0,
  },
  viewStyle: {
    flex: 1,
    top: 53,
  },
  containerStyle: {
    paddingTop: 10,
    paddingBottom: 50,
  },
  timestampView: {
    padding: 10,
    backgroundColor: '#D1D1D1',
    alignSelf: 'center',
    borderRadius: 20,
    //marginRight: 5,
    marginBottom: 20,
    // maxWidth: '80%',
    //position: 'relative',
    borderColor: 'black',
    //borderWidth: 0.1,
    //left: 5,
    //elevation: 0,
    width: Dimensions.get('screen').width / 4.5,
    marginHorizontal: 10,
    height: 31,
  },
  timestampText: {
    color: 'black',
    fontSize: 9,
    textAlign: 'center',
  },
  viewStyle1: {
    padding: 10,
    backgroundColor: '#ECECEC',
    alignSelf: 'flex-start',
    borderRadius: 5,
    //marginRight: 5,
    marginBottom: 20,
    // maxWidth: '80%',
    //position: 'relative',
    borderColor: 'black',
    //borderWidth: 0.1,
    //left: 5,
    elevation: 5,
    width: Dimensions.get('screen').width / 2,
    marginHorizontal: 10,
  },
  viewText1: {
    color: 'green',
    left: 10,
    fontSize: 18,
    fontFamily: 'ErasMediumITC',
  },
});
