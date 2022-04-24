import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const Buttons = ({navigation, buttonStyle, title, onclick, iconName}) => {
  return (
    <View>
      <Button
        onPress={onclick}
        title={title}
        titleStyle={{
          fontSize: 18,
          fontFamily: 'ErasMediumITC',
          marginHorizontal: 5,
        }}
        buttonStyle={buttonStyle}
        icon={<Icon name={iconName} size={25} color={'white'} />}
      />
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({});
