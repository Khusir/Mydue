import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

const SupplierScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'flex-end'}}>
      <Button
        mode="contained"
        color="#FFC300"
        labelStyle={{fontFamily: 'ErasMediumITC', top: 10}}
        style={{height: 50, width: '100%', alignItems: 'center'}}>
        Add Supplier
      </Button>
    </View>
  );
};

export default SupplierScreen;

const styles = StyleSheet.create({});
