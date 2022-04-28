import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import ImageModal from 'react-native-image-modal';

const History = ({
  viewStyle,
  containerStyle,
  timestampView,
  timestampText,
  viewStyle1,
  viewText1,
  timeStamp,
  payData,
}) => {
  const imageBox = item => {
    return (
      <ImageModal
        resizeMode="contain"
        imageBackgroundColor="#000000"
        style={{
          width: 250,
          height: 250,
        }}
        // source={{
        //   uri: item.txn_file,
        // }}
        source={{
          uri: `https://technotricksystems.com/mydue/upload/${item.txn_file}`,
        }}
      />
    );
  };
  return (
    <>
      <View style={viewStyle}>
        <FlatList
          contentContainerStyle={{paddingBottom: 50}}
          data={payData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <>
              <View style={timestampView} key={index}>
                {/* <Text style={timestampText}>
                  {moment().format('DD MMM, YYYY')}
                </Text> */}

                <Text style={timestampText}>{item.txn_date}</Text>
              </View>
              <View>
                {item.txn_type === 'Received' ? (
                  <>
                    <View style={viewStyle1}>
                      <View style={{flexDirection: 'row'}}>
                        <View>
                          <Icon
                            name="arrow-down-outline"
                            color={'green'}
                            size={20}
                          />
                        </View>
                        <View>
                          <Text
                            style={viewText1}>{`₹ ${item.txn_amount}`}</Text>
                        </View>
                        <View style={{alignSelf: 'flex-start', left: 5}}>
                          {item.txn_file == '' ? null : (
                            <>
                              <View
                                style={{
                                  position: 'absolute',
                                  right: 0,
                                  //alignSelf: 'center',
                                }}>
                                <Icon
                                  onPress={() => imageBox(item)}
                                  name="document-text-outline"
                                  size={20}
                                  color="black"
                                  // onPress={() => imageBox(item)}
                                />
                              </View>
                              <View style={styles.stampView}>
                                <Text style={styles.sendTimeStamp}>Bill</Text>
                              </View>
                            </>
                          )}
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        // justifyContent: 'flex-start',
                        // alignSelf: 'flex-start',
                      }}>
                      <View style={styles.amountView}>
                        <Text style={styles.amountText2}>{item.txn_note}</Text>
                      </View>
                      <View style={styles.amountView}>
                        <Text style={styles.amountText3}>{item.txn_type}</Text>
                      </View>
                    </View>
                  </>
                ) : null}
              </View>
              <View>
                {item.txn_type === 'Payment' ? (
                  <>
                    <View style={styles.viewStyle2}>
                      <View style={{flexDirection: 'row'}}>
                        <View>
                          <Icon
                            name="arrow-up-outline"
                            color={'red'}
                            size={20}
                          />
                        </View>
                        <View>
                          <Text
                            style={
                              styles.amountText
                            }>{`₹ ${item.txn_amount}`}</Text>
                        </View>
                        <View style={{alignSelf: 'flex-start'}}>
                          {item.txn_file == '' ? null : (
                            <>
                              <View style={{position: 'absolute', right: 0}}>
                                <Icon
                                  name="document-text-outline"
                                  size={20}
                                  color="black"
                                  // onPress={() => imageBox(item)}
                                />
                              </View>
                              <View style={styles.stampView}>
                                <Text style={styles.sendTimeStamp}>Bill</Text>
                              </View>
                            </>
                          )}
                        </View>

                        {/* <View style={styles.stampView}>
                          <Text style={styles.sendTimeStamp}>Bill</Text>
                        </View> */}
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        //justifyContent: 'flex-end',
                      }}>
                      <View style={styles.amountText1}>
                        <Text style={styles.amountText2}>{item.txn_note}</Text>
                      </View>
                      <View style={styles.amountText1}>
                        <Text style={styles.amountText4}>{item.txn_type}</Text>
                      </View>
                    </View>
                  </>
                ) : null}
              </View>
            </>
          )}
        />
      </View>
    </>
  );
};

export default History;

const styles = StyleSheet.create({
  viewStyle2: {
    padding: 10,
    backgroundColor: '#ECECEC',
    alignSelf: 'flex-end',
    borderRadius: 5,
    marginBottom: 20,
    borderColor: 'black',
    elevation: 5,
    width: Dimensions.get('screen').width / 2,
    marginHorizontal: 10,
  },
  amountText: {
    color: 'red',
    left: 10,
    fontSize: 18,
    fontFamily: 'ErasMediumITC',
  },
  sendTimeStamp: {
    color: 'grey',
    fontSize: 10,
    fontFamily: 'ErasMediumITC',
    top: 10,
    left: 20,
  },
  amountText1: {
    alignSelf: 'flex-start',
    position: 'absolute',
    top: -15,
    left: 170,
    //marginLeft: 90,
  },
  amountView: {
    alignSelf: 'flex-start',
    position: 'absolute',
    left: 10,
    top: -15,
    //marginRight: 70,
  },
  stampView: {
    marginHorizontal: 25,
    justifyContent: 'flex-end',
    top: 10,
  },
  amountText2: {
    fontSize: 10,
    color: 'grey',
    fontFamily: 'ErasMediumITC',
    alignSelf: 'flex-start',
  },
  amountText3: {
    fontSize: 10,
    color: 'grey',
    fontFamily: 'ErasMediumITC',
    alignSelf: 'flex-end',
    //left: 130,
    left: Dimensions.get('screen').width / 2.6,
  },
  amountText4: {
    fontSize: 10,
    color: 'grey',
    fontFamily: 'ErasMediumITC',
    alignSelf: 'flex-end',
    //left: 130,
    left: Dimensions.get('screen').width / 2.6,
  },
});
