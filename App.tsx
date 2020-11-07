/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

declare const global: {HermesInternal: null | {}};

const App = () => {

  const onPress = () => {
    console.log('hello')
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <LinearGradient 
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={['#A9DEF9', '#D68FD6']} 
          style={styles.container}>
          <View style={styles.viewImg}>
            <Image
              style={styles.imgLogo}
              source={require('./source/assets/images/cards-home-logo.png')}
            />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.textTitle}>Bienvenue !</Text>
            <Text style={styles.textDescription}>CardApp a pour but de vous aider à découvrir de nombreux jeux de cartes.</Text>
            <Text style={styles.textDescription}>Vous pourrez aussi en ajouter de nouveaux et les partager entre amis.</Text>
          </View>
          <View style={styles.viewBtn}>
            <TouchableOpacity
              style={styles.btnOk}
              onPress={onPress}
            >
            <Text style={styles.textBtn}>Let's go !</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width:'100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  viewImg: {
    flex:2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewText: {
    flex:2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBtn: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    fontSize:30,
    marginBottom:30,
    color:'white',
  },
  textDescription : {
    fontSize:18,
    marginLeft:20,
    marginRight:20,
    textAlign: 'center',
    color:'white',
  },
  imgLogo: {
    width:200,
    height:200,
  },
  btnOk: {
    width:'60%',
    height:50,
    backgroundColor:'rgba(0, 0, 0, 0.65)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:25,
  },
  textBtn: {
    color:'white',
    fontSize:20,
  }
});

export default App;