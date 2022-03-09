import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import CustomerScreen from './src/CustScreen/index';
import SupplierScreen from './src/SplScreen/index';

const Tabs = createMaterialTopTabNavigator();
const TabNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Tabs.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontFamily: 'ErasMediumITC', fontSize: 13},
          swipeEnabled: false,
          tabBarItemStyle: {
            backgroundColor: '#FFC300',
            // borderStartWidth: 0.2,
            elevation: 0,
            shadowOffset: 0,
            //height: 40,
            //borderWidth: 0.2,
          },
          tabBarIndicatorStyle: {
            backgroundColor: 'black',
            width: Dimensions.get('screen').width / 5,
            justifyContent: 'center',
            //alignSelf: 'center',
            //alignItems: 'center',
            //alignContent: 'center',
            left: 55,
            flex: 1,
            //position: 'absolute',
          },

          tabBarIndicatorContainerStyle: {
            zIndex: 100,
          },
        }}>
        <Tabs.Screen name="Customer" component={CustomerScreen} />
        <Tabs.Screen name="Supplier" component={SupplierScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
