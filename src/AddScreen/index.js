import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React, {useLayoutEffect, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import {Button} from 'react-native-elements';
import DropDownPicker from 'react-native-custom-dropdown';

const AddScreen = () => {
  const navigation = useNavigation();

  //const [label, setLabel] = useState(['Choose Category']);
  const label = ['Choose Category'];

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
          autoCapitalize="characters"
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
      <View
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          position: 'absolute',
          bottom: 0,
        }}>
        <Button
          title={'Add Contact'}
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
