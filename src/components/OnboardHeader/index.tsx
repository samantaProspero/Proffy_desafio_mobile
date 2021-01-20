import React, { useState, ReactNode } from 'react';
import { View, Image, ImageBackground, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import Estudar from '../../assets/images/icons/Estudar.png';
import OnbordBgImage from '../../assets/images/onboard-background.png'
import goIcon from '../../assets/images/icons/go.png'


interface OnboardHeaderProps{
  title:string;
  description: string;
  iconTopBar?: ReactNode;
  backgroundTopBar: string;
  destinationNavigate: string;
}

import styles from './styles'


const OnboardHeader:React.FC<OnboardHeaderProps> = ({title, description, iconTopBar, backgroundTopBar, destinationNavigate}) => {
  const { navigate } = useNavigation();
  function handleGo() {
    navigate(destinationNavigate);
  }
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
      <ImageBackground 
        resizeMode="center" 
        source={OnbordBgImage} 
        style={[styles.content, {backgroundColor: backgroundTopBar}]}
      >
      {iconTopBar}
      </ImageBackground>
      </View>
      <View>
        <Text style={styles.number} >{title}</Text>
        <Text style={styles.description} >
          {description}
        </Text>
        <BorderlessButton onPress={handleGo}>
          <Image source={goIcon} resizeMode="contain" style={styles.goicon}/>
        </BorderlessButton>

      </View>

    </View>
  )
}
export default OnboardHeader;

