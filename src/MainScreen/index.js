import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TabNavigator from '../../TabNavigator';

const MainScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'MyDue',
      headerTitleAlign: 'left',
      //headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: '#FFC300',
        fontFamily: 'ErasMediumITC',
      },
      headerTitleStyle: {
        fontFamily: 'ErasMediumITC',
      },
      headerLeft: () => (
        <View>
          <Image
            source={require('./assets/logo2.png')}
            style={{resizeMode: 'contain', height: 40, width: 50}}
          />
        </View>
      ),
      headerRight: () => (
        <View>
          <Icon name="more-vert" color={'black'} size={25} />
        </View>
      ),
    });
  }, [navigation]);
  return (
    <>
      <TabNavigator />
    </>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
