import React, { useState } from 'react';
import { View, Image, ImageBackground, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import OnboardHeader from '../../components/OnboardHeader';
import GiveClasses from '../../assets/images/icons/give-classes.png';




import styles from '../../components/OnboardHeader/styles';

function Onboarding2 (){

  return (
    <View style={styles.container}>
      <OnboardHeader
        backgroundTopBar = '#04D361'
        destinationNavigate = 'SignIn'
        iconTopBar={(
          <Image source={GiveClasses} style={styles.banner} />
        )}
      
        title = '02.'
        description = 'Ou dê aulas sobre o que você mais conhece.'
      />
    </View>
  )
}
export default Onboarding2;