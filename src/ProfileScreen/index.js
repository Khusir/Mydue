import {
  Dimensions,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = ({navigation}) => {
  //const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Satyajeet Kayal',
      headerStyle: {
        backgroundColor: '#FFC300',
        fontFamily: 'ErasMediumITC',
      },
      headerTitleAlign: 'left',
      headerTitleStyle: {
        fontFamily: 'ErasMediumITC',
      },
      headerLeft: () => (
        <View>
          <Icon
            name="person-circle-outline"
            size={30}
            color="black"
            style={{marginHorizontal: 5}}
          />
        </View>
      ),
      headerRight: () => (
        <View>
          <TouchableOpacity>
            <Icon name="create-outline" size={25} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);
  return (
    <>
      <View style={{flex: 1, flexDirection: 'column', top: 30, left: 5}}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View>
            <Icon
              name="person-circle-outline"
              color="#FFC300"
              size={25}
              style={{marginHorizontal: 20}}
            />
          </View>
          <View>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  fontFamily: 'ErasMediumITC',
                }}>
                Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            borderWidth: 0.19,
            borderColor: 'grey',
            width: Dimensions.get('screen').width / 1.5,
            left: 65,
            alignSelf: 'flex-start',
            top: 10,
          }}></View>

        <View style={{flexDirection: 'row', top: 25}}>
          <View>
            <Icon2
              name="app-registration"
              size={25}
              color="#FFC300"
              style={{marginHorizontal: 20}}
            />
          </View>
          <View>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  fontFamily: 'ErasMediumITC',
                }}>
                Change Mobile Number
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            borderWidth: 0.19,
            borderColor: 'grey',
            width: Dimensions.get('screen').width / 1.5,
            left: 65,
            alignSelf: 'flex-start',
            top: 35,
          }}></View>

        <View style={{flexDirection: 'row', top: 47}}>
          <View>
            <Icon
              name="lock-closed-outline"
              size={25}
              color="#FFC300"
              style={{marginHorizontal: 20}}
            />
          </View>
          <View>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  fontFamily: 'ErasMediumITC',
                }}>
                Security
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            borderWidth: 0.19,
            borderColor: 'grey',
            width: Dimensions.get('screen').width / 1.5,
            left: 65,
            alignSelf: 'flex-start',
            top: 56,
          }}></View>

        <View style={{flexDirection: 'row', top: 68}}>
          <View>
            <Icon
              name="help-circle-outline"
              size={25}
              color="#FFC300"
              style={{marginHorizontal: 20}}
            />
          </View>
          <View>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  fontFamily: 'ErasMediumITC',
                }}>
                Help
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            borderWidth: 0.19,
            borderColor: 'grey',
            width: Dimensions.get('screen').width / 1.5,
            left: 65,
            alignSelf: 'flex-start',
            top: 77,
          }}></View>

        <View style={{flexDirection: 'row', top: 88}}>
          <View>
            <Icon2
              name="privacy-tip"
              size={25}
              color="#FFC300"
              style={{marginHorizontal: 20}}
            />
          </View>
          <View>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  fontFamily: 'ErasMediumITC',
                }}>
                Terms & Services
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
