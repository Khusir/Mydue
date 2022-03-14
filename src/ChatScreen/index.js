import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import {Button} from 'react-native-elements';

const ChatScreen = ({route, navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${route.params.name}`,
      headerStyle: {
        backgroundColor: '#FFC300',
        fontFamily: 'ErasMediumITC',
      },
      headerTitleAlign: 'left',
      headerTitleStyle: {
        fontFamily: 'ErasMediumITC',
      },
      headerLeft: () => (
        <View
          style={{
            backgroundColor: 'black',
            height: 35,
            width: 35,
            borderRadius: 20,
            marginHorizontal: 10,
            //justifyContent: 'center',
            left: -5,
            top: 3,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Main')}>
            <Icon
              name="arrow-back-outline"
              size={25}
              color={'white'}
              style={{justifyContent: 'center', alignSelf: 'center', top: 4.5}}
            />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <>
          <View
            style={{
              alignSelf: 'center',
              position: 'absolute',
              right: Dimensions.get('screen').width / 1.85,
              top: 22,
            }}>
            <Text style={{color: 'black', fontFamily: 'ErasMediumITC'}}>
              {route.params.number}
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              <Icon2 name="more-vert" color={'black'} size={25} />
            </TouchableOpacity>
          </View>
        </>
      ),
    });
  }, [navigation]);
  return (
    <>
      <View
        style={{
          flex: 1,
          position: 'absolute',
          backgroundColor: 'white',
          height: Dimensions.get('screen').height / 15,
          width: Dimensions.get('screen').width,
          alignSelf: 'center',
          justifyContent: 'center',
          elevation: 20,
          borderRadius: 5,
          //shadowColor: 'black',
          //shadowOpacity: 1,
          //shadowOffset: 20,
          //shadowRadius: 100,
        }}>
        <View
          style={{
            backgroundColor: '#F2F5C8',
            height: 40,
            width: Dimensions.get('screen').width / 1.1,
            alignSelf: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 10,
            }}>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'ErasMediumITC',
                }}>
                Balance
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'ErasMediumITC',
                }}>
                ₹ 00.00
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{flex: 1, top: 55}}>
        <ScrollView contentContainerStyle={{paddingTop: 10}}>
          <View
            style={{
              padding: 10,
              backgroundColor: '#D1D1D1',
              alignSelf: 'center',
              borderRadius: 20,
              //marginRight: 5,
              marginBottom: 20,
              // maxWidth: '80%',
              //position: 'relative',
              borderColor: 'black',
              //borderWidth: 0.1,
              //left: 5,
              //elevation: 0,
              width: Dimensions.get('screen').width / 4.5,
              marginHorizontal: 10,
              height: 31,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 9,
                textAlign: 'center',
              }}>
              {moment().format('DD MMM, YYYY')}
            </Text>
          </View>

          <View
            style={{
              padding: 10,
              backgroundColor: '#ECECEC',
              alignSelf: 'flex-start',
              borderRadius: 5,
              //marginRight: 5,
              marginBottom: 20,
              // maxWidth: '80%',
              //position: 'relative',
              borderColor: 'black',
              //borderWidth: 0.1,
              //left: 5,
              elevation: 5,
              width: Dimensions.get('screen').width / 2,
              marginHorizontal: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Icon name="arrow-down-outline" color={'green'} size={20} />
              </View>
              <View>
                <Text
                  style={{
                    color: 'green',
                    left: 10,
                    fontSize: 18,
                    fontFamily: 'ErasMediumITC',
                  }}>
                  ₹ 1000
                </Text>
              </View>
              <View
                style={{
                  marginHorizontal: 40,
                  justifyContent: 'flex-end',
                }}>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 10,
                    fontFamily: 'ErasMediumITC',
                  }}>
                  {moment().format('hh:mm A')}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              alignSelf: 'flex-start',
              position: 'relative',
              left: 10,
              top: -15,
            }}>
            <Text style={{fontSize: 10, color: 'grey'}}>₹ 1,000 Advance</Text>
          </View>

          <View
            style={{
              padding: 10,
              backgroundColor: '#ECECEC',
              alignSelf: 'flex-end',
              borderRadius: 5,
              //marginRight: 5,
              marginBottom: 20,
              // maxWidth: '80%',
              //position: 'relative',
              borderColor: 'black',
              //borderWidth: 0.1,
              //left: 5,
              elevation: 5,
              width: Dimensions.get('screen').width / 2,
              marginHorizontal: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Icon name="arrow-down-outline" color={'red'} size={20} />
              </View>
              <View>
                <Text
                  style={{
                    color: 'red',
                    left: 10,
                    fontSize: 18,
                    fontFamily: 'ErasMediumITC',
                  }}>
                  ₹ 1000
                </Text>
              </View>
              <View
                style={{
                  marginHorizontal: 40,
                  justifyContent: 'flex-end',
                }}>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 10,
                    fontFamily: 'ErasMediumITC',
                  }}>
                  {moment().format('hh:mm A')}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              alignSelf: 'flex-end',
              position: 'relative',
              top: -15,
              right: 15,
            }}>
            <Text style={{fontSize: 10, color: 'grey'}}>₹ 1,000 Received</Text>
          </View>

          <View
            style={{
              padding: 10,
              backgroundColor: '#ECECEC',
              alignSelf: 'flex-start',
              borderRadius: 5,
              //marginRight: 5,
              marginBottom: 20,
              // maxWidth: '80%',
              //position: 'relative',
              borderColor: 'black',
              //borderWidth: 0.1,
              //left: 5,
              elevation: 5,
              width: Dimensions.get('screen').width / 2,
              marginHorizontal: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Icon name="arrow-down-outline" color={'green'} size={20} />
              </View>
              <View>
                <Text
                  style={{
                    color: 'green',
                    left: 10,
                    fontSize: 18,
                    fontFamily: 'ErasMediumITC',
                  }}>
                  ₹ 1000
                </Text>
              </View>
              <View
                style={{
                  marginHorizontal: 40,
                  justifyContent: 'flex-end',
                }}>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 10,
                    fontFamily: 'ErasMediumITC',
                  }}>
                  09:30 AM
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              padding: 10,
              backgroundColor: '#ECECEC',
              alignSelf: 'flex-end',
              borderRadius: 5,
              //marginRight: 5,
              marginBottom: 20,
              // maxWidth: '80%',
              //position: 'relative',
              borderColor: 'black',
              //borderWidth: 0.1,
              //left: 5,
              elevation: 5,
              width: Dimensions.get('screen').width / 2,
              marginHorizontal: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Icon name="arrow-down-outline" color={'red'} size={20} />
              </View>
              <View>
                <Text
                  style={{
                    color: 'red',
                    left: 10,
                    fontSize: 18,
                    fontFamily: 'ErasMediumITC',
                  }}>
                  ₹ 1000
                </Text>
              </View>
              <View
                style={{
                  marginHorizontal: 40,
                  justifyContent: 'flex-end',
                }}>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 10,
                    fontFamily: 'ErasMediumITC',
                  }}>
                  {moment().format('hh:mm A')}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              padding: 10,
              backgroundColor: '#D1D1D1',
              alignSelf: 'center',
              borderRadius: 20,
              //marginRight: 5,
              marginBottom: 20,
              // maxWidth: '80%',
              //position: 'relative',
              borderColor: 'black',
              //borderWidth: 0.1,
              //left: 5,
              //elevation: 0,
              width: Dimensions.get('screen').width / 4.5,
              marginHorizontal: 10,
              height: 31,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 9,
                textAlign: 'center',
              }}>
              {moment().format('DD MMM, YYYY')}
            </Text>
          </View>

          <View
            style={{
              padding: 10,
              backgroundColor: '#ECECEC',
              alignSelf: 'flex-start',
              borderRadius: 5,
              //marginRight: 5,
              marginBottom: 20,
              // maxWidth: '80%',
              //position: 'relative',
              borderColor: 'black',
              //borderWidth: 0.1,
              //left: 5,
              elevation: 5,
              width: Dimensions.get('screen').width / 2,
              marginHorizontal: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Icon name="arrow-down-outline" color={'green'} size={20} />
              </View>
              <View>
                <Text
                  style={{
                    color: 'green',
                    left: 10,
                    fontSize: 18,
                    fontFamily: 'ErasMediumITC',
                  }}>
                  ₹ 1000
                </Text>
              </View>
              <View
                style={{
                  marginHorizontal: 40,
                  justifyContent: 'flex-end',
                }}>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 10,
                    fontFamily: 'ErasMediumITC',
                  }}>
                  09:30 AM
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              padding: 10,
              backgroundColor: '#ECECEC',
              alignSelf: 'flex-end',
              borderRadius: 5,
              //marginRight: 5,
              marginBottom: 20,
              // maxWidth: '80%',
              //position: 'relative',
              borderColor: 'black',
              //borderWidth: 0.1,
              //left: 5,
              elevation: 5,
              width: Dimensions.get('screen').width / 2,
              marginHorizontal: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Icon name="arrow-down-outline" color={'red'} size={20} />
              </View>
              <View>
                <Text
                  style={{
                    color: 'red',
                    left: 10,
                    fontSize: 18,
                    fontFamily: 'ErasMediumITC',
                  }}>
                  ₹ 1000
                </Text>
              </View>
              <View
                style={{
                  marginHorizontal: 40,
                  justifyContent: 'flex-end',
                }}>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 10,
                    fontFamily: 'ErasMediumITC',
                  }}>
                  09:30 AM
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              padding: 10,
              backgroundColor: '#ECECEC',
              alignSelf: 'flex-start',
              borderRadius: 5,
              //marginRight: 5,
              marginBottom: 20,
              // maxWidth: '80%',
              //position: 'relative',
              borderColor: 'black',
              //borderWidth: 0.1,
              //left: 5,
              elevation: 5,
              width: Dimensions.get('screen').width / 2,
              marginHorizontal: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Icon name="arrow-down-outline" color={'green'} size={20} />
              </View>
              <View>
                <Text
                  style={{
                    color: 'green',
                    left: 10,
                    fontSize: 18,
                    fontFamily: 'ErasMediumITC',
                  }}>
                  ₹ 1000
                </Text>
              </View>
              <View
                style={{
                  marginHorizontal: 40,
                  justifyContent: 'flex-end',
                }}>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 10,
                    fontFamily: 'ErasMediumITC',
                  }}>
                  {moment().format('hh:mm A')}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              padding: 10,
              backgroundColor: '#ECECEC',
              alignSelf: 'flex-end',
              borderRadius: 5,
              //marginRight: 5,
              marginBottom: 20,
              // maxWidth: '80%',
              //position: 'relative',
              borderColor: 'black',
              //borderWidth: 0.1,
              //left: 5,
              elevation: 5,
              width: Dimensions.get('screen').width / 2,
              marginHorizontal: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Icon name="arrow-down-outline" color={'red'} size={20} />
              </View>
              <View>
                <Text
                  style={{
                    color: 'red',
                    left: 10,
                    fontSize: 18,
                    fontFamily: 'ErasMediumITC',
                  }}>
                  ₹ 1000
                </Text>
              </View>
              <View
                style={{
                  marginHorizontal: 40,
                  justifyContent: 'flex-end',
                }}>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 10,
                    fontFamily: 'ErasMediumITC',
                  }}>
                  09:30 AM
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              padding: 10,
              backgroundColor: '#ECECEC',
              alignSelf: 'flex-start',
              borderRadius: 5,
              //marginRight: 5,
              marginBottom: 20,
              // maxWidth: '80%',
              //position: 'relative',
              borderColor: 'black',
              //borderWidth: 0.1,
              //left: 5,
              elevation: 5,
              width: Dimensions.get('screen').width / 2,
              marginHorizontal: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Icon name="arrow-down-outline" color={'green'} size={20} />
              </View>
              <View>
                <Text
                  style={{
                    color: 'green',
                    left: 10,
                    fontSize: 18,
                    fontFamily: 'ErasMediumITC',
                  }}>
                  ₹ 1000
                </Text>
              </View>
              <View
                style={{
                  marginHorizontal: 40,
                  justifyContent: 'flex-end',
                }}>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 10,
                    fontFamily: 'ErasMediumITC',
                  }}>
                  09:30 AM
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              padding: 10,
              backgroundColor: '#ECECEC',
              alignSelf: 'flex-end',
              borderRadius: 5,
              //marginRight: 5,
              marginBottom: 20,
              // maxWidth: '80%',
              //position: 'relative',
              borderColor: 'black',
              //borderWidth: 0.1,
              //left: 5,
              elevation: 5,
              width: Dimensions.get('screen').width / 2,
              marginHorizontal: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Icon name="arrow-down-outline" color={'red'} size={20} />
              </View>
              <View>
                <Text
                  style={{
                    color: 'red',
                    left: 10,
                    fontSize: 18,
                    fontFamily: 'ErasMediumITC',
                  }}>
                  ₹ 1000
                </Text>
              </View>
              <View
                style={{
                  marginHorizontal: 40,
                  justifyContent: 'flex-end',
                }}>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 10,
                    fontFamily: 'ErasMediumITC',
                  }}>
                  09:30 AM
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              padding: 10,
              backgroundColor: '#ECECEC',
              alignSelf: 'flex-start',
              borderRadius: 5,
              //marginRight: 5,
              marginBottom: 20,
              // maxWidth: '80%',
              //position: 'relative',
              borderColor: 'black',
              //borderWidth: 0.1,
              //left: 5,
              elevation: 5,
              width: Dimensions.get('screen').width / 2,
              marginHorizontal: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Icon name="arrow-down-outline" color={'green'} size={20} />
              </View>
              <View>
                <Text
                  style={{
                    color: 'green',
                    left: 10,
                    fontSize: 18,
                    fontFamily: 'ErasMediumITC',
                  }}>
                  ₹ 1000
                </Text>
              </View>
              <View
                style={{
                  marginHorizontal: 40,
                  justifyContent: 'flex-end',
                }}>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 10,
                    fontFamily: 'ErasMediumITC',
                  }}>
                  09:30 AM
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              padding: 10,
              backgroundColor: '#ECECEC',
              alignSelf: 'flex-end',
              borderRadius: 5,
              //marginRight: 5,
              marginBottom: 20,
              // maxWidth: '80%',
              //position: 'relative',
              borderColor: 'black',
              //borderWidth: 0.1,
              //left: 5,
              elevation: 5,
              width: Dimensions.get('screen').width / 2,
              marginHorizontal: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Icon name="arrow-down-outline" color={'red'} size={20} />
              </View>
              <View>
                <Text
                  style={{
                    color: 'red',
                    left: 10,
                    fontSize: 18,
                    fontFamily: 'ErasMediumITC',
                  }}>
                  ₹ 1000
                </Text>
              </View>
              <View
                style={{
                  marginHorizontal: 40,
                  justifyContent: 'flex-end',
                }}>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 10,
                    fontFamily: 'ErasMediumITC',
                  }}>
                  09:30 AM
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              padding: 10,
              backgroundColor: '#ECECEC',
              alignSelf: 'flex-start',
              borderRadius: 5,
              //marginRight: 5,
              marginBottom: 20,
              // maxWidth: '80%',
              //position: 'relative',
              borderColor: 'black',
              //borderWidth: 0.1,
              //left: 5,
              elevation: 5,
              width: Dimensions.get('screen').width / 2,
              marginHorizontal: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Icon name="arrow-down-outline" color={'green'} size={20} />
              </View>
              <View>
                <Text
                  style={{
                    color: 'green',
                    left: 10,
                    fontSize: 18,
                    fontFamily: 'ErasMediumITC',
                  }}>
                  ₹ 1000
                </Text>
              </View>
              <View
                style={{
                  marginHorizontal: 40,
                  justifyContent: 'flex-end',
                }}>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 10,
                    fontFamily: 'ErasMediumITC',
                  }}>
                  09:30 AM
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              padding: 10,
              backgroundColor: '#ECECEC',
              alignSelf: 'flex-end',
              borderRadius: 5,
              //marginRight: 5,
              marginBottom: 20,
              // maxWidth: '80%',
              //position: 'relative',
              borderColor: 'black',
              //borderWidth: 0.1,
              //left: 5,
              elevation: 5,
              width: Dimensions.get('screen').width / 2,
              marginHorizontal: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Icon name="arrow-down-outline" color={'red'} size={20} />
              </View>
              <View>
                <Text
                  style={{
                    color: 'red',
                    left: 10,
                    fontSize: 18,
                    fontFamily: 'ErasMediumITC',
                  }}>
                  ₹ 1000
                </Text>
              </View>
              <View
                style={{
                  marginHorizontal: 40,
                  justifyContent: 'flex-end',
                }}>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 10,
                    fontFamily: 'ErasMediumITC',
                  }}>
                  09:30 AM
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View>
        <Button
          onPress={() =>
            navigation.navigate('Send', {
              Cname: route.params.name,
              Cnumber: route.params.number,
            })
          }
          title="Received"
          titleStyle={{
            fontSize: 18,
            fontFamily: 'ErasMediumITC',
            marginHorizontal: 5,
          }}
          buttonStyle={{
            height: 50,
            width: Dimensions.get('screen').width,
            backgroundColor: '#00C897',
          }}
          icon={<Icon name="arrow-down-outline" size={25} color={'white'} />}
        />
      </View>
    </>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
