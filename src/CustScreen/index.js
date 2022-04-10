import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  Linking,
  LogBox,
  Image,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
//import {Button, List} from 'react-native-paper';
import {ListItem, Avatar, Button} from 'react-native-elements';
import {DATA} from '../../mockData';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Contacts from 'react-native-contacts';
import Permission from '../../components/Permission';
import {useNavigation} from '@react-navigation/native';
import {API_KEY} from '@env';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {CUST_DATA} from '../../Redux/actionType';
import {ActivityIndicator} from 'react-native-paper';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon1 from 'react-native-vector-icons/Ionicons';

const CustomerScreen = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(false);
  const [Cdata, setData] = useState([]);
  //const navigation = useNavigation();
  const dispatch = useDispatch();
  const cust = useSelector(state => state.cdata);
  const user = useSelector(state => state.user_id);
  const sheetRef = useRef();

  useEffect(() => {
    LogBox.ignoreLogs(['EventEmitter.removeListener']);
  }, []);

  //console.log({abc: cust});
  //console.log({userMain: user});

  const onCustomerData = async () => {
    // getData();
    setLoading(true);
    await axios
      .post(`${API_KEY}/getCustomerOrSupplierList`, {
        //user_id: `${userId}`,
        user_id: `${user}`,
        customer_type: `customer`,
      })
      .then(response => {
        dispatch({
          type: CUST_DATA,
          payload: response.data.data,
        });
        setLoading(false);
      })
      .catch(e => alert(e.message));
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('backed');
      onCustomerData();
    });
    return () => {
      unsubscribe;
    };
  }, [navigation]);

  useEffect(() => {
    onCustomerData();
  }, []);

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
      <ListItem
        bottomDivider
        onPress={() =>
          navigation.navigate('Chat', {
            name: item.customer_name,
            number: item.customer_mobile,
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
                  backgroundColor: 'green',
                  //backgroundColor: item.color,
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
                Due
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
            data={cust} //Cdata
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
          // onPress={() =>
          //   Linking.openURL('content://com.android.contacts/contacts')
          // }
          //onPress={onPermission}
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
      {/* <Permission
        visible={visible}
        visibleBackdrop={onTigger}
        visibleSwipe={onTigger}
        onClick={onNavigate}
      /> */}
      <Permission sheetRef={sheetRef} onclick={onNavigate} />
    </>
  );
};

export default CustomerScreen;

const styles = StyleSheet.create({});
