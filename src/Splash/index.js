import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';

const SplashScreen = ({navigation}) => {
  console.log({auth: auth});
  const auth = useSelector(state => state.user_id);
  const [data, setData] = useState('');
  useEffect(() => {
    let myTimeout = setTimeout(() => {
      navigation.replace('Mobile');
      // let userData = AsyncStorage.getItem('userData');
      // if (userData !== null) {
      //   navigation.navigate('Main');
      // }
      if (auth === null && '') {
        return navigation.replace('Mobile');
      } else if (auth === undefined && '') {
        return navigation.replace('Mobile');
      } else {
        //navigation.navigate('Main');
      }
    }, 1500);

    return () => clearTimeout(myTimeout);
  }, []);

  // useEffect(() => {
  //   const authe = () => {
  //     if (auth === undefined && null) {
  //       navigation.navigate('Mobile');
  //     } else {
  //       navigation.navigate('Main');
  //     }
  //   };
  //   authe();
  // }, []);

  return (
    <View style={styles.container}>
      <Image source={require('./assests/logo3.png')} style={styles.mainLogo} />
      <View style={styles.containerSecond}>
        <View style={styles.containerThird}>
          <Image
            source={require('../Splash/assests/icon1.png')}
            style={styles.footerImg}
          />
          <Text style={styles.footerText}>Safe</Text>
        </View>
        <View style={styles.containerThird}>
          <Image
            source={require('../Splash/assests/icon2.png')}
            style={styles.footerImg}
          />
          <Text style={styles.footerText}>Secure</Text>
        </View>
        <View style={styles.containerThird}>
          <Image
            source={require('../Splash/assests/icon3.png')}
            style={styles.footerImg}
          />
          <Text style={styles.footerText}>Private</Text>
        </View>
        <View style={styles.containerThird}>
          <Image
            source={require('../Splash/assests/icon4.png')}
            style={styles.footerImg}
          />
          <Text style={styles.footerText}>Trusty</Text>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC300',
  },
  mainLogo: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width / 1.5,
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  containerSecond: {
    justifyContent: 'center',
    flexDirection: 'row',
    bottom: 20,
    width: Dimensions.get('screen').width,
  },
  containerThird: {
    marginHorizontal: 3,
  },
  footerImg: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  footerText: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 11,
    fontFamily: 'ErasMediumITC',
  },
});
