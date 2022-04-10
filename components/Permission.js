import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {SheetBottom, List, ListItem} from 'material-bread';
import Icon from 'react-native-vector-icons/Ionicons';
import RBSheet from 'react-native-raw-bottom-sheet';

const Permission = ({sheetRef, onclick}) => {
  return (
    <>
      <RBSheet
        ref={sheetRef}
        closeOnDragDown={true}
        animationType="slide"
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: 'grey',
            width: 100,
          },
          container: {
            backgroundColor: 'white',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            height: 130,
            elevation: 20,
          },
        }}>
        <View style={{top: -13}}>
          <View
            style={{
              flexDirection: 'column',
              top: 15,
            }}>
            <View
              style={{flexDirection: 'row', alignSelf: 'flex-start', top: 10}}>
              <View style={{marginHorizontal: 30}}>
                <Icon name="phone-portrait-outline" color={'black'} size={25} />
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: 'ErasMediumITC',
                    fontSize: 18,
                    color: 'black',
                  }}>
                  Add Contact From Phone
                </Text>
              </View>
            </View>
            <View
              style={{
                borderColor: 'grey',
                width: Dimensions.get('screen').width / 1.1,
                borderWidth: 0.17,
                alignSelf: 'center',
                top: 20,
              }}></View>
            <View
              style={{flexDirection: 'row', alignSelf: 'flex-start', top: 30}}
              onTouchEnd={onclick}>
              <View style={{marginHorizontal: 30}}>
                <Icon name="person-add-outline" color={'black'} size={25} />
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: 'ErasMediumITC',
                    fontSize: 18,
                    color: 'black',
                  }}>
                  Add Contact Manually
                </Text>
              </View>
            </View>
          </View>
        </View>
      </RBSheet>
    </>
  );
};

export default Permission;

const styles = StyleSheet.create({});
