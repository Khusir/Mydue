import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from './src/Splash/index';
const App = () => {
  return (
    <>
      <StatusBar
        //backgroundColor="#f9db00"
        backgroundColor={'transparent'}
        barStyle="dark-content"
        translucent={true}
        animated={true}
      />
      <SplashScreen />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
