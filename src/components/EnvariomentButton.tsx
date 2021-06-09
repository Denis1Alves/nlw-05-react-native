import React from 'react';

import {
  Text,
  StyleSheet
} from 'react-native';

import {
  RectButton, 
  RectButtonProps
} from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnvariomentButtonProps extends RectButtonProps{
  title: string;
  active?: boolean;//opcional = ?
}

export function EnvariomentButton({title, active = false, ...rest}:EnvariomentButtonProps){
  return (
    <RectButton
      style={[
        styles.rectButton,
        active && styles.rectButtonActive
      ]}
      {...rest}
    >
      <Text style={[
        styles.rectButtonText,
        active && styles.rectButtonTextActive
        ]}>
        {title}
      </Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  rectButton:{
    backgroundColor: colors.shape,
    width: 76,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 5

  },
  rectButtonActive:{
    
    backgroundColor: colors.green_light
  },
  rectButtonText:{
    color: colors.heading,
    fontFamily: fonts.text
  },
  rectButtonTextActive:{
    color: colors.green_dark,
    fontFamily: fonts.heading,
  }
});