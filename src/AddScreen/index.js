import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
} from 'react-native';
import React, {useLayoutEffect, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import {Button} from 'react-native-elements';
import DropDownPicker from 'react-native-custom-dropdown';
import axios from 'axios';
import {API_KEY} from '@env';
import Snackbar from 'react-native-snackbar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';

const AddScreen = () => {
  const navigation = useNavigation();
  const [mName, setMname] = useState('');
  const [mNum, setMnum] = useState('');
  const [drop, setDrop] = useState('');
  const [userId, setUserId] = useState('');
  const user = useSelector(state => state.user_id);
  const [loading, setLoading] = useState(false);
  //console.log(drop);

  // const getData = async () => {
  //   // get Data from Storage
  //   try {
  //     const data = await AsyncStorage.getItem('userId');
  //     if (data !== undefined) {
  //       //console.log(data);
  //       setUserId(data);
  //       return data;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    //getData();
  }, []);

  const onAddContact = async () => {
    try {
      if (!mName) {
        Snackbar.show({
          text: 'Please Enter Name.',
          textColor: 'black',
          backgroundColor: '#FFC300',
          fontFamily: 'ErasMediumITC',
        });
        return;
      } else if (!mNum) {
        Snackbar.show({
          text: 'Please Enter Contact Number.',
          textColor: 'black',
          backgroundColor: '#FFC300',
          fontFamily: 'ErasMediumITC',
        });
        return;
      } else if (mNum.length !== 10) {
        Snackbar.show({
          text: 'Please Enter Valid Number.',
          textColor: 'black',
          backgroundColor: '#FFC300',
          fontFamily: 'ErasMediumITC',
        });
        return;
      } else if (!drop) {
        Snackbar.show({
          text: 'Please Choose Category.',
          textColor: 'black',
          backgroundColor: '#FFC300',
          fontFamily: 'ErasMediumITC',
        });
        return;
      }
      setLoading(true);
      await axios
        .post(`${API_KEY}/createCustomerSupplier`, {
          //user_id: `${userId}`,
          user_id: `${user}`,
          customer_name: `${mName}`,
          customer_mobile: `${mNum}`,
          customer_type: `${drop}`,
        })
        .then(response => {
          console.log(response.data);
          setLoading(false);
          if (response.data.status == 200) {
            Snackbar.show({
              text: 'New Contact Added Successfully.',
              textColor: 'black',
              backgroundColor: '#FFC300',
              fontFamily: 'ErasMediumITC',
            });
            setMname('');
            setMnum('');
            setDrop(null);
          } else {
            Snackbar.show({
              text: 'Contact Already added.',
              textColor: 'black',
              backgroundColor: '#FFC300',
              fontFamily: 'ErasMediumITC',
            });
            setMname('');
            setMnum('');
            setDrop(null);
          }
        })
        .catch(e => alert(e.message));
    } catch (e) {
      throw e;
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Add Contact',
      headerStyle: {backgroundColor: '#FFC300'},
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
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Main')}>
            <Icon1
              name="arrow-back-outline"
              size={25}
              color={'white'}
              style={{justifyContent: 'center', alignSelf: 'center', top: 4.5}}
            />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View>
          <Icon2 name="more-vert" color={'black'} size={25} />
        </View>
      ),
    });
  }, [navigation]);
  return (
    <>
      <View
        style={{
          justifyContent: 'center',
          alignSelf: 'flex-start',
          left: 20,
          top: 20,
        }}>
        <Text
          style={{color: 'black', fontSize: 18, fontFamily: 'ErasMediumITC'}}>
          Add Name
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          position: 'absolute',
          backgroundColor: 'white',
          height: Dimensions.get('screen').height / 15,
          width: Dimensions.get('screen').width / 1.1,
          top: 50,
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
          style={{justifyContent: 'center', left: 10, position: 'absolute'}}>
          <Icon1 name="person" color={'grey'} size={20} />
        </View>

        <TextInput
          editable={loading == false ? true : false}
          value={mName}
          onChangeText={text => setMname(text)}
          style={{
            justifyContent: 'center',
            alignSelf: 'flex-start',
            left: 35,
            width: Dimensions.get('screen').width / 1.25,
            color: 'black',
            fontSize: 18,
            letterSpacing: 2,
            fontFamily: 'ErasMediumITC',
          }}
          keyboardType="visible-password"
          //autoCapitalize="characters"
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignSelf: 'flex-start',
          left: 20,
          top: 100,
        }}>
        <Text
          style={{color: 'black', fontSize: 18, fontFamily: 'ErasMediumITC'}}>
          Add Contact Number
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          position: 'absolute',
          backgroundColor: 'white',
          height: Dimensions.get('screen').height / 15,
          width: Dimensions.get('screen').width / 1.1,
          top: 150,
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
          style={{justifyContent: 'center', left: 10, position: 'absolute'}}>
          <Icon1 name="call" color={'grey'} size={20} />
        </View>
        <TextInput
          editable={loading == false ? true : false}
          value={mNum}
          onChangeText={text => setMnum(text)}
          style={{
            justifyContent: 'center',
            alignSelf: 'flex-start',
            left: 35,
            width: Dimensions.get('screen').width / 1.25,
            color: 'black',
            fontSize: 18,
            letterSpacing: 10,
            fontFamily: 'ErasMediumITC',
          }}
          maxLength={10}
          keyboardType="number-pad"
        />
      </View>
      <View style={{alignSelf: 'center', top: 190}}>
        <DropDownPicker
          disabled={loading == false ? false : true}
          defaultValue={drop}
          onChangeItem={item => setDrop(item.value)}
          items={[
            {label: 'Customer', value: 'customer'},
            {label: 'Supplier', value: 'supplier'},
          ]}
          placeholder="Choose Category"
          containerStyle={{
            height: 50,
            width: Dimensions.get('screen').width / 1.1,
            elevation: 20,
            backgroundColor: 'white',
            borderRadius: 10,
          }}
          style={{
            backgroundColor: 'white',
            borderColor: 'white',
            borderRadius: 10,
          }}
          itemStyle={{
            justifyContent: 'flex-start',
          }}
          dropDownStyle={{
            backgroundColor: '#D1D1D1',
            borderColor: '#D1D1D1',
          }}
          placeholderStyle={{color: 'black', fontFamily: 'ErasMediumITC'}}
          labelStyle={{
            fontFamily: 'ErasMediumITC',
            color: 'black',
            fontSize: 15,
          }}
        />
      </View>
      <View>
        {loading == true ? (
          <Image
            source={require('../CustScreen/assets/loading.gif')}
            style={{
              height: 100,
              width: 150,
              alignSelf: 'center',
              top: 200,
            }}
            resizeMode="contain"
          />
        ) : null}
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          position: 'absolute',
          bottom: 0,
        }}>
        <Button
          title={'Add Contact'}
          disabled={loading == true ? true : false}
          onPress={onAddContact}
          buttonStyle={{backgroundColor: '#FFC300', height: 50}}
          titleStyle={{
            color: 'black',
            fontSize: 18,
            fontFamily: 'ErasMediumITC',
          }}
          containerStyle={{width: Dimensions.get('screen').width}}
        />
      </View>
    </>
  );
};

export default AddScreen;

const styles = StyleSheet.create({});
