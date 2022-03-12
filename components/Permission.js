import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SheetBottom, List, ListItem} from 'material-bread';
import Icon from 'react-native-vector-icons/Ionicons';

const Permission = ({visible, visibleBackdrop, visibleSwipe, onClick}) => {
  return (
    <>
      <SheetBottom
        visible={visible}
        onBackdropPress={visibleBackdrop}
        duration={100}
        onSwipeDown={visibleSwipe}
        //wrapperStyles={{backgroundColor: 'transparent'}}
        style={{
          backgroundColor: '#FFC300',
          elevation: 30,
          borderRadius: 35,
        }}>
        <List
          style={{
            backgroundColor: 'white',
            borderRadius: 30,
            elevation: 50,
            //height: 20,
          }}>
          <ListItem
            textStyle={{fontFamily: 'ErasMediumITC'}}
            text="Add Contact From Phone"
            icon={
              <Icon name="phone-portrait-outline" color={'black'} size={25} />
            }
          />
          <ListItem
            onPress={onClick}
            textStyle={{fontFamily: 'ErasMediumITC'}}
            text="Add Contact Manually"
            icon={<Icon name="person-add-outline" color={'black'} size={25} />}
          />
        </List>
      </SheetBottom>
    </>
  );
};

export default Permission;

const styles = StyleSheet.create({});
