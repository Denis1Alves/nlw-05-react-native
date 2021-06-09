import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import userProfileImage from '../assets/profile.jpg';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header(){
  const [userName,setUserName] = useState<string>();

  useEffect(()=>{
    async function GetUserNameStorage() {
      const user = await AsyncStorage.getItem('@plantmanager:user');
      setUserName(user || '');
    }
    GetUserNameStorage();
  }
  ,[]);
  
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>

      <Image style={styles.imageProfile} source={userProfileImage}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    marginTop: getStatusBarHeight() //considera automaticamente o header do IPhone
  },
  greeting:{
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  userName:{
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight:40
  },
  imageProfile:{
    width: 70,
    height: 70,
    borderRadius: 40
  }
});