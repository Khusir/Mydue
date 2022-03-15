import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
//import {Button, List} from 'react-native-paper';
import {ListItem, Avatar, Button} from 'react-native-elements';
import {DATA} from '../../mockData';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Permission from '../../components/Permission';

const SupplierScreen = ({navigation}) => {
  const [visible, setVisible] = useState(false);

  const onTigger = () => {
    setVisible(!visible);
  };

  const onNavigate = () => {
    navigation.navigate('Add');
  };
  const onPermission = () => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
      }).then(() => {
        loadContacts();
      });
    } else {
      loadContacts();
    }
  };

  const loadContacts = () => {
    Contacts.getAll()
      .then(contacts => {
        contacts.sort(
          (a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase(),
        );
        console.log(contacts);
      })
      .catch(e => {
        alert('Permission to access contact was denied');
      });
  };

  // const openContact = () => {
  //   Contacts.
  // };

  const renderList = ({item}) => (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ListItem bottomDivider>
        <ListItem.Swipeable
          rightContent={
            <View
              style={{
                backgroundColor: 'red',
                height: 40,
                borderRadius: 20,
                width: 40,
                alignSelf: 'center',
                shadowOffset: 1,
                zIndex: 100,
                left: 10,
              }}>
              <TouchableOpacity activeOpacity={0.8}>
                <Icon
                  name="delete"
                  color={'white'}
                  style={{
                    alignSelf: 'center',
                    justifyContent: 'center',
                    top: 5,
                    elevation: 50,
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          }
          containerStyle={{
            flex: 1,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            width: Dimensions.get('screen').width,
          }}>
          <ListItem.Content
            onTouchEnd={() =>
              navigation.navigate('ChatS', {
                name: item.name,
                number: item.number,
              })
            }>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                //alignItems: 'center',
                position: 'absolute',
                left: -15,
              }}>
              <View>
                <Avatar
                  size={50}
                  rounded
                  title={item.name.charAt(0)}
                  containerStyle={{
                    //backgroundColor: '#3d4db7',
                    backgroundColor: item.color,
                    //opacity: 1,
                  }}
                />
              </View>
              <View>
                <ListItem.Title
                  style={{left: 10, top: 5, fontFamily: 'ErasMediumITC'}}>
                  {item.name}
                </ListItem.Title>
              </View>
            </View>

            <ListItem.Subtitle
              style={{
                position: 'absolute',
                justifyContent: 'center',
                alignSelf: 'center',
                fontSize: 11,
                top: 5,
                left: 45,
              }}>
              {item.description}
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Content
            style={{
              position: 'absolute',
              justifyContent: 'center',
              alignSelf: 'center',
              right: 30,
            }}>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <View>
                <ListItem.Subtitle style={{fontSize: 12, color: 'green'}}>
                  {`₹${item.amount}`}
                </ListItem.Subtitle>
              </View>
              <View>
                <ListItem.Subtitle
                  style={{fontSize: 12, textAlign: 'right', color: 'grey'}}>
                  {item.status}
                </ListItem.Subtitle>
              </View>
            </View>
          </ListItem.Content>
        </ListItem.Swipeable>
      </ListItem>
    </View>
  );

  return (
    <>
      <View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={DATA}
          renderItem={renderList}
          scrollEnabled={true}
          contentContainerStyle={{paddingBottom: 50}}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          bottom: 0,
          position: 'absolute',
        }}>
        <Button
          onPress={onTigger}
          icon={
            <Icon
              name="account-plus"
              color={'black'}
              size={25}
              style={{marginHorizontal: 10}}
            />
          }
          iconContainerStyle={{
            justifyContent: 'center',
          }}
          iconPosition="left"
          buttonStyle={{backgroundColor: '#FFC300'}}
          title={'Add Contact'}
          containerStyle={{
            width: Dimensions.get('screen').width,
            backgroundColor: '#FFC300',
            height: 50,
            justifyContent: 'center',
          }}
          titleStyle={{
            color: 'black',
            fontFamily: 'ErasMediumITC',
          }}
        />
      </View>
      <Permission
        visible={visible}
        visibleBackdrop={onTigger}
        visibleSwipe={onTigger}
        onClick={onNavigate}
      />
    </>
  );
};

export default SupplierScreen;

const styles = StyleSheet.create({});
