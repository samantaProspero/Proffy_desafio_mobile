import React from 'react';
import { View, ImageBackground, Text, Image } from 'react-native';
import giveClassesBgImage from '../../assets/images/give-classes-background.png'

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Landing from '../Landing';
import IntroImage from '../../assets/images/Intro.png';


function Splash(){
  const {navigate} = useNavigation();
  // const {goBack} = useNavigation();
  function handleNavigateBack(){
    navigate('Onboarding')
  }
  return (
    <View style={styles.container}>
      <Image source={IntroImage} style={styles.banner} />

      <ImageBackground 
        resizeMode="contain" 
        source={giveClassesBgImage} 
        style={styles.content}
      >
      </ImageBackground>
      <RectButton onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  )
}
export default Splash;