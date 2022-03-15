import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/Splash/index';
import 'react-native-gesture-handler';
import SignupNum from './src/MobileScreen/index';
import OtpScreen from './src/OtpScreen/index';
import NameScreen from './src/NameScreen/index';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CustomerScreen from './src/CustScreen/index';
import SupplierScreen from './src/SplScreen/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AddScreen from './src/AddScreen/index';
import ProfileScreen from './src/ProfileScreen/index';
import ChatScreen from './src/ChatScreen/index';
import SendScreen from './src/SendScreen/index';
import ChatScreenS from './src/ChatScreen/indexS';

const Stack = createNativeStackNavigator();
const Tabs = createMaterialTopTabNavigator();

const Routes = () => {
  function Home() {
    return (
      <Tabs.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontFamily: 'ErasMediumITC', fontSize: 13},
          swipeEnabled: false,
          tabBarItemStyle: {
            backgroundColor: '#FFC300',
            elevation: 0,
            shadowOffset: 0,
          },
          tabBarIndicatorStyle: {
            backgroundColor: 'black',
            width: Dimensions.get('screen').width / 5,
            justifyContent: 'center',
            left: 55,
            flex: 1,
          },

          tabBarIndicatorContainerStyle: {
            zIndex: 100,
          },
        }}>
        <Tabs.Screen name="Customer" component={CustomerScreen} />
        <Tabs.Screen name="Supplier" component={SupplierScreen} />
      </Tabs.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Main"
          component={Home}
          options={({navigation, route}) => ({
            title: 'Mydue',
            headerTitleAlign: 'left',
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
                  source={require('./src/Splash/assests/logo2.png')}
                  style={{resizeMode: 'contain', height: 40, width: 50}}
                />
              </View>
            ),

            headerRight: () => (
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Profile')}>
                  <Icon name="more-vert" color={'black'} size={25} />
                </TouchableOpacity>
              </View>
            ),
          })}
        />

        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Mobile"
          component={SignupNum}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Otp"
          component={OtpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Name"
          component={NameScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen name="Add" component={AddScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Send" component={SendScreen} />
        <Stack.Screen name="ChatS" component={ChatScreenS} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
