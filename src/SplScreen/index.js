import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
//import {Button, List} from 'react-native-paper';
import {ListItem, Avatar, Button} from 'react-native-elements';
import {DATA} from '../../mockData';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Permission from '../../components/Permission';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_KEY} from 'react-native-dotenv';
import {useDispatch, useSelector} from 'react-redux';
import {SUPP_DATA} from '../../Redux/actionType';
import Contacts from 'react-native-contacts';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Searchbar} from 'react-native-paper';
import Snackbar from 'react-native-snackbar';

const SupplierScreen = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const [userId, setUserId] = useState('');
  const [Cdata, setData] = useState([]);
  const sheetRef = useRef();
  const [loading, setLoading] = useState(false);
  const contactRef = useRef();
  let [contacts, setContacts] = useState([]);

  const dispatch = useDispatch();
  const supp = useSelector(state => state.sdata);
  const user = useSelector(state => state.user_id);

  //console.log({xyz: supp});

  const onTigger = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('backed');
      onSupplierData();
    });
    return () => {
      unsubscribe;
    };
  }, [navigation]);

  const onAddContact = async item => {
    try {
      setLoading(true);
      await axios
        .post(`${API_KEY}/createCustomerSupplier`, {
          //user_id: `${userId}`,
          user_id: `${user}`,
          customer_name: `${item.givenName} ${item.familyName}`,
          customer_mobile: `${item.phoneNumbers?.[0].number}`,
          customer_type: `supplier`,
        })
        .then(response => {
          console.log(response.data);
          setLoading(false);
          if (response.data.status == 200) {
            Snackbar.show({
              text: 'Contact Added successfully.',
              textColor: 'black',
              backgroundColor: '#FFC300',
              fontFamily: 'ErasMediumITC',
            });
          } else {
            setLoading(false);
            Snackbar.show({
              text: 'Contact Already Added.',
              textColor: 'black',
              backgroundColor: '#FFC300',
              fontFamily: 'ErasMediumITC',
            });
          }
          onSupplierData();
        })
        .catch(e => alert(e.message));
    } catch (e) {
      e.throw;
    }
  };

  const onSupplierData = async () => {
    //const data = AsyncStorage.getItem('userId');
    setLoading(true);
    await axios
      .post(`${API_KEY}/getCustomerOrSupplierList`, {
        //user_id: `${userId}`,
        user_id: `${user}`,
        customer_type: `supplier`,
      })
      .then(response => {
        console.log(response.data);
        dispatch({
          type: SUPP_DATA,
          payload: response.data.data,
        });
        setLoading(false);
      })
      .catch(e => alert(e.message));
  };

  const onNavigate = () => {
    navigation.navigate('Add');
  };

  const contactFetch = () => {
    contactRef.current.open();
    onPermission();
  };

  useEffect(() => {
    //getData();
    onSupplierData();
  }, []);

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
    setLoading(true);
    Contacts.getAll()
      .then(contacts => {
        contacts.sort(
          (a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase(),
        );

        setContacts(contacts);
        setLoading(false);
        //console.log(contacts);
      })
      .catch(e => {
        //alert('Permission to access contact was denied');
        Snackbar.show({
          text: 'Permission to access contact was denied',
          textColor: 'black',
          backgroundColor: '#FFC300',
          fontFamily: 'ErasMediumITC',
        });
      });
  };

  const search = text => {
    const phoneNumberRegex =
      /\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{3,15}\b/m;
    if (text === '' || text === null) {
      setLoading(true);
      loadContacts();
      setLoading(false);
    } else if (phoneNumberRegex.test(text)) {
      setLoading(true);
      Contacts.getContactsByPhoneNumber(text).then(contacts => {
        contacts.sort(
          (a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase(),
        );

        setContacts(contacts);
        setLoading(false);
        console.log('contacts', contacts);
      });
    } else {
      Contacts.getContactsMatchingString(text).then(contacts => {
        contacts.sort(
          (a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase(),
        );
        setContacts(contacts);
        console.log('contacts', contacts);
      });
    }
  };

  const openContact = item => {
    console.log(JSON.stringify(item));
    Contacts.openExistingContact(item);
  };

  const renderList = ({item}) => (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ListItem
        bottomDivider
        onPress={() =>
          navigation.navigate('ChatS', {
            name: item.customer_name,
            number: item.customer_mobile,
            supplierId: item.customer_supplier_id,
          })
        }>
        <ListItem.Content
          style={{
            //flex: 1,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            width: Dimensions.get('screen').width,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              //alignItems: 'center',
              position: 'absolute',
              left: -5,
            }}>
            <View>
              <Avatar
                size={50}
                rounded
                title={item.customer_name.charAt(0)}
                containerStyle={{
                  //backgroundColor: '#3d4db7',
                  backgroundColor: 'red',
                  //opacity: 1,
                }}
              />
            </View>
            <View>
              <ListItem.Title
                style={{left: 15, top: 5, fontFamily: 'ErasMediumITC'}}>
                {item.customer_name}
              </ListItem.Title>
            </View>
          </View>

          <ListItem.Subtitle
            style={{
              position: 'absolute',
              justifyContent: 'center',
              alignSelf: 'center',
              fontSize: 11,
              top: 25,
              left: 60,
            }}>
            1000 Credit INR added on 12-03-2022
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Content
          style={{
            position: 'absolute',
            justifyContent: 'center',
            alignSelf: 'center',
            right: 10,
          }}>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <View>
              <ListItem.Subtitle style={{fontSize: 12, color: 'green'}}>
                {`₹ 2000`}
              </ListItem.Subtitle>
            </View>
            <View>
              <ListItem.Subtitle
                style={{fontSize: 12, textAlign: 'right', color: 'grey'}}>
                due
              </ListItem.Subtitle>
            </View>
          </View>
        </ListItem.Content>
      </ListItem>
    </View>
  );

  return (
    <>
      <View>
        {loading == false ? (
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={supp} //Cdata
            renderItem={renderList}
            scrollEnabled={true}
            contentContainerStyle={{paddingBottom: 50}}
            refreshing={true}
          />
        ) : (
          <View
            style={{
              backgroundColor: 'white',
              elevation: 20,
              height: 90,
              width: 100,
              alignSelf: 'center',
              position: 'absolute',
              top: Dimensions.get('screen').height / 4,
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <View style={{flexDirection: 'column'}}>
              <Image
                source={require('../CustScreen/assets/loading.gif')}
                style={{height: 80, width: 100}}
                resizeMode="contain"
              />
              <View style={{alignSelf: 'center', top: -15}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 15,
                    fontFamily: 'ErasMediumITC',
                  }}>
                  Loading...
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          bottom: 0,
          position: 'absolute',
        }}>
        <Button
          //onPress={onTigger}
          onPress={() => sheetRef.current.open()}
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

      <RBSheet
        ref={contactRef}
        closeOnDragDown={true}
        closeOnPressBack={true}
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
            height: Dimensions.get('screen').height,
            elevation: 20,
          },
        }}>
        <View>
          <Searchbar
            style={{
              elevation: 50,
              width: Dimensions.get('screen').width / 1.01,
              alignSelf: 'center',
            }}
            placeholder="Search Contact"
            onChangeText={search}
          />
          {loading == false ? (
            <FlatList
              data={contacts}
              style={{top: 5}}
              keyExtractor={item => item.recordID}
              renderItem={({item}) => {
                {
                  //console.log('contact -> ' + JSON.stringify(item));
                }
                return (
                  <>
                    <ListItem bottomDivider onPress={() => onAddContact(item)}>
                      <ListItem.Content
                        style={{
                          height: 40,
                          justifyContent: 'center',
                          alignItems: 'flex-start',
                          width: Dimensions.get('screen').width,
                        }}>
                        <View
                          style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            //alignItems: 'center',
                            position: 'absolute',
                            left: -5,
                          }}>
                          <View>
                            <Avatar
                              size={50}
                              rounded
                              title={`${item.displayName.charAt(0)}`}
                              containerStyle={{
                                backgroundColor: 'green',
                                //backgroundColor: item.color,
                                //opacity: 1,
                              }}
                            />
                          </View>
                        </View>

                        {/* <ListItem.Title
                        style={{
                          left: 60,
                          top: 0,
                          fontFamily: 'ErasMediumITC',
                          fontSize: 18,
                        }}>
                        {item.displayName == item.phoneNumbers?.[0]?.number
                          ? 'No Name'
                          : item.displayName}
                      </ListItem.Title> */}

                        <ListItem.Title
                          style={{
                            left: 60,
                            top: 0,
                            fontFamily: 'ErasMediumITC',
                            fontSize: 18,
                          }}>
                          {item.givenName == item.phoneNumbers?.[0]?.number
                            ? 'No Name'
                            : `${item.givenName} ${item.familyName}`}
                        </ListItem.Title>
                        <ListItem.Subtitle
                          style={{
                            left: 60,
                          }}>
                          {item.phoneNumbers?.[0]?.number}
                        </ListItem.Subtitle>
                      </ListItem.Content>
                    </ListItem>
                  </>
                );
              }}
            />
          ) : (
            <View
              style={{
                backgroundColor: 'white',
                elevation: 20,
                height: 90,
                width: 100,
                alignSelf: 'center',
                position: 'absolute',
                top: Dimensions.get('screen').height / 4,
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <View style={{flexDirection: 'column'}}>
                <Image
                  source={require('../CustScreen/assets/loading.gif')}
                  style={{height: 80, width: 100}}
                  resizeMode="contain"
                />
                <View style={{alignSelf: 'center', top: -15}}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      fontFamily: 'ErasMediumITC',
                    }}>
                    Loading...
                  </Text>
                </View>
              </View>
            </View>
          )}
        </View>
      </RBSheet>

      <Permission
        sheetRef={sheetRef}
        onclick={onNavigate}
        onContactClick={contactFetch}
      />
    </>
  );
};

export default SupplierScreen;

const styles = StyleSheet.create({});
