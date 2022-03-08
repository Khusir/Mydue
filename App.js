import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import Routes from './Routes';
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

      <Routes />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
