import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import LottieAnimation from 'lottie-react-native';
import loadingImage from '../assets/loadingPlant.json';

export function Load(){
  return (
    <View style={styles.container}>
      <LottieAnimation 
        source={loadingImage}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center' 
  },
  animation:{
    backgroundColor: 'transparent',
    width:200,
    height:200,
  }
})