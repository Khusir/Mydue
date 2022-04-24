import {StyleSheet, Text, View, StatusBar} from 'react-native';
import * as React from 'react';
import Routes from './Routes';
import {Provider as StoreProvider} from 'react-redux';
import store from './Redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import reduxstore from './Redux/store';
import {ViewPropTypes} from 'deprecated-react-native-prop-types';

const App = () => {
  const {store, persistor} = reduxstore();
  return (
    <>
      <StoreProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar
            //backgroundColor="#f9db00"
            backgroundColor={'transparent'}
            barStyle="dark-content"
            translucent={true}
            animated={true}
          />

          <Routes />
        </PersistGate>
      </StoreProvider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
