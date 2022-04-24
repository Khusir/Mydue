import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

const History = ({
  viewStyle,
  containerStyle,
  timestampView,
  timestampText,
  viewStyle1,
  viewText1,
}) => {
  return (
    <>
      <View style={viewStyle}>
        <ScrollView contentContainerStyle={containerStyle}>
          <View style={timestampView}>
            <Text style={timestampText}>{moment().format('DD MMM, YYYY')}</Text>
          </View>
          <View style={viewStyle1}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Icon name="arrow-down-outline" color={'green'} size={20} />
              </View>
              <View>
                <Text style={viewText1}>₹ 1000</Text>
              </View>
              <View style={{position: 'absolute', right: 0}}>
                <Icon name="document-text-outline" size={20} color="black" />
              </View>
              {/* <View style={styles.stampView}>
                <Text style={styles.sendTimeStamp}>
                  {moment().format('hh:mm A')}
                </Text>
              </View> */}
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <View style={styles.amountView}>
              <Text style={styles.amountText2}>
                {moment().format('hh:mm A')}
              </Text>
            </View>
            <View style={styles.amountView}>
              <Text style={styles.amountText2}>Bill</Text>
            </View>
          </View>

          <View style={styles.viewStyle2}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Icon name="arrow-down-outline" color={'red'} size={20} />
              </View>
              <View>
                <Text style={styles.amountText}>₹ 1000</Text>
              </View>
              {/* <View style={styles.stampView}>
                <Text style={styles.sendTimeStamp}>
                  {moment().format('hh:mm A')}
                </Text>
              </View> */}
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <View style={styles.amountText1}>
              <Text style={styles.amountText2}>
                {moment().format('hh:mm A')}
              </Text>
            </View>
            <View style={styles.amountText1}>
              <Text style={styles.amountText2}>Received</Text>
            </View>
          </View>
        </ScrollView>
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
  },
  amountText1: {
    alignSelf: 'flex-end',
    position: 'relative',
    top: -15,
    right: 15,
    marginLeft: 90,
  },
  amountView: {
    alignSelf: 'flex-start',
    position: 'relative',
    left: 10,
    top: -15,
    marginRight: 110,
  },
  stampView: {
    marginHorizontal: 40,
    justifyContent: 'flex-end',
    top: 10,
  },
  amountText2: {
    fontSize: 10,
    color: 'grey',
    fontFamily: 'ErasMediumITC',
  },
});
